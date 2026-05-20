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
    title: "Online & Offline Classes",
    description:
      "Flexible learning options to fit your schedule and learning comfort.",
    color: "#1565C0",
  },
  {
    icon: <Target size={42} />,
    title: "100% Job Guidance",
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
    title: "Recognized Diplomas",
    description:
      "Career-focused diploma programs with wide career opportunities.",
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
            flexible learning, internship opportunities, and career guidance.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">

          {trainingBenefits.map((benefit, index) => (
            <div key={index} className="col-lg col-md-6">

              <div
                className="h-100 p-4 text-center rounded-4 shadow-sm bg-white"
                style={{
                  borderTop: `5px solid ${benefit.color}`,
                  transition: "0.3s ease",
                }}
              >

                <div
                  className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "90px",
                    height: "90px",
                    backgroundColor: `${benefit.color}15`,
                    color: benefit.color,
                  }}
                >
                  {benefit.icon}
                </div>

                <h5
                  className="fw-bold mb-3"
                  style={{ color: benefit.color }}
                >
                  {benefit.title}
                </h5>

                <p className="text-muted mb-0">
                  {benefit.description}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}