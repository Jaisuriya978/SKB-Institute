import { useEffect, useRef } from 'react'


import ConvocationImg1 from '../assets/Image7.JPG'
import ConvocationImg from '../assets/Image10.JPG'
import BrassLampImg from '../assets/Image5.JPG'
import portraitImg from '../assets/Image4.jpg'
import ConvocationImg2 from '../assets/Image3.JPG'

import Speech2 from '../assets/Image1.jpg'

import ConvocationImg4 from '../assets/Image9.JPG'
import PrizeImg from '../assets/Image11.JPG'
import ConvocationImg6 from '../assets/Image12.JPG'
import ConvocationImg5 from '../assets/Image13.JPG'
import ConvocationImg3 from '../assets/Image14.JPG'

import Speech4 from '../assets/Image16.JPG'
import Event from '../assets/Image17.JPG'
import Prize1 from '../assets/Image18.JPG'
import Convocation7 from '../assets/Image19.JPG'
import ConvocationImg7 from '../assets/Image20.JPG'
import BrassLampImg1 from '../assets/Image202.jpg'
import GroupImg from '../assets/Image203.jpg'

import SectionHeader from './SectionHeader'

export default function Image() {

  const sliderRef = useRef(null)

  const imgs = [
    { src: BrassLampImg, alt: 'Lamp lighting ceremony' },
    { src: ConvocationImg6, alt: 'Convocation group photo' },
    { src: Event, alt: 'SKB event' },
    { src: Speech4, alt: 'Graduation speech' },
    { src: ConvocationImg5, alt: 'Convocation group photo' },
    { src: Prize1, alt: 'Prize ceremony' },
    { src: ConvocationImg1, alt: 'Convocation day' },
    { src: ConvocationImg, alt: 'Convocation celebration' },
    { src: Convocation7, alt: 'Convocation celebration' },
    { src: ConvocationImg7, alt: 'Convocation celebration' },
    { src: ConvocationImg2, alt: 'Convocation celebration' },
    { src: Speech2, alt: 'Graduation speech' },
    { src: ConvocationImg4, alt: 'Convocation group photo' },
    { src: ConvocationImg3, alt: 'Convocation group photo' },
    { src: PrizeImg, alt: 'Prize ceremony' },
    { src: BrassLampImg1, alt: 'Lamp lighting ceremony' },
    { src: portraitImg, alt: 'SKB students' },
    { src: GroupImg, alt: 'SKB group photo' },
  ]

  // Duplicate images for smooth infinite scroll
  const loopImages = [...imgs, ...imgs]

  useEffect(() => {
    const slider = sliderRef.current

    if (!slider) return

    let animationFrame
    const scrollSpeed = 0.7

    const autoScroll = () => {
      slider.scrollLeft += scrollSpeed

      // Smooth infinite loop
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft -= slider.scrollWidth / 2
      }

      animationFrame = requestAnimationFrame(autoScroll)
    }

    animationFrame = requestAnimationFrame(autoScroll)

    return () => cancelAnimationFrame(animationFrame)
  }, [])
  return (
    <section className="section bg-light overflow-hidden py-2">
      <div className="container">

        {/* Header */}
        <div className="mb-4">

          <SectionHeader
            eyebrow={
              <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
                SKB Moments
              </span>
            }
            title="Moments of achievements"
            intro="Convocation and graduation moments that reflect the SKB experience."
          />

        </div>

        {/* Carousel */}
        <div
          ref={sliderRef}
          className="d-flex gap-4"
          style={{
            overflowX: 'hidden',
            scrollBehavior: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {loopImages.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: '520px',
                transform: 'translateZ(0)',
              }}
            >
              <div className="overflow-hidden rounded-4 shadow-sm">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  draggable="false"
                  className="w-100"
                  style={{
                    height: '300px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '20px',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}