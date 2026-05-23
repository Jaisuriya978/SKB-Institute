import SectionHeader from './SectionHeader'
import { courses } from '../data'

export default function Courses() {

  return (

    <section
      id="courses"
      className="py-5 bg-light overflow-hidden"
    >

      <div className="container py-lg-4">

        {/* SECTION HEADER */}
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

          intro="Three career-focused diploma tracks built around child-centered learning, international standards, and inclusive teaching."
        />

        {/* COURSE CARDS */}
        <div className="d-flex flex-column gap-4 gap-lg-5 mt-4">

          {courses.map((c) => (

            <article
              key={c.n}
              className="bg-white rounded-4 rounded-lg-5 shadow-sm border overflow-hidden"
              style={{
                borderColor: "rgba(0,0,0,0.05)",
              }}
            >

              <div className="row g-0 align-items-stretch">

                {/* LEFT SIDE */}
                <div className="col-12 col-lg-4">

                  <div
                    className="h-100 p-4 p-md-5"
                    style={{
                      background: "#fff",
                    }}
                  >

                    {/* NUMBER */}
                    <div
                      className="fw-bold"
                      style={{
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        color: "#3c61c8",
                        lineHeight: "1",
                      }}
                    >
                      {c.n}
                    </div>

                    {/* TITLE */}
                    <h3
                      className="mt-3 fw-bold"
                      style={{
                        fontSize: "clamp(1.4rem, 2vw, 2rem)",
                        color: "#142033",
                        lineHeight: "1.3",
                      }}
                    >
                      {c.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="mt-3 mb-4"
                      style={{
                        color: "#6c757d",
                        lineHeight: "1.8",
                        fontSize: "0.98rem",
                      }}
                    >
                      {c.desc}
                    </p>

                    {/* BUTTON */}
                    <a
                      href="#apply"
                      className="btn rounded-pill px-4 py-2 fw-semibold"
                      style={{
                        background: "#3c61c8",
                        color: "#fff",
                        fontSize: "0.92rem",
                      }}
                    >
                      Enquire Now
                    </a>

                  </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="col-12 col-lg-8">

                  <div className="h-100 p-4 p-md-5">

                    <div className="row g-4">

                      {[
                        ["What you'll learn", c.learn],
                        ["Career paths", c.careers],
                        ["Benefits", c.benefits]
                      ].map(([label, items]) => (

                        <div
                          className="col-12 col-md-4"
                          key={label}
                        >

                          {/* LABEL */}
                          <h6
                            className="fw-bold mb-3"
                            style={{
                              color: "#142033",
                              fontSize: "0.95rem",
                              letterSpacing: ".3px",
                            }}
                          >
                            {label}
                          </h6>

                          {/* LIST */}
                          <ul className="list-unstyled mb-0">

                            {items.map((i) => (

                              <li
                                key={i}
                                className="d-flex align-items-start gap-2 mb-3"
                              >

                                <span
                                  style={{
                                    width: "7px",
                                    height: "7px",
                                    borderRadius: "50%",
                                    background: "#3c61c8",
                                    marginTop: "9px",
                                    flexShrink: 0,
                                  }}
                                ></span>

                                <span
                                  style={{
                                    color: "#6c757d",
                                    lineHeight: "1.6",
                                    fontSize: "0.94rem",
                                  }}
                                >
                                  {i}
                                </span>

                              </li>

                            ))}

                          </ul>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

  )
}