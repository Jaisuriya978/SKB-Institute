import SectionHeader from './SectionHeader'
import testimonialVideo from '../assets/VID-20260519-WA0013.mp4'
import testimonialVideo2 from '../assets/VID-20260519-WA0014.mp4'
import testimonialVideo1 from '../assets/VID-20260519-WA0015.mp4'
import testimonialVideo3 from '../assets/VID-20260519-WA0016.mp4'
import { useRef } from 'react'



export default function Testimonials() {
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)
  const video3Ref = useRef(null)
  const video4Ref = useRef(null)

  const handlePlay = (current) => {
    if (current === 1 && video2Ref.current && video3Ref.current && video4Ref.current) {
      video2Ref.current.pause()
      video3Ref.current.pause()
      video4Ref.current.pause()
    }

    if (current === 2 && video1Ref.current && video3Ref.current && video4Ref.current) {
      video1Ref.current.pause()
      video3Ref.current.pause()
      video4Ref.current.pause()
    }
    if (current === 3 && video1Ref.current && video2Ref.current && video4Ref.current) {
      video1Ref.current.pause()
      video2Ref.current.pause()
      video4Ref.current.pause()
    }
    if (current === 4 && video1Ref.current && video2Ref.current && video3Ref.current) {
      video1Ref.current.pause()
      video2Ref.current.pause()
      video3Ref.current.pause()
    }
  }
  return (
    <section className="section bg-sand">
      <div className="container">

        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              After Training from our{' '}
              <span className="italic text-terracotta">
                graduates Talks about their experience
              </span>
            </>
          }
        />

        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">

            <div className="bg-white rounded-4 shadow-sm overflow-hidden border p-3">

              {/* Video */}
              <div className="row g-3">

                {/* Video 1 */}
                <div className="col-md-6">
                  <div className="overflow-hidden testimonial-video-wrapper rounded-4">
                    <video
                      ref={video1Ref}
                      controls
                      loop
                      playsInline
                      preload="metadata"
                      onPlay={() => handlePlay(1)}
                      className="w-100 h-100"
                    >
                      <source src={testimonialVideo} type="video/mp4" />
                    </video>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="col-md-6">
                  <div className="overflow-hidden testimonial-video-wrapper rounded-4">
                    <video
                      ref={video2Ref}
                      controls
                      loop
                      playsInline
                      preload="metadata"
                      onPlay={() => handlePlay(2)}
                      className="w-100 h-100"
                    >
                      <source src={testimonialVideo2} type="video/mp4" />
                    </video>
                  </div>
                </div>

                {/* Video 3 */}
                <div className="col-md-6">
                  <div className="overflow-hidden testimonial-video-wrapper rounded-4">
                    <video
                      ref={video3Ref}
                      controls
                      loop
                      playsInline
                      preload="metadata"
                      onPlay={() => handlePlay(3)}
                      className="w-100 h-100"
                    >
                      <source src={testimonialVideo1} type="video/mp4" />
                    </video>
                  </div>
                </div>  

                {/* Video 4 */}
                <div className="col-md-6">
                  <div className="overflow-hidden testimonial-video-wrapper rounded-4"> 
                    <video
                      ref={video4Ref}
                      controls
                      loop
                      playsInline
                      preload="metadata"
                      onPlay={() => handlePlay(4)}
                      className="w-100 h-100"
                    >
                      <source src={testimonialVideo3} type="video/mp4" />
                    </video>
                  </div>
                </div>  

              </div>


            </div>

          </div>
        </div>

      </div>

      {/* Responsive Height */}
      <style>
        {`
    .testimonial-video-wrapper {
      background: #000;
    }

    .testimonial-video-wrapper video {
      width: 100%;
      display: block;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .testimonial-video-wrapper video:hover {
      transform: scale(1.02);
    }

    .bg-white.rounded-4 {
      border-radius: 24px !important;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .bg-white.rounded-4:hover {
      transform: translateY(-4px);
      box-shadow: 0 14px 35px rgba(0,0,0,0.08);
    }

    /* Mobile */
    @media (max-width: 576px) {
      .testimonial-video-wrapper video {
        height: 600px !important;
      }

      .fs-5 {
        font-size: 1rem !important;
        line-height: 1.8;
      }

      .p-md-5 {
        padding: 1.5rem !important;
      }
    }

    /* Tablet */
    @media (min-width: 577px) and (max-width: 991px) {
      .testimonial-video-wrapper video {
        height: 500px !important;
      }
    }

    /* Desktop */
    @media (min-width: 992px) {
      .testimonial-video-wrapper video {
        height: 600px !important;
      }
    }
  `}
      </style>
    </section>
  )
}