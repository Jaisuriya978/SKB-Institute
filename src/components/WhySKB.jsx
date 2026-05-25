import React, { useState } from 'react'

import {
  GraduationCapIcon,
  LaptopIcon,
  HandshakeAnimationIcon,
  UsersIcon,
  ClockIcon,
  BadgeCheckIcon,
  BookOpenCheckIcon,
  SchoolIcon,
} from './AnimationIcons'

const whyItems = [
  {
    title: 'Experienced Faculty',
    description:
      'Learn from dedicated trainers who bring years of practical teaching experience and deep industry knowledge to every session.',
    Icon: GraduationCapIcon,
  },
  {
    title: 'Online & Offline Classes',
    description:
      'Flexible learning options thoughtfully designed for students, working professionals, and homemakers to learn at their own pace.',
    Icon: LaptopIcon,
  },
  {
    title: 'Placement Guidance',
    description:
      'Receive personalised career support and placement guidance for opportunities in reputed schools and educational institutions.',
    Icon: HandshakeAnimationIcon,
  },
  {
    title: 'Student-Friendly Learning',
    description:
      'Enjoy an interactive and supportive classroom environment fully focused on building your confidence and communication skills.',
    Icon: UsersIcon,
  },
  {
    title: 'Flexible Timings',
    description:
      'Choose from weekend and weekday batches designed to fit your schedule without disrupting your personal or work commitments.',
    Icon: ClockIcon,
  },
  {
    title: 'Recognized Programs',
    description:
      'Enrol in career-oriented diploma programs built around practical teaching methodologies and widely recognised by schools.',
    Icon: BadgeCheckIcon,
  },
  {
    title: 'Practical Training',
    description:
      'Gain real teaching experience through hands-on classroom activities, live practice sessions, and dedicated internship support.',
    Icon: BookOpenCheckIcon,
  },
  {
    title: 'Modern Teaching Methods',
    description:
      'Master child-centered and activity-based teaching techniques perfectly suited for engaging and modern classroom environments.',
    Icon: SchoolIcon,
  },
]

function WhyCard({ item, index }) {
  const [hovered, setHovered] = useState(false)
  const Icon = item.Icon

  return (
    <div
      className="col-sm-6 col-lg-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="h-100 bg-white rounded-4 border p-4 p-md-4"
        style={{
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.35s cubic-bezier(0.22, 0.68, 0, 1.12), box-shadow 0.35s ease, border-color 0.3s ease',
          boxShadow: hovered
            ? '0 14px 40px rgba(60,97,200,0.12)'
            : '0 2px 10px rgba(0,0,0,0.04)',
          transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
          borderColor: hovered ? 'rgba(60,97,200,0.18)' : 'rgba(0,0,0,0.08)',
        }}
      >

        {/* Top row — icon + number */}
        <div className="d-flex align-items-start justify-content-between mb-3 mb-md-4">
          <div
            className="d-flex align-items-center justify-content-center rounded-4"
            style={{
              width: 'clamp(56px, 12vw, 64px)',
              height: 'clamp(56px, 12vw, 64px)',
              flexShrink: 0,
              background: hovered ? '#e7f0ff' : '#eef4ff',
              transition: 'background 0.3s ease, transform 0.35s cubic-bezier(0.22, 0.68, 0, 1.12)',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
            }}
          >
            <Icon size={44} className="text-terracotta" animate={hovered} />
          </div>

          <div
            className="fw-semibold text-terracotta"
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
              lineHeight: 1,
              opacity: hovered ? 1 : 0.35,
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
            }}
          >
            0{index + 1}
          </div>
        </div>

        {/* Title */}
        <h4
          className="fw-semibold mb-2"
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
            lineHeight: 1.45,
            letterSpacing: '-0.2px',
            minHeight: 'clamp(2.6rem, 6vw, 2.8rem)',
            display: 'flex',
            alignItems: 'flex-start',
            color: '#142033',
          }}
        >
          {item.title}
        </h4>

        {/* Description */}
        <p
          className="mb-0"
          style={{
            color: '#6b7280',
            fontSize: 'clamp(13px, 1.5vw, 14px)',
            lineHeight: 1.75,
            textAlign: 'left',
            flex: 1,
          }}
        >
          {item.description}
        </p>

      </div>
    </div>
  )
}

export default function WhySKB() {
  return (
    <section id="why" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-4 mb-md-5 px-2">
          <span
            className="badge rounded-pill px-4 py-2 mb-3"
            style={{
              background: '#eef4ff',
              color: '#3c61c8',
              fontWeight: 600,
            }}
          >
            Why SKB
          </span>

          <h2
            className="fw-bold mb-0"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              letterSpacing: '-0.5px',
              lineHeight: 1.15,
            }}
          >
            Why students{' '}
            <span className="text-terracotta fst-italic">choose SKB</span>
          </h2>
        </div>

        <div className="row g-3 g-md-4">
          {whyItems.map((item, index) => (
            <WhyCard key={item.title} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
