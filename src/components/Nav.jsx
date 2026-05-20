const navLinks = [
  ['About', '#about'],
  ['Courses', '#courses'],
  ['Why SKB', '#why'],
  ['Process', '#process'],
  ['Contact', '#contact'],
]

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-md sticky-top bg-light border-bottom" style={{ backdropFilter: 'blur(8px)' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#top">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.hu1XnFAnUBoNt83CF-RXgQAAAA?pid=Api&P=0&h=180"
            alt="SKB Montessori Logo"
            className="navbar-logo"
          />
          <span className="font-serif fs-5">SKB <span className="text-muted-soft fs-6">Montessori Training Institute</span></span>
        </a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Toggle">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="mainNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-md-center gap-md-3">
            {navLinks.map(([l, h]) => (
              <li className="nav-item" key={h}><a className="nav-link nav-link-skb" href={h}>{l}</a></li>
            ))}
            <li className="nav-item ms-md-3"><a className="btn btn-primary btn-sm" href="#apply">Apply Now</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}