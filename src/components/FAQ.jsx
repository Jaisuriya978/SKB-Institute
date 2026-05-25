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

        <div
          className="faq-list mx-auto"
          style={{ maxWidth: 1300 }}
        >
          {faqs.map(([q, a], i) => (
            <div
              className={`divider-line faq-item ${open === i ? 'faq-item-active' : ''}`}
              key={i}
            >
              <button
                className="faq-btn"
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className="faq-question">{q}</span>
                <span
                  className={`faq-plus ${open === i ? 'open' : ''}`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                <div className="faq-answer-inner">
                  <p className="faq-answer-text text-muted-soft">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .faq-list {
          background: #fff;
          border: 1px solid rgba(60, 97, 200, 0.1);
          border-radius: clamp(16px, 2vw, 20px);
          box-shadow: 0 8px 32px rgba(3, 7, 22, 0.05);
          overflow: hidden;
        }

        .faq-item {
          border-top: 1px solid var(--border);
          transition: background 0.25s ease;
        }

        .faq-item:first-child {
          border-top: 0;
        }

        .faq-item:hover {
          background: rgba(60, 97, 200, 0.03);
        }

        .faq-item-active {
          background: rgba(60, 97, 200, 0.05);
        }

        .faq-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: clamp(1rem, 3vw, 1.5rem);
          padding: clamp(1.1rem, 2.5vw, 1.5rem) clamp(1rem, 3vw, 1.75rem);
          background: transparent;
          border: 0;
          text-align: left;
          font-family: "Lora", Georgia, serif;
          font-size: clamp(1rem, 2.2vw, 1.15rem);
          line-height: 1.45;
          color: var(--ink);
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .faq-btn:hover {
          color: var(--terracotta);
        }

        .faq-btn:focus-visible {
          outline: 2px solid rgba(60, 97, 200, 0.45);
          outline-offset: -2px;
        }

        .faq-question {
          flex: 1;
          min-width: 0;
          padding-right: 0.25rem;
        }

        .faq-plus {
          flex-shrink: 0;
          width: clamp(36px, 8vw, 40px);
          height: clamp(36px, 8vw, 40px);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--terracotta);
          font-size: clamp(1.25rem, 3vw, 1.5rem);
          font-weight: 400;
          line-height: 1;
          background: rgba(60, 97, 200, 0.08);
          border: 1px solid rgba(60, 97, 200, 0.12);
          transition: transform 0.35s cubic-bezier(0.22, 0.68, 0, 1.12),
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease;
        }

        .faq-item-active .faq-plus,
        .faq-btn:hover .faq-plus {
          background: rgba(60, 97, 200, 0.14);
          border-color: rgba(60, 97, 200, 0.22);
        }

        .faq-plus.open {
          transform: rotate(45deg);
          background: rgba(60, 97, 200, 0.18);
          border-color: rgba(60, 97, 200, 0.28);
        }

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.38s cubic-bezier(0.22, 0.68, 0, 1.12);
        }

        .faq-answer.open {
          grid-template-rows: 1fr;
        }

        .faq-answer-inner {
          overflow: hidden;
        }

        .faq-answer-text {
          margin: 0;
          padding: 0 clamp(1rem, 3vw, 1.75rem) clamp(1.1rem, 2.5vw, 1.5rem);
          max-width: 640px;
          font-size: clamp(0.9rem, 1.8vw, 1rem);
          line-height: 1.8;
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.32s ease 0.04s, transform 0.32s ease 0.04s;
        }

        .faq-answer.open .faq-answer-text {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 575.98px) {
          .faq-btn {
            padding: 1rem 1rem;
          }

          .faq-answer-text {
            padding: 0 1rem 1rem;
            max-width: 100%;
          }

          .faq-plus {
            margin-top: 2px;
          }
        }
      `}</style>
    </section>
  )
}
