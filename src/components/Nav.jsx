const navLinks = [
  ['About', '#about'],
  ['Courses', '#courses'],
  ['Why SKB', '#why'],
  ['Process', '#process'],
  ['Contact', '#contact'],
]

export default function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top navbar-light"
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "14px 0",
        zIndex: "999",
      }}
    >
      <div className="container">

        {/* LOGO */}
        <a
          className="navbar-brand d-flex align-items-center gap-3"
          href="#top"
        >

          <img
            src="https://tse3.mm.bing.net/th/id/OIP.hu1XnFAnUBoNt83CF-RXgQAAAA?pid=Api&P=0&h=180"
            alt="SKB Montessori Logo"
            className="img-fluid rounded-circle shadow-sm"
            style={{
              width: "52px",
              height: "52px",
              objectFit: "cover",
            }}
          />

          <div className="d-flex flex-column">

            <span
              className="fw-bold"
              style={{
                fontSize: "1.15rem",
                color: "#142033",
                lineHeight: "1.1",
              }}
            >
              SKB
            </span>

            <small
              style={{
                color: "#6c757d",
                fontSize: "0.78rem",
                letterSpacing: ".4px",
              }}
            >
              Training Institute
            </small>

          </div>

        </a>

        {/* TOGGLER */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV LINKS */}
        <div
          id="mainNav"
          className="collapse navbar-collapse"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 mt-4 mt-lg-0">

            {navLinks.map(([label, href]) => (

              <li
                className="nav-item"
                key={href}
              >

                <a
                  className="nav-link fw-medium px-2"
                  href={href}
                  style={{
                    color: "#142033",
                    transition: "0.3s ease",
                    fontSize: "0.97rem",
                  }}
                >
                  {label}
                </a>

              </li>

            ))}

            {/* BUTTON */}
            <li className="nav-item mt-3 mt-lg-0 ms-lg-2">

              <a
                href="#apply"
                className="btn rounded-pill px-4 py-2 fw-semibold shadow-sm"
                style={{
                  background: "#3c61c8",
                  color: "#fff",
                  border: "none",
                  fontSize: "0.95rem",
                }}
              >
                Apply Now
              </a>

            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}