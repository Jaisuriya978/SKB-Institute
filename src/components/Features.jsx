import classroomImg from '../assets/image4.png'
import SectionHeader from './SectionHeader'

import {
  Baby,
  School,
  Blocks,
  MonitorSmartphone,
  Briefcase,
  Presentation,
  GraduationCap,
  HeartHandshake,
  BookOpenCheck,
  Users,
} from 'lucide-react'

const features = [
  {
    title: 'Child-Centered Teaching Approach',
    icon: Baby,
  },

  {
    title: 'Practical Learning Environment',
    icon: School,
  },

  {
    title: 'Activity-Based Training Sessions',
    icon: Blocks,
  },

  {
    title: 'Modern Teaching Techniques',
    icon: MonitorSmartphone,
  },

  {
    title: 'Internship & Career Support',
    icon: Briefcase,
  },

  {
    title: 'Interactive Classroom Experience',
    icon: Presentation,
  },

  {
    title: 'Professional Development Focus',
    icon: GraduationCap,
  },

  {
    title: 'Friendly Learning Atmosphere',
    icon: HeartHandshake,
  },

  {
    title: 'Real Classroom Exposure',
    icon: BookOpenCheck,
  },

  {
    title: 'Supportive Faculty Guidance',
    icon: Users,
  },
]

export default function Features() {
  return (
    <section className="section bg-cream">

      <div className="container">

        <SectionHeader
          eyebrow="What makes SKB different"
          title="A teacher-first training experience."
        />

        <div className="row g-5 align-items-center">

          {/* Left Image */}
          <div className="col-lg-5">

            <img
              src={classroomImg}
              alt="Classroom session"
              loading="lazy"
              className="rounded-4 border w-100"
              style={{
                height: 460,
                objectFit: 'cover'
              }}
            />

          </div>

          {/* Right Features */}
          <div className="col-lg-7">

            <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3">

              {features.map((item) => {

                const Icon = item.icon

                return (
                  <li
                    key={item.title}
                    className="col"
                  >

                    <div className="d-flex align-items-center gap-3 py-3 px-2 border-bottom h-100">

                      {/* Icon */}
                      <div className="flex-shrink-0">

                        <Icon
                          size={42}
                          className="text-terracotta"
                        />

                      </div>

                      {/* Text */}
                      <span className="small fw-large lh-base">
                        {item.title}
                      </span>

                    </div>

                  </li>
                )
              })}

            </ul>
          </div>

        </div>

      </div>

    </section>
  )
}