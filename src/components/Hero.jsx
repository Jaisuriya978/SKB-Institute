import heroImg from '../assets/Image5.JPG'
import { stats } from '../data'
import { FaCheckCircle } from "react-icons/fa"
import RocketGif from '../assets/rocket.gif'

export default function Hero() {

  const highlights = [
    "Experienced Faculty",
    "Online & Offline Classes",
    "Internship Opportunities",
    "Career Guidance",
    "Recognized Programs",
    "Hands on Training"
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

      <div className="container py-lg-5">

        <div className="row align-items-center gy-5 gx-lg-5">

          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-6 text-justify text-lg-start">

            {/* BADGE */}
            <span
              className="d-inline-flex align-items-center gap-2 px-4 px-sm-5 py-2 py-sm-3 fw-semibold rounded-pill shadow-sm mb-3 mb-md-4"
              style={{
                background: "linear-gradient(135deg, #eef4ff, #f8fbff)",
                color: "#3c61c8",
                border: "1px solid rgba(60,97,200,0.18)",
                boxShadow: "0 8px 24px rgba(60,97,200,0.08)",
                fontSize: "clamp(12px, 1.5vw, 14px)",
                letterSpacing: ".6px",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",

              }}
            >
              🎓 Admissions Open 2026

            </span>

            {/* TITLE */}
            <h1
              className="fw-bold mb-3 mb-md-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 4.2rem)",
                lineHeight: "1.15",
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
              className="text-secondary mb-4 mx-auto mx-lg-0"
              style={{
                fontSize: "clamp(.95rem, 2vw, 1.08rem)",
                lineHeight: "1.8",
                maxWidth: "700px",
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
                letterSpacing: "3px",
                color: "#3c61c8",
                fontSize: "12px",
              }}
            >
              Learn • Grow • Empower
            </p>

            {/* BUTTONS */}
            <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">

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
                  background: "#3c61c8",
                  color: "#fff",
                }}
              >
                Explore Courses
              </a>

              <a
                href="#contact"
                className="btn rounded-pill px-4 py-3 fw-semibold"
                style={{
                  minWidth: "180px",
                  background: "#3c61c8",
                  color: "#fff",

                }}
              >
                Download Brochure
              </a>

            </div>


            {/* FEATURES */}
            <div className="row g-3 g-md-4 mt-4 mt-lg-5">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="col-6 col-md-6 col-lg-4"
                >

                  <div
                    className="h-100 d-flex flex-column flex-sm-row align-items-start gap-2 gap-sm-3 p-3 rounded-4"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(0,0,0,0.06)",
                      transition: "0.3s ease",
                      minHeight: "100%",
                    }}
                  >

                    {/* ICON */}
                    <div
                      className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-circle"
                      style={{
                        width: "36px",
                        height: "36px",
                        background: "rgba(60,97,200,0.08)",
                      }}
                    >
                      <FaCheckCircle
                        size={15}
                        style={{ color: "#3c61c8" }}
                      />
                    </div>

                    {/* TEXT */}
                    <span
                      className="fw-semibold"
                      style={{
                        color: "#1c2434",
                        lineHeight: "1.5",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-12 col-md-10 col-lg-6 mx-auto">

            <div className="position-relative text-center">

              {/* MAIN IMAGE */}
              <img
                src={heroImg}
                alt="Montessori Training"
                className="img-fluid rounded-4 shadow-lg"
                style={{
                  width: "100%",
                  maxWidth: "750px",
                  height: "clamp(320px, 65vw, 550px)",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />


              {/* ROCKET ICON BELOW IMAGE */}
              <div className="d-flex justify-content-center mt-3 mt-md-4">

                {/* FLATICON ANIMATION */}
                <img
                  src={RocketGif}
                  alt="Rocket Animation"
                  className="img-fluid"
                  style={{
                    width: "clamp(120px, 18vw, 220px)",
                    height: "auto",
                    objectFit: "contain",
                    animation: "bounce 2s infinite",
                    marginTop: "10px",

                    // REMOVE BACKGROUND EFFECT
                    background: "transparent",
                    mixBlendMode: "multiply",
                  }}
                />

                {/* INLINE STYLE ANIMATION */}
                <style>
                  {`
      @keyframes bounce {
        0%, 100% {
          transform: translateY(0px);
        }

        50% {
          transform: translateY(-14px);
        }
      }
    `}
                </style>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="container pt-3">

        <div className="row row-cols-1 row-cols-md-4 g-4">

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
                    lineHeight: ".75",
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