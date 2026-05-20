import SectionHeader from './SectionHeader'
import { courses } from '../data'

export default function Courses() {
  return (
    <section id="courses" className="py-4 bg-light">
      <div className="container">
        <SectionHeader
          eyebrow={
            <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
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
        <div className="d-flex flex-column gap-4">
          {courses.map(c => (
            <article key={c.n} className="bg-white border rounded-4 p-4 p-md-5">
              <div className="row g-4">
                <div className="col-lg-4">
                  <div className="font-serif display-5 text-terracotta lh-1">{c.n}</div>
                  <h3 className="mt-3 font-serif h3">{c.title}</h3>
                  <p className="mt-3 text-muted-soft">{c.desc}</p>
                  <a href="#apply" className="text-terracotta fw-semibold text-decoration-none">Enquire about this program →</a>
                </div>
                <div className="col-lg-8">
                  <div className="row g-4 border-top border-lg-0 pt-3 pt-lg-0 ps-lg-4 border-lg-start">
                    {[['What you\'ll learn', c.learn], ['Career paths', c.careers], ['Benefits', c.benefits]].map(([label, items]) => (
                      <div className="col-sm-4" key={label}>
                        <p className="eyebrow text-muted-soft" style={{ color: 'var(--muted)' }}>{label}</p>
                        <ul className="list-unstyled small mt-2">
                          {items.map(i => <li key={i} className="mb-2">· {i}</li>)}
                        </ul>
                      </div>
                    ))}
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