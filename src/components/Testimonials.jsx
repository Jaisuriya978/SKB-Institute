import SectionHeader from './SectionHeader'
import testimonialVideo from '../assets/VID-20260519-WA0013.mp4'
import testimonialVideo2 from '../assets/VID-20260519-WA0014.mp4'
import testimonialVideo1 from '../assets/VID-20260519-WA0015.mp4'
import testimonialVideo3 from '../assets/VID-20260519-WA0016.mp4'
import { useRef, useEffect } from 'react'

export default function Testimonials() {
  const videoRefs = useRef([])
  const trackRef = useRef(null)
  // Track which videos have already had their src loaded
  const loadedRef = useRef(new Set())

  const testimonials = [
    {
      video: testimonialVideo,
      name: 'Mythili',
      Degree: 'Advanced Diploma in Montessori Education',
    },
    {
      video: testimonialVideo2,
      name: 'Rukmani',
      Degree: 'Advanced Diploma in Montessori Education',
    },
    {
      video: testimonialVideo1,
      name: 'Divya',
      Degree: 'Advanced Diploma in Montessori Education',
    },
    {
      video: testimonialVideo3,
      name: 'Aysha',
      Degree: 'Advanced Diploma in Montessori Education',
    },
  ]

  // ─── Helper: reliably load a video by index ───────────────────────────────
  // The bug: React sets video.src = "" (empty string), so `!video.src` is
  // always falsy — the load never triggers. We use a Set to track truly
  // loaded videos instead.
  const ensureLoaded = (index) => {
    const video = videoRefs.current[index]
    if (!video) return
    if (loadedRef.current.has(index)) return   // already loaded, skip

    const src = video.dataset.src
    if (!src) return

    loadedRef.current.add(index)
    video.src = src
    video.load()

    // ✅ FIX BLACK SCREEN: After metadata is available, seek to 0.01s.
    // This forces the browser to decode and paint the first frame as a
    // thumbnail. Without this, some browsers (especially Chrome on certain
    // codecs) leave the video canvas black until the first play() call.
    const showFirstFrame = () => {
      video.currentTime = 0.01
      video.removeEventListener('loadedmetadata', showFirstFrame)
    }
    video.addEventListener('loadedmetadata', showFirstFrame)
  }

  // ─── IntersectionObserver: pre-load when card scrolls near viewport ──────
  // rootMargin: '200px' means we start loading 200px before the card is visible,
  // so by the time the user hovers it's already buffered.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          const index = parseInt(video.dataset.index, 10)
          if (entry.isIntersecting) {
            ensureLoaded(index)
          } else {
            // Pause when scrolled out but keep first frame visible
            if (video && !video.paused) {
              video.pause()
              video.currentTime = 0.01
            }
          }
        })
      },
      { rootMargin: '200px', threshold: 0 }
    )

    // Small delay to let React finish rendering refs
    const timer = setTimeout(() => {
      videoRefs.current.filter(Boolean).forEach((video) => observer.observe(video))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  // ─── Pause all OTHER playing videos ──────────────────────────────────────
  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video && !video.paused) {
        video.pause()
      }
    })
  }

  // ─── Hover handlers ───────────────────────────────────────────────────────
  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index]
    if (!video) return
    handlePlay(index)
    // Ensure src is loaded (fallback if IntersectionObserver hasn't fired yet)
    ensureLoaded(index)
    // If already loaded, play immediately; otherwise play once canplay fires
    if (loadedRef.current.has(index) && video.readyState >= 2) {
      video.play().catch(() => {})
    } else {
      const onReady = () => {
        video.play().catch(() => {})
        video.removeEventListener('canplay', onReady)
      }
      video.addEventListener('canplay', onReady)
    }
  }

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index]
    if (!video) return
    video.pause()
    // Seek to 0.01s not 0 — keeps the first frame painted as thumbnail.
    // Seeking to exactly 0 can re-trigger the black screen on some browsers.
    video.currentTime = 0.01
  }

  const reviews = [
    {
      name: 'Vanitha Sudhan',
      location: 'USA',
      initials: 'VS',
      program: 'Advanced Diploma',
      rating: 5,
      quote:
        'As a returning learner, this program has been transformative for my teaching career. It provided me with practical knowledge and lesson planning strategies I can apply directly in my classroom. It kept me motivated and confident. The focus on mentorship and collaborative learning has truly empowered me as a teacher, and I am now proud to hold my Bachelor degree.',
      highlight: 'The focus on mentorship and collaborative learning has truly empowered me as a teacher.',
    },
    {
      name: 'Neelaambal',
      location: 'Chidambaram',
      initials: 'NL',
      program: 'Diploma in Montessori',
      rating: 5,
      quote:
        'My educator Mrs Bhuvaneshwari mam is passionate, dedicated, and very approachable. She taught lessons in an easy and understandable manner. The study materials and practical classes are well-organized with detailed instructions that laid everything out clearly for me to follow. Women play a vital role in the empowerment of society. I encourage interested women to join this course.',
      highlight: 'Well-organized modules with detailed instructions that laid everything out clearly.',
    },
    {
      name: 'Rajeswari G',
      location: 'Chennai',
      initials: 'RG',
      program: 'Diploma in Child Care',
      rating: 5,
      quote:
        'The course was really interesting and the mentors were incredibly supportive. A speciality of SKB is that we learned to approach even children with special needs. The practical knowledge from the classroom helped us build a happy environment for students. I would highly recommend SKB to many housewives who can turn their fear into power.',
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

        {/* ── VIDEO CAROUSEL ── */}
        <div className="testimonial-track-container">
          <div className="testimonial-track" ref={trackRef}>
            {[...testimonials, ...testimonials].map((item, index) => (
              <div key={index} className="durable-card">
                <div className="durable-shimmer" aria-hidden="true" />

                <div
                  className="durable-video-wrapper"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {/*
                    KEY FIXES vs deployed version:
                    1. `muted` is REQUIRED — browsers block play() on unmuted
                       videos without a direct user gesture. Missing muted = hover does nothing.
                    2. `preload="none"` — don't fetch anything on mount.
                    3. No `src` prop — src is set imperatively via ensureLoaded()
                       so React never overwrites it with "".
                    4. `data-src` holds the real URL, loaded on demand.
                    5. `data-index` lets the IntersectionObserver know which
                       slot this video occupies.
                  */}
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    data-src={item.video}
                    data-index={index}
                    unmuted
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

        {/* ── WRITTEN REVIEWS ── */}
        <div className="reviews-section mt-5 pt-1">
          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <div key={i} className="review-card">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, s) => (
                      <span key={s} className="star">★</span>
                    ))}
                  </div>
                  <span className="program-badge">{review.program}</span>
                </div>


                <blockquote className="review-highlight">
                  <span className="quote-mark">"</span>
                  {review.highlight}
                </blockquote>


                <p className="review-body">{review.quote}</p>


                <div className="review-divider" />


                <div className="d-flex align-items-center gap-3 mt-3">
                  <div className="review-avatar">{review.initials}</div>
                  <div>
                    <p className="review-name mb-0">{review.name}</p>
                    <p className="review-location mb-0"> {review.location}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>


        </div>

      </div>


      <style>{`
        /* ── CAROUSEL ── */
        .testimonial-track-container {
          overflow: hidden;
          position: relative;
          padding: 30px 0;
        }

        .testimonial-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollTestimonials 28s linear infinite;
        }
        .testimonial-track:hover { animation-play-state: paused; }
        @keyframes scrollTestimonials {
          0%   { transform: translateX(0); }
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
          cursor: pointer;
        }
        .durable-video {
          object-fit: cover;
          object-position: top;
          transition: transform 0.7s ease;
        }
        .durable-card:hover .durable-video { transform: scale(1.06); }
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

        /* ── REVIEWS ── */
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
        .review-card:hover { transform: translateY(-8px); box-shadow: 0 20px 48px rgba(0,0,0,0.10); }
        .review-card:hover::before { opacity: 1; }
        .stars { display: flex; gap: 3px; }
        .star { color: #f59e0b; font-size: 16px; line-height: 1; }
        .program-badge {
          font-size: 10px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.04em;
          color: #3c61c8;
          background: rgba(60,97,200,0.08);
          border: 1px solid rgba(60,97,200,0.15);
          border-radius: 50px;
          padding: 4px 10px;
          white-space: nowrap; max-width: 175px;
          overflow: hidden; text-overflow: ellipsis;
        }
        .review-highlight {
          font-size: 1rem; font-weight: 600;
          color: #1a1a2e; line-height: 1.5;
          margin: 12px 0 14px;
          padding-left: 14px;
          border-left: 3px solid #c0392b;
          font-style: normal;
        }
        .quote-mark {
          font-family: Georgia, serif;
          font-size: 2rem; color: #c0392b;
          line-height: 0; vertical-align: -10px;
          margin-right: 4px; opacity: 0.6;
        }
        .review-body { font-size: 0.9rem; color: #555; line-height: 1.75; flex: 1; margin-bottom: 0; }
        .review-divider { height: 1px; background: linear-gradient(90deg, rgba(0,0,0,0.06), transparent); margin-top: 16px; }
        .review-avatar {
          width: 48px; height: 48px; border-radius: 50%;
          background: linear-gradient(135deg, #3c61c8 0%, #c0392b 100%);
          color: white;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 14px; flex-shrink: 0;
        }
        .review-name { font-size: 0.95rem; font-weight: 700; color: #1a1a2e; }
        .review-location { font-size: 0.8rem; color: #888; }

        /* ── RESPONSIVE ── */
        @media (max-width: 992px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 576px) {
          .durable-card { flex: 0 0 290px; }
          .durable-video-wrapper { height: 360px; }
          .reviews-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}