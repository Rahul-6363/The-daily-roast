'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TextSequence {
  title: string
  subtitle: string
  smallTexts: string[]
  startProgress: number
  endProgress: number
}

interface CanvasSequenceProps {
  id: string
  folder: string
  frameCount: number
  bgColor: string
  textSequences: TextSequence[]
}

export default function CanvasSequence({
  id,
  folder,
  frameCount,
  bgColor,
  textSequences,
}: CanvasSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const textRefs = useRef<(HTMLDivElement | null)[]>([])

  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [loaded, setLoaded] = useState(false)

  // =========================
  // PRELOAD IMAGES
  // =========================
  useEffect(() => {
    let loadedCount = 0
    const imgArray: HTMLImageElement[] = []

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image()

      const paddedIndex = i.toString().padStart(3, '0')

      img.src = `/sequences/${folder}/ezgif-frame-${paddedIndex}.jpg`

      img.onload = () => {
        loadedCount++

        if (loadedCount === frameCount) {
          setLoaded(true)
        }
      }

      imgArray.push(img)
    }

    setImages(imgArray)
  }, [folder, frameCount])

  // =========================
  // GSAP + CANVAS
  // =========================
  useEffect(() => {
    if (!loaded) return
    if (!containerRef.current) return
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    if (!context) return

    const frame = {
      value: 0,
    }

    // =========================
    // RENDER FRAME
    // =========================
    const render = (index: number) => {
      const img = images[index]

      if (!img) return

      context.clearRect(0, 0, canvas.width, canvas.height)

      const canvasRatio = canvas.width / canvas.height
      const imgRatio = img.width / img.height

      let drawWidth = 0
      let drawHeight = 0
      let offsetX = 0
      let offsetY = 0

      // object-fit: cover
      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width
        drawHeight = canvas.width / imgRatio

        offsetY = (canvas.height - drawHeight) / 2
      } else {
        drawWidth = canvas.height * imgRatio
        drawHeight = canvas.height

        offsetX = (canvas.width - drawWidth) / 2
      }

      context.drawImage(
        img,
        offsetX,
        offsetY,
        drawWidth,
        drawHeight
      )
    }

    // =========================
    // RESIZE
    // =========================
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      render(Math.round(frame.value))
    }

    resizeCanvas()

    window.addEventListener('resize', resizeCanvas)

    render(0)

    // =========================
    // MAIN TIMELINE
    // =========================
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=6500',
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    })

    tl.to(frame, {
      value: frameCount - 1,
      snap: 'value',
      ease: 'none',

      onUpdate: () => {
        render(Math.round(frame.value))
      },
    })

    // =========================
    // TEXT ANIMATIONS
    // =========================
    textSequences.forEach((seq, i) => {
      const textEl = textRefs.current[i]

      if (!textEl) return

      gsap.fromTo(
        textEl,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: containerRef.current,
            start: `${seq.startProgress * 100}% center`,
            end: `${seq.startProgress * 100 + 10}% center`,
            scrub: true,
          },
        }
      )

      gsap.to(textEl, {
        opacity: 0,
        y: -60,
        ease: 'power3.in',

        scrollTrigger: {
          trigger: containerRef.current,
          start: `${seq.endProgress * 100 - 10}% center`,
          end: `${seq.endProgress * 100}% center`,
          scrub: true,
        },
      })
    })

    // =========================
    // REFRESH
    // =========================
    ScrollTrigger.refresh()

    // =========================
    // CLEANUP
    // =========================
    return () => {
      window.removeEventListener('resize', resizeCanvas)

      tl.kill()

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [loaded, images, frameCount, textSequences])

  return (
    <section
      id={id}
      ref={containerRef}
      style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: bgColor,
      }}
    >
      {/* CANVAS */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />

      {/* LOADING */}
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            color: '#fff',
            fontSize: '1.2rem',
            fontFamily: 'var(--font-body)',
          }}
        >
          Brewing Experience...
        </div>
      )}

      {/* TEXT OVERLAYS */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 5,
        }}
      >
        {textSequences.map((seq, idx) => (
          <div
            key={idx}
            ref={(el) => {
              textRefs.current[idx] = el
            }}
            style={{
              position: 'absolute',
              opacity: 0,
              color: '#fff',
              padding: '2rem',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              maxWidth: '900px',
            }}
          >
            <h2
              className="display-title"
              style={{
                marginBottom: '1rem',
              }}
            >
              {seq.title}
            </h2>

            <h3
              className="sub-title"
              style={{
                marginBottom: '2rem',
                fontStyle: 'italic',
              }}
            >
              {seq.subtitle}
            </h3>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {seq.smallTexts.map((txt, tidx) => (
                <p
                  key={tidx}
                  className="description-text"
                  style={{
                    fontSize: '1.1rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {txt}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}