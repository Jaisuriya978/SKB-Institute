import React, { useState } from 'react'
import {motion} from 'framer-motion'

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
      'Learn from dedicated trainers with practical teaching experience and industry knowledge.',
    Icon: GraduationCapIcon,
  },

  {
    title: 'Online & Offline Classes',
    description:
      'Flexible learning options designed for students, working professionals, and homemakers.',
    Icon: LaptopIcon,
  },

  {
    title: 'Placement Guidance',
    description:
      'Get career support and guidance for opportunities in schools and educational institutions.',
    Icon: HandshakeAnimationIcon,
  },

  {
    title: 'Student-Friendly Learning',
    description:
      'Interactive and supportive classroom environment focused on confidence building.',
    Icon: UsersIcon,
  },

  {
    title: 'Flexible Timings',
    description:
      'Weekend and weekday batches available for convenient learning schedules.',
    Icon: ClockIcon,
  },

  {
    title: 'Recognized Programs',
    description:
      'Career-oriented diploma programs with practical teaching methodologies.',
    Icon: BadgeCheckIcon,
  },

  {
    title: 'Practical Training',
    description:
      'Hands-on classroom activities and internship support for real teaching experience.',
    Icon: BookOpenCheckIcon,
  },

  {
    title: 'Modern Teaching Methods',
    description:
      'Learn child-centered and activity-based teaching techniques for modern classrooms.',
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
        className="card-soft h-100 bg-white rounded-4 border p-4"
        style={{
          transition: 'all 0.35s ease',
          boxShadow: hovered
            ? '0 10px 35px rgba(0,0,0,0.08)'
            : '0 2px 8px rgba(0,0,0,0.04)',
          transform: hovered
            ? 'translateY(-6px)'
            : 'translateY(0)',
        }}
      >

        {/* Top */}
        <div className="d-flex align-items-start justify-content-between mb-4">

          {/* Animated Icon */}
          <div
            className="d-flex align-items-center justify-content-center rounded-4"
            style={{
              width: '72px',
              height: '72px',
              background: hovered
                ? '#e7f0ff'
                : '#eef4ff',
              transition: '0.3s ease',
            }}
          >

            <Icon
              size={50}
              className="text-terracotta"
              animate={hovered}
            />

          </div>

          {/* Number */}
          <div
            className="fw-semibold text-terracotta"
            style={{
              fontSize: '2rem',
              lineHeight: 1,
              opacity: hovered ? 1 : 0.45,
              transition: '0.3s ease',
            }}
          >
            0{index + 1}
          </div>

        </div>

        {/* Title */}
        <h4
          className="fw-semibold mb-3"
          style={{
            fontSize: '1.25rem',
            lineHeight: '1.4',
            letterSpacing: '-0.3px',
          }}
        >
          {item.title}
        </h4>

        {/* Description */}
        <p
          className="mb-0"
          style={{
            color: '#6b7280',
            fontSize: '15px',
            lineHeight: '1.8',
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
    <section
      id="why"
      className="py-5 bg-light"
    >

      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">

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
            className="fw-bold"
            style={{
              fontSize: 'clamp(2rem,4vw,3rem)',
              letterSpacing: '-1px',
            }}
          >
            Why students{' '}
            <span className="text-terracotta fst-italic">
              choose SKB
            </span>
          </h2>

        </div>

        {/* Cards */}
        <div className="row g-4">

          {whyItems.map((item, index) => (
            <WhyCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>
  )
}