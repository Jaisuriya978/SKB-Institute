import { useState } from 'react'
import SectionHeader from './SectionHeader'
import { faqs } from '../data'

export default function FAQ() {

  const [open, setOpen] = useState(0)
    return (
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions." />
          <div style={{ maxWidth: 780 }} className="border-top border-bottom">
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