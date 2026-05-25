import portraitImg from '../assets/Image4.jpg'

export default function CTA() {
  return (
    <section id="apply" className="py-5 bg-ink position-relative overflow-hidden">
      {/* Shimmer top border */}
      <div
        className="position-absolute top-0 start-0 w-100"
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #3c61c8, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Grid texture */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Radial glow behind heading */}
      <div
        className="position-absolute"
        style={{
          width: '420px',
          height: '420px',
          top: '10%',
          left: '-8%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(60,97,200,0.18) 0%, transparent 68%)',
          filter: 'blur(2px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <style>{`
        .cta-heading {
          font-weight: 800;
        }

        .cta-gradient-text {
          font-style: italic;
          background: linear-gradient(118deg, #a8c8ff 0%, #3c61c8 45%, #7eaaff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(0.72rem, 1.2vw, 0.78rem);
          font-weight: 500;
          white-space: nowrap;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.75rem;
          border-radius: 999px;
          background: linear-gradient(135deg, #3c61c8 0%, #2740a0 100%);
          color: #fff;
          border: none;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(60, 97, 200, 0.55);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }

        .cta-btn-primary:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(60, 97, 200, 0.65);
        }

        .cta-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 1.75rem;
          border-radius: 999px;
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255, 255, 255, 0.32);
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          backdrop-filter: blur(6px);
          transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;
        }

        .cta-btn-outline:hover {
          color: #fff;
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.55);
          background: rgba(255, 255, 255, 0.08);
        }

        .cta-portrait {
          border-radius: 1rem;
          box-shadow:
            0 0 0 4px rgba(60, 97, 200, 0.25),
            0 24px 60px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 575.98px) {
          .cta-actions {
            flex-direction: column;
            align-items: stretch !important;
          }

          .cta-btn-primary,
          .cta-btn-outline {
            width: 100%;
          }
        }
      `}</style>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row g-5 align-items-center">
          <div className="col-lg-7 position-relative">
            <div className="mb-3">

              <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
                Begin Your Journey
              </span>

            </div>
            <h2 className="font-serif display-4 mt-3 cta-heading text-white">
              Begin your journey toward a{' '}
              <span className="cta-gradient-text">rewarding teaching career</span>.
            </h2>
            <p className="mt-4 fs-5" style={{ color: 'rgba(255,255,255,.75)' }}>
              Become a confident educator with professional training, practical skills, and career guidance from SKB Montessori Training Institute.
            </p>

           {/* <div className="d-flex flex-wrap gap-2 mt-3">
              <span className="cta-trust-pill">✓ Certified Programs</span>
              <span className="cta-trust-pill">✓ Placement Support</span>
              <span className="cta-trust-pill">✓ Flexible Batches</span>
            </div> */}

            <div className="d-flex flex-wrap gap-3 mt-4 cta-actions">
              <a href="#contact" className="cta-btn-primary">
                Enroll Today
              </a>
              <a href="#contact" className="cta-btn-outline">
                Talk to our Team
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <img
              src={portraitImg}
              alt="SKB student"
              loading="lazy"
              className="rounded-4 w-100 cta-portrait"
              style={{ height: 350, objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
