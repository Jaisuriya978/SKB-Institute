import { useState } from 'react'
import SectionHeader from './SectionHeader'
import { courses } from '../data'

const columnMeta = [
  {
    label: "What you'll learn",
    key: 'learn',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 6.5v11M7 9.5h10M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Career paths',
    key: 'careers',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9h18v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9zM8 9V7a4 4 0 118 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Benefits',
    key: 'benefits',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l2.4 5.8 6.3.5-4.8 4.1 1.5 6.1L12 17.8 6.6 19.5l1.5-6.1-4.8-4.1 6.3-.5L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Courses() {

  const [active, setActive] = useState(0)
  const c = courses[active]

  const goTo = (index) => {
    if (index >= 0 && index < courses.length) setActive(index)
  }

  return (

    <section
      id="courses"
      className="py-3 bg-light overflow-hidden"
    >

      <style>{`
        @keyframes courseSlideIn {
          from {
            opacity: 0;
            transform: translateX(18px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .course-panel-animate {
          animation: courseSlideIn 0.42s cubic-bezier(0.22, 0.68, 0, 1.12) forwards;
        }

        .course-tab {
          border: 1px solid rgba(60, 97, 200, 0.18);
          background: #fff;
          color: #142033;
          font-weight: 700;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
          padding: 0.55rem 1.25rem;
          border-radius: 999px;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .course-tab:hover {
          border-color: rgba(60, 97, 200, 0.35);
          background: rgba(60, 97, 200, 0.06);
        }

        .course-tab.active {
          background: linear-gradient(135deg, #3c61c8 0%, #2740a0 100%);
          border-color: transparent;
          color: #fff;
          box-shadow: 0 8px 22px rgba(60, 97, 200, 0.35);
        }

        .course-nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(60, 97, 200, 0.2);
          background: #fff;
          color: #3c61c8;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.22s ease;
          flex-shrink: 0;
        }

        .course-nav-btn:hover:not(:disabled) {
          background: #3c61c8;
          color: #fff;
          border-color: #3c61c8;
          box-shadow: 0 6px 18px rgba(60, 97, 200, 0.3);
        }

        .course-nav-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .course-banner {
          background: linear-gradient(135deg, #3c61c8 0%, #2740a0 55%, #1e3278 100%);
          padding: clamp(1.25rem, 3vw, 1.75rem) clamp(1.25rem, 3vw, 2rem);
          position: relative;
          overflow: hidden;
        }

        .course-banner::after {
          content: "";
          position: absolute;
          top: -40%;
          right: -8%;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          pointer-events: none;
        }

        .course-banner-title {
          color: #fff;
          font-size: clamp(1.1rem, 2.5vw, 1.45rem);
          font-weight: 700;
          line-height: 1.35;
          margin: 0;
          position: relative;
          z-index: 1;
          max-width: 90%;
        }

        .course-header-area {
          position: relative;
          padding: clamp(1.5rem, 3vw, 2.25rem);
          background: #fff;
        }

        .course-watermark {
          position: absolute;
          top: 50%;
          right: clamp(0.5rem, 3vw, 2rem);
          transform: translateY(-50%);
          font-size: clamp(5rem, 18vw, 11rem);
          font-weight: 900;
          line-height: 1;
          color: rgba(60, 97, 200, 0.06);
          letter-spacing: -4px;
          pointer-events: none;
          user-select: none;
          font-family: "Lora", Georgia, serif;
        }

        .course-header-num {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          color: #3c61c8;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .course-header-title {
          font-size: clamp(1.2rem, 2.5vw, 1.65rem);
          font-weight: 700;
          color: #142033;
          line-height: 1.3;
          margin: 0;
          position: relative;
          z-index: 1;
          max-width: 75%;
        }

        .course-desc {
          color: #6c757d;
          line-height: 1.8;
          font-size: clamp(0.9rem, 1.5vw, 0.98rem);
          margin: 1rem 0 0;
          position: relative;
          z-index: 1;
        }

        .course-col-card {
          background: linear-gradient(160deg, #f8faff 0%, #f2f6fc 100%);
          border: 1px solid rgba(60, 97, 200, 0.1);
          border-radius: 1rem;
          padding: clamp(1rem, 2vw, 1.25rem);
          height: 100%;
        }

        .course-col-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #142033;
          font-size: clamp(0.88rem, 1.5vw, 0.95rem);
          font-weight: 700;
          margin-bottom: 1rem;
          padding-bottom: 0.65rem;
          border-bottom: 2px solid rgba(60, 97, 200, 0.12);
        }

        .course-col-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(60, 97, 200, 0.12);
          color: #3c61c8;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .course-check-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
        }

        .course-check-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(60, 97, 200, 0.12);
          color: #3c61c8;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .course-check-text {
          color: #6c757d;
          line-height: 1.6;
          font-size: clamp(0.84rem, 1.4vw, 0.92rem);
        }

        .course-enquire-btn {
          background: #3c61c8;
          color: #fff;
          font-size: clamp(0.85rem, 1.4vw, 0.92rem);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 22px rgba(60, 97, 200, 0.35);
          border: none;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .course-enquire-btn {
            width: auto;
          }
        }

        @media (max-width: 767.98px) {
          .course-enquire-btn {
            width: 100%;
          }

          .course-header-title {
            max-width: 100%;
          }

          .course-watermark {
            right: 0;
            opacity: 0.7;
          }
        }
      `}</style>

      <div className="container py-lg-4">

        <SectionHeader
          eyebrow={
            <span
              className="badge rounded-pill px-3 px-sm-4 py-2 bg-light-subtle fw-semibold border"
              style={{
                color: "#3c61c8",
                borderColor: "rgba(60,97,200,.15)",
                fontSize: "13px",
                letterSpacing: ".5px",
              }}
            >
              Courses Offered
            </span>
          }

          title={
            <>
              Programs designed for{" "}
              <span className="italic text-terracotta">
                real classrooms
              </span>.
            </>
          }

          intro="The Right Career focused diploma tracks built around child-centered learning, international standards, and inclusive teaching."
        />

        {/* TAB PILLS + NAV */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mt-4 mb-4">
          <div className="d-flex flex-wrap gap-2">
            {courses.map((course, i) => (
              <button
                key={course.n}
                type="button"
                className={`course-tab ${active === i ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-selected={active === i}
              >
                {course.n}
              </button>
            ))}
          </div>

          <div className="d-flex gap-2">
            <button
              type="button"
              className="course-nav-btn"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              aria-label="Previous course"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="course-nav-btn"
              onClick={() => goTo(active + 1)}
              disabled={active === courses.length - 1}
              aria-label="Next course"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* SINGLE COURSE CARD */}
        <article
          key={c.n}
          className="bg-white rounded-4 rounded-lg-5 shadow-sm border overflow-hidden course-panel-animate"
          style={{
            borderColor: "rgba(0,0,0,0.05)",
            transition: "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)"
            e.currentTarget.style.boxShadow = "0 18px 48px rgba(60,97,200,0.12)"
            e.currentTarget.style.borderColor = "rgba(60,97,200,0.15)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)"
            e.currentTarget.style.boxShadow = ""
            e.currentTarget.style.borderColor = "rgba(0,0,0,0.05)"
          }}
        >

          {/* GRADIENT BANNER */}
          <div className="course-banner">
            <h3 className="course-banner-title">{c.title}</h3>
          </div>

          {/* HEADER WITH WATERMARK */}
          <div className="course-header-area">
            <span className="course-watermark" aria-hidden="true">{c.n}</span>
            <h3 className="course-header-title">{c.title}</h3>
            <p className="course-desc">{c.desc}</p>
          </div>

          {/* THREE COLUMNS */}
          <div className="px-3 px-md-4 pb-3 pb-md-4">
            <div className="row g-3 g-md-4">
              {[
                ["What you'll learn", c.learn],
                ["Career paths", c.careers],
                ["Benefits", c.benefits],
              ].map(([label, items], colIndex) => {
                const meta = columnMeta[colIndex]
                return (
                  <div className="col-12 col-md-4" key={label}>
                    <div className="course-col-card h-100">
                      <h6 className="course-col-label">
                        <span className="course-col-icon">{meta.icon}</span>
                        {label}
                      </h6>
                      <ul className="list-unstyled mb-0">
                        {items.map((i) => (
                          <li key={i} className="course-check-item">
                            <span className="course-check-icon" aria-hidden="true">
                              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                                <path d="M2.5 6l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            <span className="course-check-text">{i}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ENQUIRE BUTTON */}
          <div className="px-3 px-md-4 pb-4 pb-md-5">
            <a
              href="#apply"
              className="btn rounded-pill px-4 py-2 fw-semibold course-enquire-btn"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)"
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(60,97,200,0.45)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 8px 22px rgba(60,97,200,0.35)"
              }}
            >
              Enquire Now
            </a>
          </div>

        </article>

      </div>

    </section>

  )
}
