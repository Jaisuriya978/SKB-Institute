import SectionHeader from './SectionHeader'

import {
  GraduationCap,
  Laptop,
  BriefcaseBusiness,
  Users,
  Clock3,
  BadgeCheck,
  BookOpenCheck,
  School,
} from 'lucide-react'

const whyItems = [
  {
    title: 'Experienced Faculty',
    description:
      'Learn from dedicated trainers with practical teaching experience and industry knowledge.',
    icon: GraduationCap,
  },

  {
    title: 'Online & Offline Classes',
    description:
      'Flexible learning options designed for students, working professionals, and homemakers.',
    icon: Laptop,
  },

  {
    title: 'Placement Guidance',
    description:
      'Get career support and guidance for opportunities in schools and educational institutions.',
    icon: BriefcaseBusiness,
  },

  {
    title: 'Student-Friendly Learning',
    description:
      'Interactive and supportive classroom environment focused on confidence building.',
    icon: Users,
  },

  {
    title: 'Flexible Timings',
    description:
      'Weekend and weekday batches available for convenient learning schedules.',
    icon: Clock3,
  },

  {
    title: 'Recognized Programs',
    description:
      'Career-oriented diploma programs with practical teaching methodologies.',
    icon: BadgeCheck,
  },

  {
    title: 'Practical Training',
    description:
      'Hands-on classroom activities and internship support for real teaching experience.',
    icon: BookOpenCheck,
  },

  {
    title: 'Modern Teaching Methods',
    description:
      'Learn child-centered and activity-based teaching techniques for modern classrooms.',
    icon: School,
  },
]

export default function WhySKB() {
  return (
    <section id="why" className="py-4 bg-light">

      <div className="container">

        <SectionHeader
          eyebrow={
            <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
              Why SKB
            </span>
          }
          title={
            <>
              Why students{" "}
              <span className="italic text-terracotta">
                choose SKB
              </span>.
            </>
          }
        />

        <div className="row g-4">

          {whyItems.map((item, i) => {

            const Icon = item.icon

            return (
              <div
                className="col-sm-6 col-lg-3"
                key={item.title}
              >

                <div
                  className="card-soft h-100 bg-white rounded-4 border p-4"
                  style={{
                    transition: "0.3s ease",
                  }}
                >

                  {/* Top Section */}
                  <div className="d-flex align-items-start justify-content-between mb-4">

                    <div
                      className="d-flex align-items-center justify-content-center rounded-3"
                      style={{
                        width: "68px",
                        height: "68px",
                        background: "#eef4ff",
                      }}
                    >
                      <Icon
                        size={34}
                        className="text-terracotta"
                      />
                    </div>

                    <div
                      className="fw-semibold text-terracotta"
                      style={{
                        fontSize: "2rem",
                        lineHeight: "1",
                        letterSpacing: "-1px",
                      }}
                    >
                      0{i + 1}
                    </div>

                  </div>

                  {/* Title */}
                  <h4
                    className="fw-semibold mb-3"
                    style={{
                      fontSize: "1.35rem",
                      lineHeight: "1.4",
                      letterSpacing: "-0.4px",
                    }}
                  >
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p
                    className="mb-0 text-start"
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.8",
                      letterSpacing: "0",
                      wordSpacing: "-1px",
                      color: "#6b7280",
                    }}
                  >
                    {item.description}
                  </p>

                </div>

              </div>
            )
          })}

        </div>
        
      </div>

    </section>
  )
}