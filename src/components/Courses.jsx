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

              <div className="row g-0 align-items-stretch">

                {/* LEFT SIDE */}
                <div className="col-12 col-lg-4">

                  <div
                    className="h-100 p-4 p-md-5 position-relative"
                    style={{
                      background: "#fff",
                    }}
                  >

                    {/* accent bar */}
                    <div
                      className="position-absolute top-0 start-0 d-none d-lg-block"
                      style={{
                        width: "4px",
                        height: "100%",
                        background: "linear-gradient(180deg, #3c61c8 0%, rgba(60,97,200,0.2) 100%)",
                      }}
                    />

                    {/* NUMBER */}
                    <div
                      className="fw-bold"
                      style={{
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        color: "#3c61c8",
                        lineHeight: "1",
                        opacity: 0.95,
                      }}
                    >
                      {c.n}
                    </div>

                    {/* TITLE */}
                    <h3
                      className="mt-3 fw-bold"
                      style={{
                        fontSize: "clamp(1.25rem, 2.2vw, 2rem)",
                        color: "#142033",
                        lineHeight: "1.25",
                        letterSpacing: "-0.3px",
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
                        fontSize: "clamp(0.9rem, 1.5vw, 0.98rem)",
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
                        fontSize: "clamp(0.85rem, 1.4vw, 0.92rem)",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        boxShadow: "0 8px 22px rgba(60,97,200,0.35)",
                      }}
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

                </div>

                {/* RIGHT SIDE */}
                <div className="col-12 col-lg-8">

                  <div
                    className="h-100 p-4 p-md-5"
                    style={{
                      background: "linear-gradient(135deg, #fafbfd 0%, #f5f8fc 100%)",
                      borderTop: "1px solid rgba(60,97,200,0.06)",
                    }}
                  >

                    <div className="row g-4 g-md-4">

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
                            className="fw-bold mb-3 pb-2"
                            style={{
                              color: "#142033",
                              fontSize: "clamp(0.88rem, 1.5vw, 0.95rem)",
                              letterSpacing: ".3px",
                              borderBottom: "2px solid rgba(60,97,200,0.15)",
                              display: "inline-block",
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
                                    lineHeight: "1.65",
                                    fontSize: "clamp(0.88rem, 1.4vw, 0.94rem)",
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
