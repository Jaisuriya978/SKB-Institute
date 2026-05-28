import SectionHeader from './SectionHeader'
import testimonialVideo from '../assets/VID-20260519-WA0013.mp4'
import testimonialVideo2 from '../assets/VID-20260519-WA0014.mp4'
import testimonialVideo1 from '../assets/VID-20260519-WA0015.mp4'
import testimonialVideo3 from '../assets/VID-20260519-WA0016.mp4'
import { useRef, useEffect } from 'react'

export default function Testimonials() {
  const videoRefs = useRef([])
  const trackRef = useRef(null)

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

  // ✅ FIX: Use IntersectionObserver to lazy-load videos only when in viewport
  // This prevents scroll jank caused by multiple simultaneous video preloads
  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (entry.isIntersecting) {
            // Load video source only when visible
            if (video.dataset.src && !video.src) {
              video.src = video.dataset.src
              video.load()
            }
          } else {
            // Pause when scrolled out of view
            if (!video.paused) {
              video.pause()
              video.currentTime = 0
            }
          }
        })
      },
      { rootMargin: '100px', threshold: 0.1 }
    )
    videos.forEach((video) => observer.observe(video))
    return () => observer.disconnect()
  }, [])

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video && !video.paused) {
        video.pause()
      }
    })
  }

  const reviews = [
    {
      name: 'Vanitha Sudhan',
      location: 'USA',
      initials: 'VS',
      program: 'Advanced Diploma',
      rating: 5,
      quote:
        'As a returning learner, this program has been transformative for my teaching career. It provided me with practical knowledge and lesson planning strategies I can apply directly in my classroom. It kept me motivated and confident. The focus on mentorship and collaborative learning has truly empowered me as a teacher, and I am now proud to hold my Bachelor degree 😊.',
      highlight: 'The focus on mentorship and collaborative learning has truly empowered me as a teacher.',
    },
    {
      name: 'Neelaambal',
      location: 'Chidambaram',
      initials: 'NL',
      program: 'Diploma in Montessori',
      rating: 5,
      quote:
        'My educator Mrs Bhuvaneshwari mam is passionate, dedicated, and very approachable. She taught lessons in an easy and understandable manner ❤️. The study materials and practical classes are well-organized with detailed instructions that laid everything out clearly for me to follow 👍. Women play a vital role in the empowerment of society. I am encourage interested women to join this course.',
      highlight: 'Well-organized modules with detailed instructions that laid everything out clearly.',
    },
    {
      name: 'Rajeswari G',
      location: 'Chennai',
      initials: 'RG',
      program: 'Diploma in Child Care',
      rating: 5,
      quote:
        'The course was really interesting and the mentors were incredibly supportive 👍. A speciality of SKB is that we learned to approach even children with special needs. The practical knowledge from the classroom helped us build a happy environment for students. I would highly recommend SKB to many housewives who can turn their fear into power.',
      highlight: 'We learned to approach even children with special needs — that sets SKB apart.',
    },
  ]

  return (
    <section className="section bg-light py-5 overflow-hidden">
      <div className="container">

        <SectionHeader
          eyebrow={
            <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
              Testimonials
            </span>
          }
          title={
            <>
              Discover what our{' '}
              <span className="italic text-terracotta">
                graduates say about their SKB training journey
              </span>
            </>
          }
        />

        {/* ────────────────────────────────────────────
            VIDEO TESTIMONIAL CAROUSEL
        ──────────────────────────────────────────── */}
        <div className="testimonial-track-container">
          <div className="testimonial-track" ref={trackRef}>
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className="durable-card">
                <div className="durable-shimmer" aria-hidden="true" />

                <div
                  className="durable-video-wrapper"
                  onMouseEnter={() => {
                    const video = videoRefs.current[index]
                    handlePlay(index)
                    if (video) {
                      // ✅ FIX: Trigger src load on first hover if not yet loaded
                      if (video.dataset.src && !video.getAttribute('src')) {
                        video.setAttribute('src', video.dataset.src)
                        video.load()
                      }
                      video.play().catch(() => {})
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
                  {/*
                    ✅ FIXES APPLIED:
                    1. Added `muted` — required for autoplay to work cross-browser
                    2. Changed preload="none" — prevents all 8 videos loading on page mount (was causing scroll jank)
                    3. Moved src to data-src — lazy loaded via IntersectionObserver or on hover
                    4. Kept <source> removed to use video.src directly (works better with lazy loading)
                  */}
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    data-src={item.video}
                    loop
                    playsInline
                    preload="none"
                    className="w-100 h-100 durable-video"
                  />
                </div>

                <div className="p-3 bg-white d-flex flex-column justify-content-between">
                  <div className="d-flex align-items-center gap-3">
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

        {/* ────────────────────────────────────────────
            WRITTEN REVIEWS SECTION
        ──────────────────────────────────────────── */}
        <div className="reviews-section mt-5 pt-1">

          <div className="reviews-header text-center mb-1">
          {/*
            <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle mb-3">
              Written Reviews
            </span>
            <h2 className="reviews-title">
              Words straight from our{' '}
              <span className="italic text-terracotta">graduates' hearts</span>
            </h2>
            <p className="reviews-subtitle text-muted mx-auto">
              Real stories from learners across India and beyond — sharing how SKB shaped their confidence, career, and calling.
            </p>
*/}
          </div>

          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <div key={i} className="review-card">

                {/* Top: Stars + Program badge */}
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <span key={s} className="star">★</span>
                    ))}
                  </div>
                  <span className="program-badge">{review.program}</span>
                </div>

                {/* Highlighted quote pull */}
                <blockquote className="review-highlight">
                  <span className="quote-mark">"</span>
                  {review.highlight}
                </blockquote>

                {/* Full review */}
                <p className="review-body">{review.quote}</p>

                {/* Divider */}
                <div className="review-divider" />

                {/* Author */}
                <div className="d-flex align-items-center gap-3 mt-3">
                  <div className="review-avatar">
                    {review.initials}
                  </div>
                  <div>
                    <p className="review-name mb-0">{review.name}</p>
                    <p className="review-location mb-0">
                      <span className="location-dot" aria-hidden="true"></span>
                      {review.location}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Trust bar */}
         {/* <div className="trust-bar mt-5">
            <div className="trust-item">
              <span className="trust-number">500+</span>
              <span className="trust-label">Graduates Placed</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-number">4.9★</span>
              <span className="trust-label">Average Rating</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-number">15+</span>
              <span className="trust-label">Years of Excellence</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-number">100%</span>
              <span className="trust-label">Recommend to Others</span>
            </div>
          </div> */}
        </div>

      </div>

      {/* ═══════════════════════════════════════════
          STYLES
      ═══════════════════════════════════════════ */}
      <style>{`

        /* ── VIDEO CAROUSEL ── */

        .testimonial-track-container {
          overflow: hidden;
          position: relative;
          padding: 30px 0;
        }
        .testimonial-track-container::before,
        .testimonial-track-container::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .testimonial-track-container::before {
          left: 0;
          background: none;
        }
        .testimonial-track-container::after {
          right: 0;
          background: none;
        }
        .testimonial-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollTestimonials 28s linear infinite;
        }
        .testimonial-track:hover {
          animation-play-state: paused;
        }
        @keyframes scrollTestimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50%)); }
        }
        .durable-card {
          flex: 0 0 350px;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(12px);
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.4);
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          position: relative;
        }
        .durable-shimmer {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(60,97,200,0.7), transparent);
          z-index: 3;
          pointer-events: none;
        }
        .durable-card:hover {
          transform: translateY(-12px);
          border-color: rgba(60,97,200,0.20);
          box-shadow: 0 24px 50px rgba(0,0,0,0.12);
        }
        .durable-video-wrapper {
          background: #111;
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
        .degree-text { font-size: 11px; line-height: 1.4; }
        .durable-avatar {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3c61c8 0%, #c0392b 100%);
          color: white;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 14px;
          flex-shrink: 0;
        }

        /* ── REVIEWS SECTION ── */

        .reviews-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 700;
          line-height: 1.25;
          color: #1a1a2e;
          margin-bottom: 0.75rem;
        }
        .reviews-subtitle {
          font-size: 1rem;
          max-width: 560px;
          line-height: 1.7;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .review-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 28px 26px;
          border: 1px solid rgba(0,0,0,0.07);
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .review-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3c61c8, #c0392b);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .review-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.10);
        }
        .review-card:hover::before {
          opacity: 1;
        }

        .stars { display: flex; gap: 3px; }
        .star {
          color: #f59e0b;
          font-size: 16px;
          line-height: 1;
        }

        .program-badge {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #3c61c8;
          background: rgba(60,97,200,0.08);
          border: 1px solid rgba(60,97,200,0.15);
          border-radius: 50px;
          padding: 4px 10px;
          white-space: nowrap;
          max-width: 175px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .review-highlight {
          font-size: 1rem;
          font-weight: 600;
          color: #1a1a2e;
          line-height: 1.5;
          margin: 12px 0 14px;
          padding-left: 14px;
          border-left: 3px solid #c0392b;
          font-style: normal;
          position: relative;
        }
        .quote-mark {
          font-family: Georgia, serif;
          font-size: 2rem;
          color: #c0392b;
          line-height: 0;
          vertical-align: -10px;
          margin-right: 4px;
          opacity: 0.6;
        }

        .review-body {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.75;
          flex: 1;
          margin-bottom: 0;
        }

        .review-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(0,0,0,0.06), transparent);
          margin-top: 5px;
        }

        .review-avatar {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3c61c8 0%, #c0392b 100%);
          color: white;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
          letter-spacing: 0.5px;
        }
        .review-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1a1a2e;
        }
        .review-location {
          font-size: 0.8rem;
          color: #888;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .location-dot { font-size: 11px; }

        /* ── TRUST BAR ── */

        .trust-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          background: linear-gradient(135deg, #1a1a2e 0%, #2d2d5e 100%);
          border-radius: 20px;
          padding: 32px 40px;
          flex-wrap: wrap;
        }
        .trust-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 0 40px;
        }
        .trust-number {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.5px;
        }
        .trust-label {
          font-size: 0.78rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }
        .trust-divider {
          width: 1px;
          height: 48px;
          background: rgba(255,255,255,0.12);
          flex-shrink: 0;
        }

        /* ── RESPONSIVE ── */

        @media (max-width: 992px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .trust-item { padding: 0 24px; }
        }

        @media (max-width: 576px) {
          .durable-card { flex: 0 0 290px; }
          .durable-video-wrapper { height: 360px; }
          .reviews-grid { grid-template-columns: 1fr; }
          .trust-bar { flex-direction: column; gap: 24px; padding: 28px 20px; }
          .trust-divider { width: 60px; height: 1px; }
          .trust-item { padding: 0; }
        }
      `}</style>
    </section>
  )
}