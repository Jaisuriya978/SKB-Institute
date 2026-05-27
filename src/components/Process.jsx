import SectionHeader from './SectionHeader'
import { steps } from '../data'

import userGif from '../assets/id.gif'
import desktopGif from '../assets/selective.gif'
import bookGif from '../assets/enroll.gif'
import playGif from '../assets/learning.gif'
import teacherGif from '../assets/training.gif'
import clipboardGif from '../assets/complete.gif'
import graduationGif from '../assets/certificate.gif'
import checkGif from '../assets/graduate.gif'

export default function Process() {

  // Flaticon GIFs
  const icons = [
    {
      icon: userGif,
      animation: 'float-icon',
    },

    {
      icon: desktopGif,
      animation: 'float-icon',
    },

    {
      icon: bookGif,
      animation: 'float-icon',
    },

    {
      icon: playGif,
      animation: 'float-icon',
    },

    {
      icon: teacherGif,
      animation: 'float-reverse-icon',
    },

    {
      icon: clipboardGif,
      animation: 'float-reverse-icon',
    },

    {
      icon: graduationGif,
      animation: 'float-icon',
    },

    {
      icon: checkGif,
      animation: 'float-icon',
    },
  ]

  return (
    <section
      id="process"
      className="bg-light py-5"
    >

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

        .process-card {
          transition: all 0.3s ease;
        }

        .process-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 35px rgba(0,0,0,0.08);
        }

        .process-icon {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          background: rgba(21, 101, 192, 0.08);
        }

        .rule {
          width: 48px;
          height: 2px;
          background: rgba(21, 101, 192, 0.2);
        }

        .gif-icon {
          width: 58px;
          height: 52px;
          object-fit: contain;
        }
      `}</style>

      <div className="container">

        <SectionHeader
          eyebrow={
            <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
              Your Journey
            </span>
          }
          title="Your learning journey at SKB."
        />

        <ol className="row g-4 list-unstyled mt-5">

          {steps.map(([t, d], i) => (

            <li
              className="col-lg-3 col-md-6"
              key={t}
            >

              <div className="process-card h-100 p-4 rounded-4 shadow-sm bg-white text-center border">

                {/* Animated Flaticon */}
                <div
                  className={`process-icon mx-auto mb-3 d-flex align-items-center justify-content-center ${icons[i].animation}`}
                >

                  <img
                    src={icons[i].icon}
                    alt={t}
                    className="gif-icon"
                    loading="lazy"
                  />

                </div>

                {/* Line */}
                <div className="rule my-3 mx-auto"></div>

                {/* Title */}
                <h4 className="font-serif h5 fw-semibold">
                  {t}
                </h4>

                {/* Description */}
                <p className="small text-muted mt-1 mb-2 lh-base" style={{ textAlign: "justify", hyphens: "auto" }}>
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