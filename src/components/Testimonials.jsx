import SectionHeader from './SectionHeader'
import { reviews } from '../data'

export default function Testimonials() {
  return (
   <section className="section">
         <div className="container">
           <SectionHeader eyebrow="Student Voices" title={<>Stories from our <span className="italic text-terracotta">graduates</span>.</>} />
           <div className="row g-4">
             {reviews.map((r, i) => (
               <div className="col-md-6" key={i}>
                 <figure className="bg-white border rounded-4 p-4 p-md-5 position-relative h-100 mb-0">
                   <span className="position-absolute font-serif text-terracotta" style={{ top: -12, left: 28, fontSize: '4rem', lineHeight: 1 }}>“</span>
                   <blockquote className="font-serif fs-4 mb-4">{r}</blockquote>
                   <figcaption className="d-flex align-items-center gap-3 small text-muted-soft">
                     <span className="brand-dot" style={{ background: 'var(--sand-deep)', color: 'var(--terracotta)' }}>S</span>
                     SKB Graduate · Batch {2024 + (i % 2)}
                   </figcaption>
                 </figure>
               </div>
             ))}
           </div>
         </div>
       </section>
  )
}