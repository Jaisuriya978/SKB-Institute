import SectionHeader from './SectionHeader'
import { whyItems } from '../data'

export default function WhySKB() {
  return (
    <section id="why" className="section">
          <div className="container">
            <SectionHeader eyebrow="Why SKB" title={<>Why students <span className="italic text-terracotta">choose SKB</span>.</>} />
            <div className="row g-3">
              {whyItems.map(([t, d], i) => (
                <div className="col-sm-6 col-lg-3" key={t}>
                  <div className="card-soft h-100">
                    <div className="font-serif fs-4 text-terracotta">0{i + 1}</div>
                    <h4 className="font-serif h6 mt-2">{t}</h4>
                    <p className="small text-muted-soft mt-2 mb-0">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}