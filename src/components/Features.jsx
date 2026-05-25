import classroomImg from '../assets/Image8.jpg'
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
    <section className="bg-light py-3">

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse {
          0%,100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }
        }

        @keyframes rotateSoft {
          0% {
            transform: rotate(0deg);
          }

          50% {
            transform: rotate(8deg);
          }

          100% {
            transform: rotate(0deg);
          }
        }

        .icon-float {
          animation: float 2.5s ease-in-out infinite;
        }

        .icon-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .icon-rotate {
          animation: rotateSoft 3s ease-in-out infinite;
        }
      `}</style>

      <div className="container">

        <SectionHeader
          eyebrow={
            <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
              What makes SKB different
            </span>
          }
          title="A teacher-first training experience."
        />

        <div className="row g-5 align-items-center">

          {/* Left Image */}
          <div className="col-lg-5">

            <img
              src={classroomImg}
              alt="Classroom session"
              loading="lazy"
              className="rounded-4 border w-100 shadow-sm"
              style={{
                height: 560,
                objectFit: 'cover',
              }}
            />

          </div>

          {/* Right Features */}
          <div className="col-lg-7">

            <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3">

              {features.map((item, index) => {

                const Icon = item.icon

                const animationClass =
                  index % 3 === 0
                    ? 'icon-float'
                    : index % 3 === 1
                    ? 'icon-pulse'
                    : 'icon-rotate'

                return (
                  <li
                    key={item.title}
                    className="col"
                  >

                    <div className="d-flex align-items-center gap-3 p-3 rounded-4 border bg-white shadow-sm h-100">

                      {/* Animated Icon */}
                      <div className="flex-shrink-0">

                        <Icon
                          size={42}
                          strokeWidth={2}
                          className={`text-terracotta ${animationClass}`}
                        />

                      </div>

                      {/* Text */}
                      <span className="fw-semibold lh-base">
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