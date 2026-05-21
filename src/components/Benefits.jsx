import SectionHeader from './SectionHeader'

import {
  GraduationCap,
  MonitorSmartphone,
  Target,
  BriefcaseBusiness,
  BadgeCheck,
} from 'lucide-react'

const trainingBenefits = [
  {
    icon: GraduationCap,
    title: 'The Experienced Faculty',
    description:
      'Learn from the dedicated trainers with the practical teaching experience and to the industry knowledge',
    color: '#1565C0',
    animation: 'swing-icon',
  },

  {
    icon: MonitorSmartphone,
    title: 'Online and Offline Classes',
    description:
      'Flexible the learning options designed for students, working professionals, and homemakers.',
    color: '#1565C0',
    animation: 'float-reverse-icon',
  },

  {
    icon: Target,
    title: '100% Career Guidance Support',
    description:
      'Get career support and guidance for opportunities in schools and educational institutions.',
    color: '#1565C0',
    animation: 'swing-icon',
  },

  {
    icon: BriefcaseBusiness,
    title: 'The Internship Programs',
    description:
      'Hands on the classroom activities and internship support for real teaching experience.',
    color: '#1565C0',
    animation: 'rotate-icon',
  },

  {
    icon: BadgeCheck,
    title: 'Recognized Certifications',
    description:
      'The Career focused certification programs along with the career opportunities for all.',
    color: '#1565C0',
    animation: 'float-icon',
  },
]
export default function TrainingBenefits() {
  return (
    <section className="py-5 bg-light">

      {/* Animations */}
      <style>{`
  @keyframes float {
    0%,100% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-6px);
    }
  }

  @keyframes floatReverse {
    0%,100% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(6px);
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

  @keyframes rotateReverse {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(-8deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes swing {
    0%,100% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(6deg);
    }

    75% {
      transform: rotate(-6deg);
    }
  }

  .float-icon {
    animation: float 2.5s ease-in-out infinite;
  }

  .float-reverse-icon {
    animation: floatReverse 2.5s ease-in-out infinite;
  }

  .pulse-icon {
    animation: pulse 2s ease-in-out infinite;
  }

  .rotate-icon {
    animation: rotateSoft 3s ease-in-out infinite;
  }

  .rotate-reverse-icon {
    animation: rotateReverse 3s ease-in-out infinite;
  }

  .swing-icon {
    animation: swing 2.5s ease-in-out infinite;
    transform-origin: top center;
  }

  .benefit-card {
    transition: all 0.3s ease;
  }

  .benefit-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 35px rgba(0,0,0,0.08);
  }
`}</style>

      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">

          <SectionHeader
            eyebrow={
              <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
                Benefits to Choose SKB
              </span>
            }
            title="Benefits of Training With SKB"
          />

          <p
            className="text-muted mt-3 mx-auto"
            style={{ maxWidth: '900px' }}
          >
            Empowering future educators through professional training,
            flexible learning, internship opportunities, and career support.
          </p>

        </div>

        {/* Cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-5 g-4">

          {trainingBenefits.map((benefit, index) => {

            const Icon = benefit.icon

            return (
              <div
                key={index}
                className="col"
              >

                <div
                  className="benefit-card h-100 bg-white rounded-4 shadow-sm border overflow-hidden"
                  style={{
                    borderTop: `4px solid ${benefit.color}`,
                  }}
                >

                  <div className="p-4 d-flex flex-column h-100 text-center">

                    {/* Animated Icon */}
                    <div
                      className={`d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 mx-auto mb-4 ${benefit.animation}`}
                      style={{
                        width: '78px',
                        height: '78px',
                        backgroundColor: `${benefit.color}12`,
                        color: benefit.color,
                      }}
                    >

                      <Icon
                        size={40}
                        strokeWidth={2}
                      />

                    </div>

                    {/* Title */}
                    <h5
                      className="fw-bold mb-3"
                      style={{
                        minHeight: '56px',
                        lineHeight: '1.35',
                        letterSpacing: '-0.5px',
                      }}
                    >
                      {benefit.title}
                    </h5>

                    {/* Description */}
                    <p
                      className="text-muted mb-0"
                      style={{
                        lineHeight: '1.35',
                        fontSize: '14px',
                      }}
                    >
                      {benefit.description}
                    </p>

                  </div>

                </div>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}