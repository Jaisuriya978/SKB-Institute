import { useEffect, useRef } from 'react'

import GraduationImg3 from '../assets/Image2.jpg'
import GraduationImg from '../assets/Image6.jpg'
import ConvocationImg1 from '../assets/Image7.JPG'
import ConvocationImg from '../assets/Image10.JPG'
import BrassLampImg from '../assets/Image5.JPG'
import portraitImg from '../assets/Image4.jpg'
import ConvocationImg2 from '../assets/Image3.JPG'
import Speech1 from '../assets/Image8.jpg'
import Speech2 from '../assets/Image1.jpg'
import ConvocationImg4 from '../assets/Image9.JPG'
import PrizeImg from '../assets/Image11.JPG'
import ConvocationImg6 from '../assets/Image12.JPG'
import ConvocationImg5 from '../assets/Image13.JPG'
import ConvocationImg3 from '../assets/Image14.JPG'
import Speech3 from '../assets/Image15.JPG'
import Speech4 from '../assets/Image16.JPG'
import Event from '../assets/Image17.JPG'
import Prize1 from '../assets/Image18.JPG'
import Convocation7 from '../assets/Image19.JPG'
import ConvocationImg7 from '../assets/Image20.JPG'

import SectionHeader from './SectionHeader'

export default function Gallery() {

  const sliderRef = useRef(null)

  const imgs = [

    {
      src: BrassLampImg,
      alt: 'Lamp lighting ceremony',
    },
    {
      src: ConvocationImg5,
      alt: 'Convocation group photo',
    },
    {
      src: Speech4,
      alt: 'Graduation speech',
    },
    {
      src: ConvocationImg6,
      alt: 'Convocation group photo',
    },
    {
      src: Event,
      alt: 'SKB event',
    },
    {
      src: Prize1,
      alt: 'Prize ceremony',
    },
   

    {
      src: ConvocationImg1,
      alt: 'Convocation day',
    },
    {
      src: ConvocationImg,
      alt: 'Convocation celebration',
    },
    {
      src: Convocation7,
      alt: 'Convocation celebration',
    },
    {
      src: ConvocationImg7,
      alt: 'Convocation celebration', 
    },
    {
      src: ConvocationImg2,
      alt: 'Convocation celebration',
    },
    {
      src: Speech2,
      alt: 'Graduation speech',
    },
    {
      src: ConvocationImg4,
      alt: 'Convocation group photo',
    },
    {
      src: Speech3,
      alt: 'Convocation speech',
    },
    {
      src: ConvocationImg3,
      alt: 'Convocation group photo',
    },
    {
      src: PrizeImg,
      alt: 'Prize ceremony',
    },
    {
      src: Speech1,
      alt: 'Convocation speech',
    },

    {
      src: portraitImg,
      alt: 'SKB students',
    },

    {
      src: GraduationImg3,
      alt: 'Graduation day',
    },
   {
      src: GraduationImg,
      alt: 'Graduation ceremony',
    },

  ]

  // Auto Play Carousel
  useEffect(() => {

    const slider = sliderRef.current

    if (!slider) return

    let index = 0

    const interval = setInterval(() => {

      index++

      // Mobile & Desktop Responsive Width
      const cardWidth =
        window.innerWidth < 768 ? 320 : 650

      slider.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      })

      // Reset to Start
      if (index >= imgs.length - 1) {

        setTimeout(() => {

          slider.scrollTo({
            left: 0,
            behavior: 'smooth',
          })

          index = 0

        }, 2500)

      }

    }, 3000)

    return () => clearInterval(interval)

  }, [imgs.length])

  return (
    <section className="section bg-cream overflow-hidden">

      <div className="container">

        {/* Header */}
        <div className="mb-4">

          <SectionHeader
            eyebrow="SKB Moments"
            title="Moments of achievement & awards."
            intro="Convocation and graduation moments that reflect the SKB experience."
          />

        </div>

        {/* Carousel */}
        <div
          ref={sliderRef}
          className="d-flex gap-4 overflow-hidden pb-2"
          style={{
             scrollSnapType: 'x mandatory',
          }}
        >

          {imgs.map((img, index) => (

            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: '100%',
                maxWidth: '420px', // Reduced card width
                scrollSnapAlign: 'center',
              }}
            >

              <div className="card-soft overflow-hidden border-0 shadow-sm h-100 rounded-4">

                {/* Image */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-100"
                  style={{
                    height: '320px', // Reduced image height
                    objectFit: 'cover',
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