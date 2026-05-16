import classroomImg from '../assets/image4.png'
import SectionHeader from './SectionHeader'
import { features } from '../data'

export default function Features() {
  return (
        <section className="section bg-cream">
          <div className="container">
            <SectionHeader eyebrow="What makes SKB different" title="A teacher-first training experience." />
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <img src={classroomImg} alt="Classroom session" loading="lazy" className="rounded-4 border w-100" style={{ height: 460, objectFit: 'cover' }} />
              </div>
              <div className="col-lg-7">
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-0">
                  {features.map((it, i) => (
                    <li key={it} className="col d-flex gap-3 py-3 border-bottom">
                      <span className="font-serif small text-terracotta" style={{ width: 28 }}>{String(i + 1).padStart(2, '0')}</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
  )
}