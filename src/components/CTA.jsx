import portraitImg from '../assets/Image4.jpg'

export default function CTA() {
  return (
    <section id="apply" className="py-4 bg-ink">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7">
            <div className="mb-3">

              <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
                Begin Your Journey
              </span>

            </div>
            <h2 className="font-serif display-4 mt-3">
              Begin your journey toward a <span className="italic text-terracotta">rewarding teaching career</span>.
            </h2>
            <p className="mt-4 fs-5" style={{ color: 'rgba(255,255,255,.75)' }}>
              Become a confident educator with professional training, practical skills, and career guidance from SKB Montessori Training Institute.
            </p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 mt-4">

              <div className="col">
                <a
                  href="#contact"
                  className="btn btn-primary rounded-pill w-80 py-3 fw-semibold"
                >
                  Enroll Course Today
                </a>
              </div>

              <div className="col">
                <a
                  href="#contact"
                  className="btn btn-primary rounded-pill w-80 py-3 fw-semibold"
                >
                  Talk to our Team
                </a>
              </div>

              <div className="col">
                <a
                  href="#contact"
                  className="btn btn-primary rounded-pill w-80 py-3 fw-semibold"
                >
                  Apply Now
                </a>
              </div>

            </div>
          </div>
          <div className="col-lg-5">
            <img src={portraitImg} alt="SKB student" loading="lazy" className="rounded-4 w-100" style={{ height: 350, objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  )
}