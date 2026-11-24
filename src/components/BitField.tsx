import { useEffect, useRef } from 'react'

/*
 * A small canvas "bit field". The studio mark (b d) is drawn as set bits on a
 * grid; the remaining cells flicker quietly like memory being read. Pointer
 * movement lights nearby bits in the signal colour, which then decay.
 */

const COLS = 28
const ROWS = 20

const GLYPH_B = [
  '10000',
  '10000',
  '11110',
  '10001',
  '10001',
  '10001',
  '11110',
]

const GLYPH_D = [
  '00001',
  '00001',
  '01111',
  '10001',
  '10001',
  '10001',
  '01111',
]

const COLOR_OFF = '#e2e2dc'
const COLOR_NOISE = '#b9b9b1'
const COLOR_ON = '#0e0e0c'
const COLOR_HOT = [212, 255, 58] as const

function buildMask() {
  const mask = new Uint8Array(COLS * ROWS)
  const scale = 2
  const glyphW = 5 * scale
  const glyphH = 7 * scale
  const gap = 2
  const totalW = glyphW * 2 + gap
  const offsetX = Math.floor((COLS - totalW) / 2)
  const offsetY = Math.floor((ROWS - glyphH) / 2)

  const stamp = (glyph: string[], ox: number) => {
    glyph.forEach((row, y) => {
      ;[...row].forEach((bit, x) => {
        if (bit !== '1') return
        for (let sy = 0; sy < scale; sy++) {
          for (let sx = 0; sx < scale; sx++) {
            const cx = ox + x * scale + sx
            const cy = offsetY + y * scale + sy
            mask[cy * COLS + cx] = 1
          }
        }
      })
    })
  }

  stamp(GLYPH_B, offsetX)
  stamp(GLYPH_D, offsetX + glyphW + gap)

  return mask
}

export function BitField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mask = buildMask()
    const noise = new Uint8Array(COLS * ROWS)
    const heat = new Float32Array(COLS * ROWS)
    const born = new Float32Array(COLS * ROWS)

    for (let i = 0; i < noise.length; i++) {
      noise[i] = !mask[i] && Math.random() < 0.08 ? 1 : 0
      const x = i % COLS
      const y = Math.floor(i / COLS)
      born[i] = (x + y * 0.35) * 22 + Math.random() * 80
    }

    let width = 0
    let height = 0
    let cell = 0
    let gap = 0
    let originX = 0
    let originY = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const pitch = Math.min(width / COLS, height / ROWS)
      gap = Math.max(2, Math.round(pitch * 0.14))
      cell = pitch - gap
      originX = (width - pitch * COLS + gap) / 2
      originY = (height - pitch * ROWS + gap) / 2
    }

    const draw = (elapsed: number) => {
      ctx.clearRect(0, 0, width, height)
      const pitch = cell + gap

      for (let i = 0; i < mask.length; i++) {
        const x = i % COLS
        const y = Math.floor(i / COLS)
        const px = originX + x * pitch
        const py = originY + y * pitch
        const visible = elapsed >= born[i]

        let fill = COLOR_OFF
        if (visible && mask[i]) fill = COLOR_ON
        else if (visible && noise[i]) fill = COLOR_NOISE

        ctx.fillStyle = fill
        ctx.fillRect(px, py, cell, cell)

        const h = heat[i]
        if (h > 0.02) {
          const [r, g, b] = COLOR_HOT
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(1, h)})`
          ctx.fillRect(px, py, cell, cell)
        }
      }
    }

    resize()

    if (reduced) {
      draw(Number.POSITIVE_INFINITY)
      const onResize = () => {
        resize()
        draw(Number.POSITIVE_INFINITY)
      }
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const pitch = cell + gap
      const gx = (event.clientX - rect.left - originX) / pitch
      const gy = (event.clientY - rect.top - originY) / pitch
      const radius = 2.4

      for (let y = Math.floor(gy - radius); y <= Math.ceil(gy + radius); y++) {
        for (let x = Math.floor(gx - radius); x <= Math.ceil(gx + radius); x++) {
          if (x < 0 || y < 0 || x >= COLS || y >= ROWS) continue
          const d = Math.hypot(x + 0.5 - gx, y + 0.5 - gy)
          if (d > radius) continue
          const i = y * COLS + x
          heat[i] = Math.max(heat[i], 1 - d / radius)
        }
      }
    }

    let frame = 0
    let running = false
    let start = 0
    let last = 0

    const tick = (now: number) => {
      if (!start) start = now
      const dt = Math.min(64, now - (last || now))
      last = now

      for (let i = 0; i < heat.length; i++) {
        if (heat[i] > 0) heat[i] = Math.max(0, heat[i] - dt * 0.0016)
      }

      if (Math.random() < dt * 0.012) {
        const i = Math.floor(Math.random() * noise.length)
        if (!mask[i]) noise[i] = noise[i] ? 0 : 1
      }

      draw(now - start)
      frame = requestAnimationFrame(tick)
    }

    const play = () => {
      if (running) return
      running = true
      last = 0
      frame = requestAnimationFrame(tick)
    }

    const pause = () => {
      running = false
      cancelAnimationFrame(frame)
    }

    let inView = false

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      if (inView && !document.hidden) play()
      else pause()
    })
    observer.observe(canvas)

    const onVisibility = () => {
      if (document.hidden) pause()
      else if (inView) play()
    }

    canvas.addEventListener('pointermove', onPointer)
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      pause()
      observer.disconnect()
      canvas.removeEventListener('pointermove', onPointer)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="bitfield-canvas" aria-hidden="true" />
}
