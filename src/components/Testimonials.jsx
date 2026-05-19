import SectionHeader from './SectionHeader'
import testimonialVideo from '../assets/VID-20260519-WA0013.mp4'
import testimonialVideo2 from '../assets/VID-20260519-WA0014.mp4'
import testimonialVideo1 from '../assets/VID-20260519-WA0015.mp4'
import testimonialVideo3 from '../assets/VID-20260519-WA0016.mp4'
import { useRef } from 'react'

export default function Testimonials() {
  const videoRefs = useRef([])

  // Premium structured data for the Durable style cards
  const testimonials = [
    {
      video: testimonialVideo,
      name: 'Mythili',
      Degree: 'Advanced Diploma in Montessori Training',
      quote: 'The hands-on training and mentorship helped me transition seamlessly into my professional career.',
    },
    {
      video: testimonialVideo2,
      name: 'Rukmani',
      Degree: 'Advanced Diploma in Montessori Education and Childcare',
      quote: 'An incredible learning environment. The real-time practical sessions completely changed my approach.',
    },
    {
      video: testimonialVideo1,
      name: 'Divya',
      Degree: 'Advanced Diploma in Montessori Education and Childcare',
      quote: 'The curriculum is highly industry-focused. Placement support guided me through every interview step.',
    },
    {
      video: testimonialVideo3,
      name: 'Aysha',
      Degree: 'Advanced Montessori Childcare Education Trainee',
      quote: 'Beyond just technical skills, the confidence and communication training I received here was priceless.',
    },
  ]

  // Clean, scalable auto-pause logic for an array of refs
  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause()
      }
    })
  }

  return (
    <section className="section bg-cream py-5 overflow-hidden">
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

        {/* Premium Durable Card Track Layout */}
        <div className="testimonial-track-container">
          <div className="testimonial-track">
            {testimonials.map((item, index) => (
              <div key={index} className="durable-card">
                {/* Video Block */}
                <div className="durable-video-wrapper">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    controls
                    loop
                    playsInline
                    preload="metadata"
                    onPlay={() => handlePlay(index)}
                    className="w-100 h-100"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>

                {/* Content Block */}
                <div className="p-4 bg-white d-flex flex-column justify-content-between card-content-height">
                  <p className="durable-quote">"{item.quote}"</p>
                  
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <div className="durable-avatar">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold text-dark">{item.name}</h6>
                      <small className="text-muted d-block degree-text">{item.Degree}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Clean Straight Horizontal CSS */}
      <style>
        {`
          .testimonial-track-container {
            padding: 30px 0;
            overflow-x: auto;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }

          /* Hide scrollbar for standard browsers but keep functionality */
          .testimonial-track-container::-webkit-scrollbar {
            display: none;
          }
          .testimonial-track-container {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }

          /* Explicit horizontal row layout without wrapping */
          .testimonial-track {
            display: flex;
            gap: 24px;
            flex-wrap: nowrap;
            padding-left: 4px;
            padding-right: 4px;
          }

          /* Base Card Style - Clean and Completely Straightened */
          .durable-card {
            flex: 0 0 350px; /* Fixed width to maintain crisp layout shape horizontally */
            background: #fff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid rgba(0,0,0,0.06);
          }

          /* Clean non-tilted elevation on hover */
          .durable-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
          }

          .durable-video-wrapper {
            background: #000;
            height: 420px;
            overflow: hidden;
          }

          .durable-video-wrapper video {
            object-fit: cover;
            object-position: top;
          }

          .card-content-height {
            min-height: 160px;
          }

          .durable-quote {
            font-size: 14px;
            line-height: 1.6;
            color: #4a4a4a;
            margin-bottom: 0;
            font-style: italic;
          }

          .degree-text {
            font-size: 11px;
            line-height: 1.3;
            margin-top: 2px;
          }

          .durable-avatar {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: #5c61c8; 
            color: white;
            display: flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 15px;
          }

          /* Responsiveness for Mobile Devices */
          @media (max-width: 576px) {
            .durable-card {
              flex: 0 0 290px; /* Marginally narrower on compact screens */
            }

            .durable-video-wrapper {
              height: 360px;
            }
          }
        `}
      </style>
    </section>
  )
}