import GraduationImg from '../assets/Image6.jpg'
import ConvocationImg1 from '../assets/Image7.JPG'
import BrassLampImg from '../assets/Image5.JPG'
import portraitImg from '../assets/Image4.jpg'
import ConvocationImg2 from '../assets/Image3.JPG'

import SectionHeader from './SectionHeader'

export default function Gallery() {

  const imgs = [

    {
      src: BrassLampImg,
      alt: 'lamp lighting ceremony',
    },

    {
      src: GraduationImg,
      alt: 'Graduation ceremony',
    },

    {
      src: ConvocationImg1,
      alt: 'Convocation day',
    },

    {
      src: portraitImg,
      alt: 'SKB students',
    },
    {
      src: ConvocationImg2,
      alt: 'Convocation day',
    }

  ]

  return (
    <section className="section bg-cream">

      <div className="container">

        <SectionHeader
          eyebrow="Gallery"
          title="Moments of learning & achievement."
          intro="Student activities, classroom sessions, workshops, practical training, and graduation moments that reflect the SKB experience."
        />

        {/* Horizontal Carousel */}
        <div
          className="d-flex gap-4 overflow-auto pb-2"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >

          {imgs.map((img, index) => (

            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: '620px',
                scrollSnapAlign: 'start',
              }}
            >

              <div className="card-soft overflow-hidden h-100">

                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-100"
                  style={{
                    height: '420px',
                    objectFit: 'cover',
                  }}
                />

                <div className="p-3">

                  <p className="small mb-0 fw-medium">
                    {img.alt}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}