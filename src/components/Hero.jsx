import heroImg from '../assets/Image5.JPG'
import { stats } from '../data'
import { FaCheckCircle } from "react-icons/fa"

export default function Hero() {

  const highlights = [
    "Experienced Faculty",
    "Online & Offline Classes",
    "Internship Opportunities",
    "Career Guidance Support",
    "Recognized Diploma Programs"
  ]

  return (
    <section
      id="top"
      className="bg-light overflow-hidden py-5"
      style={{
        background:
          "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)",
      }}
    >

      <div className="container">

        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-7">

            {/* BADGE */}
            <span
              className="badge rounded-pill px-4 py-3 fw-semibold border mb-4"
              style={{
                background: "#eef4ff",
                color: "#3c61c8",
                borderColor: "rgba(60,97,200,.15)",
                fontSize: "14px",
                letterSpacing: ".5px",
              }}
            >
              🎓 Admissions Open 2026
            </span>

            {/* TITLE */}
            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "clamp(2.8rem, 3vw, 4.2rem)",
                lineHeight: "1.08",
                color: "#142033",
              }}
            >
              Shape young minds.
              <br />

              <span
                className="fst-italic fw-medium"
                style={{
                  color: "#3c61c8",
                }}
              >
                Build a successful
                <br />
                teaching career.
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              className="text-secondary mb-4"
              style={{
                fontSize: "1.08rem",
                lineHeight: "1.9",
                maxWidth: "90%",
              }}
            >
              SKB Montessori Training Institute empowers aspiring
              educators through professional Montessori training,
              childcare education, international teacher training,
              and special education programs designed for
              real-world teaching success.
            </p>

            {/* TAG */}
            <p
              className="fw-semibold text-uppercase mb-4"
              style={{
                letterSpacing: "4px",
                color: "#3c61c8",
                fontSize: "13px",
              }}
            >
              Learn • Grow • Empower
            </p>

            {/* BUTTONS */}
            <div className="d-flex flex-wrap gap-3 mt-4">

              <a
                href="#apply"
                className="btn rounded-pill px-4 py-3 fw-semibold shadow"
                style={{
                  background: "#3c61c8",
                  color: "#fff",
                  minWidth: "180px",
                }}
              >
                Apply Now
              </a>

              <a
                href="#courses"
                className="btn btn-light border rounded-pill px-4 py-3 fw-semibold"
                style={{
                  minWidth: "180px",
                }}
              >
                Explore Courses
              </a>

              <a
                href="#contact"
                className="btn btn-outline-secondary rounded-pill px-4 py-3 fw-semibold"
                style={{
                  minWidth: "210px",
                }}
              >
                Download Brochure
              </a>

            </div>

            {/* FEATURES */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-3 mt-5">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="col"
                >

                  <div className="d-flex align-items-start gap-2">

                    <FaCheckCircle
                      size={16}
                      className="mt-1 text-terracotta flex-shrink-0"
                    />

                    <span className="fw-medium text-dark">
                      {item}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-5">

            <div className="position-relative">

              {/* MAIN IMAGE */}
              <img
                src={heroImg}
                alt="Montessori Training"
                className="img-fluid w-100 rounded-5 shadow-lg border border-4 border-white"
                style={{
                  width: "560px",
                  objectFit: "cover",
                }}
              />
            </div>

          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="container pt-5">

        <div className="row row-cols-2 row-cols-md-4 g-4">

          {stats.map(([n, l]) => (

            <div
              className="col"
              key={l}
            >

              <div
                className="bg-white rounded-5 border shadow-sm text-center h-100 p-4 transition"
                style={{
                  transition: "all .35s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)"
                  e.currentTarget.style.boxShadow =
                    "0 20px 45px rgba(0,0,0,.08)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow =
                    "0 .125rem .25rem rgba(0,0,0,.075)"
                }}
              >

                <div
                  className="fw-bold mb-2"
                  style={{
                    fontSize: "clamp(2.3rem, 5vw, 4rem)",
                    color: "#3c61c8",
                    lineHeight: "1",
                    transition: ".3s ease",
                  }}
                >
                  {n}
                </div>

                <div
                  className="fw-medium text-secondary"
                  style={{
                    fontSize: "15px",
                  }}
                >
                  {l}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}