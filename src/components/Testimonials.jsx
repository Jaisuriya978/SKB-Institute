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
      Degree: 'Advanced Diploma in Montessori Education',
      quote: 'The hands-on training and mentorship helped me transition seamlessly into my professional career.',
    },
    {
      video: testimonialVideo2,
      name: 'Rukmani',
      Degree: 'Advanced Diploma in Montessori Education',
      quote: 'An incredible learning environment. The real-time practical sessions completely changed my approach.',
    },
    {
      video: testimonialVideo1,
      name: 'Divya',
      Degree: 'Advanced Diploma in Montessori Education',
      quote: 'The curriculum is highly industry-focused. Placement support guided me through every interview step.',
    },
    {
      video: testimonialVideo3,
      name: 'Aysha',
      Degree: 'Advanced Diploma in Montessori Education',
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
    <section className="section bg-light py-5 overflow-hidden">
      <div className="container">

        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              Discover what our{' '}
              <span className="italic text-terracotta">
                graduates say about their SKB training journey
              </span>
            </>
          }
        />

        {/* Premium Durable Card Track Layout */}
        <div className="testimonial-track-container">
          <div className="testimonial-track">

            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className="durable-card">
                {/* Video Block */}
                <div
                  className="durable-video-wrapper"
                  onMouseEnter={() => {
                    const video = videoRefs.current[index]

                    handlePlay(index)

                    if (video) {
                      video.play()
                    }
                  }}
                  onMouseLeave={() => {
                    const video = videoRefs.current[index]

                    if (video) {
                      video.pause()
                      video.currentTime = 0
                    }
                  }}
                >

                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    
                    loop
                    playsInline
                    preload="metadata"
                    className="w-100 h-100 durable-video"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>

                  {/* Premium Overlay */}
                  {/* <div className="video-overlay">
                    <div className="play-button">
                      <i className="bi bi-play-fill"></i>
                    </div>
                  </div>*/}

                </div>

                {/* Content Block */}
                <div className="p-4 bg-white d-flex flex-column justify-content-between"> 
                  {/* <p className="durable-quote">"{item.quote}"</p> */}

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
      {/* Premium Auto Carousel CSS */}
      <style>
        {`
    .testimonial-track-container {
      overflow: hidden;
      position: relative;
      padding: 30px 0;
    }

    /* Auto moving row */
    .testimonial-track {
      display: flex;
      gap: 24px;
      width: max-content;
      animation: scrollTestimonials 28s linear infinite;
    }

    /* Pause when user hovers */
    .testimonial-track:hover {
      animation-play-state: paused;
    }

    @keyframes scrollTestimonials {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-50%));
      }
    }

    /* Card Style */
    .durable-card {
  flex: 0 0 350px;
  background: rgba(255,255,255,0.8);

  backdrop-filter: blur(12px);

  border-radius: 24px;
  overflow: hidden;

  border: 1px solid rgba(255,255,255,0.4);

  box-shadow:
    0 10px 30px rgba(0,0,0,0.06);

  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;

  position: relative;
}

.durable-card:hover {
  transform: translateY(-12px);

  box-shadow:
    0 24px 50px rgba(0,0,0,0.12);
}

.durable-video-wrapper {
  background: #000;
  height: 420px;
  overflow: hidden;
  position: relative;
}

.durable-video {
  object-fit: cover;
  object-position: top;

  transition: transform 0.7s ease;
}

.durable-card:hover .durable-video {
  transform: scale(1.06);
}

/* Overlay */

.video-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background:
    linear-gradient(
      to top,
      rgba(0,0,0,0.45),
      rgba(0,0,0,0.05)
    );

  transition: opacity 0.4s ease;
}

.durable-card:hover .video-overlay {
  opacity: 0;
}

/* Play Button */

.play-button {
  width: 78px;
  height: 78px;

  border-radius: 50%;

  background: rgba(255,255,255,0.18);

  backdrop-filter: blur(12px);

  border: 1px solid rgba(255,255,255,0.35);

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 34px;

  transition: transform 0.4s ease;
}

.durable-card:hover .play-button {
  transform: scale(1.1);
}

/* Content */

.card-content-height {
  min-height: 190px;
}

.durable-quote {
  font-size: 15px;
  line-height: 1.8;
  color: #4a4a4a;
  font-style: italic;
}

.degree-text {
  font-size: 11px;
  line-height: 1.4;
}

.durable-avatar {
  width: 48px;
  height: 48px;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #5c61c8,
      #7a7fff
    );

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 16px;

  flex-shrink: 0;
}

/* Mobile */

@media (max-width: 576px) {

  .durable-card {
    flex: 0 0 290px;
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