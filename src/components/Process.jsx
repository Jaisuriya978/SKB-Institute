import SectionHeader from './SectionHeader'
import { steps } from '../data'

export default function Process() {
  return (
    <section id="process" className="section bg-sand-deep">
          <div className="container">
            <SectionHeader eyebrow="Your Journey" title="Your learning journey at SKB." />
            <ol className="row g-4 list-unstyled">
              {steps.map(([t, d], i) => (
                <li className="col-md" key={t}>
                  <div className="font-serif display-6 text-terracotta">0{i + 1}</div>
                  <div className="rule my-3"></div>
                  <h4 className="font-serif h6">{t}</h4>
                  <p className="small text-muted-soft mt-2">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
  )
}