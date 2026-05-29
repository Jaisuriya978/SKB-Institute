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
      video.play().catch(() => { })
    } else {
      const onReady = () => {
        video.play().catch(() => { })
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
        'As a returning learner, this program has been transformative for my teaching career. It provided me with practical knowledge and lesson planning strategies I can apply directly in my classroom — keeping me motivated and confident. The focus on mentorship and collaborative learning has truly empowered me as a teacher, and I am now proud to hold my Bachelor degree. The personalized attention and encouraging atmosphere helped me find my passion for learning. It is more than academics; it fosters holistic growth.',
      highlight: 'More than just academics — it fosters holistic growth and empowers you as a teacher.',
    },
    {
      name: 'Neelaambal',
      location: 'Chidambaram',
      initials: 'NL',
      program: 'Diploma in Montessori',
      rating: 5,
      quote:
        'My educator Mrs Bhuvaneshwari mam is passionate, dedicated, and very approachable. She taught lessons in an easy and understandable manner. The study materials and practical classes are well-organized with detailed instructions that laid everything clearly for me to follow. Women play a vital role in the empowerment of society and nation — interested women should join this course to grow up the toddlers for their better future, because here is where the roots are formed.',
      highlight: 'Well-organized modules with detailed instructions — here is where the roots are formed.',
    },
    {
      name: 'Rajeswari G',
      location: 'Chennai',
      initials: 'RG',
      program: 'Adv. Diploma in Montessori',
      rating: 5,
      quote:
        'The course was really interesting and the mentors were incredibly supportive and helpful. A speciality of SKB is that we learned to approach even children with special needs. The practical knowledge from the classroom helped us build a happy environment for our students. I would highly recommend SKB Montessori Training Institute to many housewives who can make their fear into power. My heartfelt thanks to my SKB family.',
      highlight: 'We learned to approach even children with special needs — that sets SKB apart.',
    },
    {
      name: 'S. Gayathri',
      location: 'Tamil Nadu',
      initials: 'SG',
      program: 'Montessori Course',
      rating: 5,
      quote:
        'I am happy to have completed my Montessori course at this institute. The classes were informative, practical, and easy to understand. I gained confidence in handling children and learned many teaching methods. Special thanks to Bhuvana Mam for her excellent teaching — she explained lessons in a very easy and understandable way, and is always kind and approachable. I attended through online classes and it was very easy to manage the timings. Thank you to management for their guidance and support.',
      highlight: 'I gained confidence in handling children and learned many valuable teaching methods.',
    },
    {
      name: 'V. Radha',
      location: 'Tamil Nadu',
      initials: 'VR',
      program: 'SKB Training',
      rating: 5,
      quote:
        'I am happy to share my experience with SKB Training Institute. The training was very helpful, and the trainers taught everything clearly and patiently. I gained useful knowledge and confidence through the course. Thank you for all the support.',
      highlight: 'The trainers taught everything clearly and patiently — I gained real confidence.',
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

        {/* ── WRITTEN REVIEWS CAROUSEL ── */}
        <div className="reviews-section mt-5 pt-2">

          <div className="text-center mb-4">
            <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
              Written Reviews
            </span>
            <h3 className="reviews-section-title mt-3">
              Words straight from our{' '}
              <span className="italic text-terracotta">graduates' hearts</span>
            </h3>
          </div>

          <div className="review-track-container">
            <div className="review-track">
              {[...reviews, ...reviews].map((review, i) => (
                <div key={i} className="review-card">

                  {/* Top accent bar on hover */}
                  <div className="review-card-accent" aria-hidden="true" />

                  {/* Stars + badge */}
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
                      {Array.from({ length: review.rating }).map((_, s) => (
                        <span key={s} className="star">★</span>
                      ))}
                    </div>
                    <span className="program-badge">{review.program}</span>
                  </div>

                  {/* Highlight pull-quote */}
                  <blockquote className="review-highlight">
                    <span className="quote-mark">"</span>
                    {review.highlight}
                  </blockquote>

                  {/* Full review */}
                  <p className="review-body">{review.quote}</p>

                  {/* Author */}
                  <div className="review-divider" />
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <div className="review-avatar">{review.initials}</div>
                    <div>
                      <p className="review-name mb-0">{review.name}</p>
                      <p className="review-location mb-0">{review.location}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
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

        /* ── REVIEWS CAROUSEL ── */
        .reviews-section-title {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 700;
          color: #1a1a2e;
          line-height: 1.3;
        }

        .review-track-container {
          overflow: hidden;
          position: relative;
          padding: 20px 0 30px;
        }
        .review-track-container::before,
        .review-track-container::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }
        .review-track-container::before {
          left: 0;
          background: none;
        }
        .review-track-container::after {
          right: 0;
          background: none;
        }

        .review-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollReviews 40s linear infinite;
        }
        .review-track:hover { animation-play-state: paused; }

        @keyframes scrollReviews {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-50%)); }
        }

        .review-card {
          flex: 0 0 360px;
          background: #ffffff;
          border-radius: 20px;
          padding: 26px 24px 22px;
          border: 1px solid rgba(0,0,0,0.07);
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .review-card-accent {
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
        .review-card:hover .review-card-accent { opacity: 1; }

        .stars { display: flex; gap: 3px; }
        .star { color: #f59e0b; font-size: 15px; line-height: 1; }

        .program-badge {
          font-size: 10px; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.04em;
          color: #3c61c8;
          background: rgba(60,97,200,0.08);
          border: 1px solid rgba(60,97,200,0.15);
          border-radius: 50px;
          padding: 4px 10px;
          white-space: nowrap; max-width: 160px;
          overflow: hidden; text-overflow: ellipsis;
        }

        .review-highlight {
          font-size: 0.95rem; font-weight: 600;
          color: #1a1a2e; line-height: 1.5;
          margin: 10px 0 12px;
          padding-left: 13px;
          border-left: 3px solid #c0392b;
          font-style: normal;
        }
        .quote-mark {
          font-family: Georgia, serif;
          font-size: 1.8rem; color: #c0392b;
          line-height: 0; vertical-align: -9px;
          margin-right: 3px; opacity: 0.55;
        }

        .review-body {
          font-size: 0.855rem; color: #555;
          line-height: 1.75; flex: 1; margin-bottom: 0;
          /* Clamp to ~5 lines to keep all cards same height */
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .review-card:hover .review-body {
          -webkit-line-clamp: unset;
          overflow: visible;
        }

        .review-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(0,0,0,0.07), transparent);
          margin-top: 14px;
          flex-shrink: 0;
        }
        .review-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          background: linear-gradient(135deg, #3c61c8 0%, #c0392b 100%);
          color: white;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 13px; flex-shrink: 0;
          letter-spacing: 0.5px;
        }
        .review-name { font-size: 0.9rem; font-weight: 700; color: #1a1a2e; }
        .review-location { font-size: 0.78rem; color: #999; }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .review-card { flex: 0 0 300px; }
        }
        @media (max-width: 576px) {
          .durable-card { flex: 0 0 290px; }
          .durable-video-wrapper { height: 360px; }
          .review-card { flex: 0 0 280px; }
          .review-track-container::before,
          .review-track-container::after { width: 40px; }
        }
      `}</style>
    </section>
  )
}