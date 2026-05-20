import heroImg from '../assets/Image5.JPG'
import { stats } from '../data'

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-light py-1">
      <div className="container py-5 py-md-6">
        <div className="row g-5 align-items-end">
          <div className="col-lg-7">
            <span className="badge-pill mb-4">🎓 Admissions Open 2026</span>
            <h1 className="font-serif display-3 lh-1">
              Shape young minds. <span className="italic text-terracotta">Build a successful teaching career.</span>
            </h1>
            <p className="mt-4 fs-5 text-muted-soft">
              SKB Montessori Training Institute empowers aspiring educators with professional Montessori training,
              childcare education, international teacher training, and special education programs designed for
              real-world teaching success.
            </p>
            <p className="eyebrow mt-3">Learn • Grow • Empower</p>
            <div className="hero-buttons mt-4">
              <a href="#apply" className="btn btn-primary">
                Apply Now
              </a>

              <a href="#courses" className="btn btn-outline-dark">
                Explore Courses
              </a>

              <a href="#contact" className="btn btn-ghost">
                Download Brochure
              </a>
            </div>
            <ul className="list-unstyled row row-cols-2 row-cols-md-2 row-cols-lg-3 mt-4 gy-3 gx-3 small">
              {[
                "Experienced Faculty",
                "Online & Offline Classes",
                "Internship Opportunities",
                "Career Guidance Support",
                "Recognized Diploma Programs"
              ].map((h) => (
                <li
                  key={h}
                  className="col d-flex align-items-start"
                >
                  <span
                    className="text-terracotta me-2 flex-shrink-0"
                    style={{ lineHeight: "1.5" }}
                  >
                    ✓
                  </span>

                  <span className="lh-base">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-5 position-relative">
            <img src={heroImg} alt="Montessori teacher with children" className="img-fluid rounded-4 border" style={{ height: 320, objectFit: 'cover', width: '100%' }} />

          </div>
        </div>
      </div>
      <div className="container"><div className="rule"></div></div>
      <div className="container py-4">
        <div className="row text-center text-md-start g-4">
          {stats.map(([n, l]) => (
            <div className="col-6 col-md-3" key={l}>
              <div className="font-serif display-6 text-terracotta">{n}</div>
              <div className="small text-muted-soft">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}