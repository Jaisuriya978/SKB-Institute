import SectionHeader from './SectionHeader'
import { benefits } from '../data'

import {
  GraduationCap,
  MonitorSmartphone,
  Target,
  BriefcaseBusiness,
  BadgeCheck,
} from "lucide-react";

const trainingBenefits = [
  {
    icon: <GraduationCap size={42} />,
    title: "Experienced Faculty",
    description:
      "Learn from qualified and experienced professionals dedicated to your success.",
    color: "#1565C0",
  },
  {
    icon: <MonitorSmartphone size={42} />,
    title: "Online and Offline Classes",
    description:
      "Flexible learning options to fit your schedule and learning comfort.",
    color: "#1565C0",
  },
  {
    icon: <Target size={42} />,
    title: "100% Career Guidance Support",
    description:
      "Career guidance and placement support for a bright teaching future.",
    color: "#1565C0",
  },
  {
    icon: <BriefcaseBusiness size={42} />,
    title: "Internship Program",
    description:
      "Hands-on experience to enhance your practical teaching skills.",
    color: "#1565C0",
  },
  {
    icon: <BadgeCheck size={42} />,
    title: "Recognized Certifications",
    description:
      "Career-focused certification programs with wide career opportunities.",
    color: "#1565C0",
  },
];

export default function TrainingBenefits() {
  return (
    <section className="py-4 bg-light">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">

          <h2 className="display-5 fw-bold mt-3">
            Benefits of Training With SKB
          </h2>

          <p className="text-muted mt-3 mx-auto" style={{ maxWidth: "900px" }}>
            Empowering future educators through professional training,
            flexible learning, internship opportunities, and support for career guidance.
          </p>
        </div>

        {/* Cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-5 g-4">

          {trainingBenefits.map((benefit, index) => (
            <div key={index} className="col">

              <div
                className="h-100 bg-white rounded-4 shadow-sm border overflow-hidden"
                style={{
                  transition: "0.3s ease",
                  borderTop: `4px solid ${benefit.color}`,
                }}
              >

                <div className="p-4 d-flex flex-column h-100">

                  {/* Icon */}
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 mx-auto mb-3"
                    style={{
                      width: "72px",
                      height: "72px",
                      minWidth: "72px",
                      minHeight: "72px",
                      backgroundColor: `${benefit.color}12`,
                      color: benefit.color,
                    }}
                  >
                    {benefit.icon}
                  </div>

                  {/* Title */}
                  <h5
                    className="fw-bold mb-3"
                    style={{
                      minHeight: "56px",
                      lineHeight: "1.35",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {benefit.title}
                  </h5>

                  {/* Description */}
                  <p
                    className="text-muted mb-0 text-start"
                    style={{
                      lineHeight: "1.75",
                      fontSize: "14px",
                      wordSpacing: "-1px",
                    }}
                  >
                    {benefit.description}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}