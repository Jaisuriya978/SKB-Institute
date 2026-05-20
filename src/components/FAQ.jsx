import { useState } from 'react'
import SectionHeader from './SectionHeader'
import { faqs } from '../data'

export default function FAQ() {

  const [open, setOpen] = useState(0)
  return (
    <section className="py-5 bg-light" id="faq">
      <div className="container">
        <SectionHeader
          eyebrow={
            <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
              FAQ
            </span>
          }
          title="Frequently asked questions."
        />
        <div style={{ maxWidth: 1300 }} className="border-top border-bottom">
          {faqs.map(([q, a], i) => (
            <div className="divider-line" key={i}>
              <button className="faq-btn" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{q}</span>
                <span className={`faq-plus ${open === i ? 'open' : ''}`}>+</span>
              </button>
              {open === i && <p className="pb-4 text-muted-soft" style={{ maxWidth: 640 }}>{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}