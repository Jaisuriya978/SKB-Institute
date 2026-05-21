export default function Newsletter() {
  const submit = e => { e.preventDefault(); alert('Subscribed!') }
  return (
    <section className="section bg-light py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <div className="mb-3">

              <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
                Newsletter
              </span>

            </div>
            <h3 className="font-serif display-6 mt-2">Stay updated with <span className="italic text-terracotta">SKB</span>.</h3>
            <p className="text-muted-soft mt-2 mb-0" style={{ maxWidth: 540 }}>
              Update about admissions, workshops, new programs, and educational opportunities for delivered to your inbox.
            </p>
          </div>
          <div className="col-lg-5">
            <form onSubmit={submit} className="d-flex flex-column flex-sm-row gap-2">
              <input type="email" required placeholder="your@email.com" className="form-control form-control-lg rounded-pill px-4" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}