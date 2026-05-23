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
      className="position-relative overflow-hidden"
      style={{
        maxHeight: "100vh",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* DARK OVERLAY */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(5,10,22,.78), rgba(5,10,22,.84))",
          backdropFilter: "blur(3px)",
          zIndex: -1,
        }}
      />

      {/* ROCKET */}
      <img
        src={RocketGif}
        alt="Rocket Animation"
        className="position-absolute d-none d-lg-block"
        style={{
          width: "110px",
          right: "4%",
          bottom: "10%",
          zIndex: 2,
          mixBlendMode: "multiply",
          animation: "rocketFloat 3s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* ROCKET ANIMATION */}
      <style>
        {`
      @keyframes rocketFloat {

        0%,100% {
          transform: translateY(0px) rotate(-8deg);
        }

        50% {
          transform: translateY(-16px) rotate(4deg);
        }

      }
    `}
      </style>

      {/* CONTENT */}
      <div
        className="container position-relative"
        style={{
          zIndex: 2,
          paddingTop: "30px",
          paddingBottom: "100px",
        }}
      >

        {/* TOP LABEL */}
        <div className="text-center mb-4">



          <div className="text-center">

            <span
              className="
      px-3 px-md-4
      py-2
      rounded-pill
      text-white
      fs-6 fs-md-5 fs-lg-4
      d-inline-block
    "
              style={{
                backdropFilter: "blur(1px)",
              }}
            >
              🎓 Admissions Open 2026
            </span>

          </div>

        </div>

        {/* TITLE */}
        <div className="row justify-content-center text-primary">

          <div className="col-lg-12">

            <h1
              className="fw-bold text-white"
              style={{
                fontSize: "clamp(0.8rem, 3vw, 4rem)",
                lineHeight: "4",
                letterSpacing: "-2px",

              }}
            >
              Building Skills, Shapping Futures

            </h1>

          </div>

        </div>




        {/* BUTTONS */}
        <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">

          <a
            href="#courses"
            className="btn px-5 py-3 rounded-4 fw-semibold"
            style={{
              background: "#3c61c8",
              color: "#ffffff",
              maxWidth: "160px",
              fontSize: "1rem",
              border: "none",
            }}
          >
            Explore Courses
          </a>


          <a
            href="#contact"
            className="btn px-5 py-3 rounded-4 fw-semibold"
            style={{
              background: "#3c61c8",
              color: "#fff",
              maxWidth: "160px",
              fontSize: "1rem",
            }}
          >
            Admission Enquiry
          </a>

        </div>

        {/* STATS */}
        <div className="row justify-content-center g-3 mt-5">

          {stats.map(([n, l]) => (

            <div
              key={l}
              className="col-6 col-md-3 col-lg-2"
            >

              <div
                className="text-center rounded-4 py-4 px-3 h-100"
                style={{
                  background: "#3c61c8",
                  border: "1px solid rgba(255,255,255,.1)",
                  backdropFilter: "blur(4px)",
                  maxWidth: "220px",
                  margin: "0 auto",
                }}
              >

                {/* NUMBER */}
                <div
                  className="fw-bold"
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                    color: "#ffffff",
                    lineHeight: "1",
                  }}
                >
                  {n}
                </div>

                {/* LABEL */}
                <div
                  style={{
                    color: "rgba(255,255,255,.85)",
                    marginTop: "10px",
                    fontSize: ".82rem",
                    fontWeight: "500",
                    lineHeight: "1.5",
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