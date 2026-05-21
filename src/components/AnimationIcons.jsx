import React from 'react'
import handshakeGif from '../assets/handshake.gif'
import usersGif from '../assets/user.gif'
import classGif from '../assets/presentation.gif'
import ExpertGif from '../assets/expert.gif'
import TrainingGif from '../assets/training.gif'
import careerGif from '../assets/training1.gif'
import lessonGif from '../assets/lesson.gif'
import clockGif from '../assets/clock.gif'

export function GraduationCapIcon({
  size = 120,
  className = '',
  animate = false,
}) {
  return (
    <img
      src={ExpertGif}
      width={size}
      height={size}
      alt="Graduation Cap"
      className={className}
      style={{
        objectFit: 'contain',
      }}
    />
  )
}

export function LaptopIcon({
  size = 120,
  className = '',
  animate = false,
}) {
  return (
    <img
      src={classGif}
      width={size}
      height={size}
      alt="Laptop"
      className={className}
      style={{
        objectFit: 'contain',
      }}
    />
  )
}

export function HandshakeAnimationIcon({
  size = 120,
  className = '',
  animate = false,
}) {
  return (
    <img
      src={handshakeGif}
      width={size}
      height={size}
      alt="Handshake"
      className={className}
      style={{
        objectFit: 'contain',
      }}
    />
  )
}

export function UsersIcon({
  size = 120,
  className = '',
  animate = false,
}) {
  return (
    <img
      src={usersGif}
      width={size}
      height={size}
      alt="Users"
      className={className}
      style={{
        objectFit: 'contain',
      }}
    />
  )
}

export function BadgeCheckIcon({
  size = 120,
  className = '',
  animate = false,
}) {
  return (
    <img
      src={careerGif}
      width={size}
      height={size}
      alt="Badge Check"
      className={className}
      style={{
        objectFit: 'contain',
      }}
    />
  )
}

export function BookOpenCheckIcon({
  size = 120,
  className = '',
  animate = false,
}) {
  return (
     <img
      src={lessonGif}
      width={size}
      height={size}
      alt="Badge Check"
      className={className}
      style={{
        objectFit: 'contain',
      }}
    />
)
}

export function SchoolIcon({
  size = 120,
  className = '',
  animate = false,
}) {
  return (
    <img
      src={TrainingGif}
      width={size}
      height={size}
      alt="Graduation Cap"
      className={className}
      style={{
        objectFit: 'contain',
      }}
    />
  )
}

export function ClockIcon({
  size = 120,
  className = '',
  animate = false,
}) {
  return (
    <img
      src={clockGif}
      width={size}
      height={size}
      alt="Briefcase"
      className={className}
      style={{
        objectFit: 'contain',
      }}
  
    />

  )
}