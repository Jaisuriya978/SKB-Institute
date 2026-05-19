import SectionHeader from './SectionHeader'
import { steps } from '../data'

import {
  UserPlus,
  BookOpen,
  MonitorPlay,
  Award,
  GraduationCap,
} from 'lucide-react'

export default function Process() {

  // Icons for each step
  const icons = [
    <UserPlus size={34} />,
    <BookOpen size={34} />,
    <MonitorPlay size={34} />,
    <Award size={34} />,
    <GraduationCap size={34} />,
  ]

  return (
    <section id="process" className="section bg-sand-deep py-5">
      <div className="container">

        <SectionHeader
          eyebrow="Your Journey"
          title="Your learning journey at SKB."
        />

        <ol className="row g-4 list-unstyled mt-5">

          {steps.map(([t, d], i) => (

            <li className="col-lg-3 col-md-6" key={t}>

              <div className="process-card h-100 p-4 rounded-4 shadow-sm bg-white text-center">

                {/* Icon */}
                <div className="process-icon mx-auto mb-3 d-flex align-items-center justify-content-center" >
                  {icons[i]}
                </div>

              

                {/* Line */}
                <div className="rule my-3 mx-auto"></div>

                {/* Title */}
                <h4 className="font-serif h5 fw-semibold">
                  {t}
                </h4>

                {/* Description */}
                <p className="small text-muted-soft mt-3 mb-0">
                  {d}
                </p>

              </div>

            </li>

          ))}

        </ol>
      </div>
    </section>
  )
}