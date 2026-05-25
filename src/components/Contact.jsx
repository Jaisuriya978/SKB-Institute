import { useState } from 'react'
import { PhoneCall, Mail, MapPin, Clock3 } from 'lucide-react'
import SectionHeader from './SectionHeader'
import certifiedGif from '../assets/certificate.gif'
import placementGif from '../assets/job-offer.gif'
import facultyGif from '../assets/teacher.gif'

import locationGif from '../assets/address.gif'
import phoneGif from '../assets/phone.gif'
import mailGif from '../assets/mail.gif'
import timeGif from '../assets/time.gif'

const contactItems = [
  {
    key: 'address',
    gif: locationGif,
    alt: 'Address',
    content: (
      <p
        className="fs-6 fs-md-5 mb-0"
        style={{
          lineHeight: '1.8',
        }}
      >
        No.4/379, Saravanabhava Nagar,
        <br />
        Near Parvathy Nagar bus stop,
        <br />
        Old Perungalathur, Chennai-63
      </p>
    ),
  },
  {
    key: 'phone',
    gif: phoneGif,
    alt: 'Phone',
    content: (
      <a
        href="tel:+919597686903"
        className="fs-6 fs-md-5 text-decoration-none text-dark fw-medium"
        style={{ lineHeight: 3.6 }}
      >
        +91 95976 86903
      </a>
    ),
  },
  {
    key: 'email',
    gif: mailGif,
    alt: 'Email',
    content: (
      <a
        href="mailto:skbtraininginstitute@gmail.com"
        className="fs-6 fs-md-5 text-decoration-none text-dark fw-medium text-break"
        style={{ lineHeight: 3.6 }}
      >
        skbtraininginstitute@gmail.com
      </a>
    ),
  },
  {
    key: 'hours',
    gif: timeGif,
    alt: 'Availability',
    content: (
      <p className="fs-6 fs-md-5 mb-0" style={{ lineHeight: 1.8 }}>
        Monday to Saturday
        <br />
        9:00 AM to 5:00 PM
      </p>
    ),
  },
]

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const submit = e => {
    e.preventDefault()

    let newErrors = {}

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    }

    // Phone Validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Enter valid 10 digit mobile number'
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Enter valid email address'
    }

    // Program Validation
    if (!formData.program) {
      newErrors.program = 'Please select a program'
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      alert("Thank you! We'll be in touch shortly.")

      setFormData({
        name: '',
        phone: '',
        email: '',
        program: '',
        message: '',
      })

      setErrors({})
    }
  }

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <SectionHeader
          eyebrow={
            <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
              Contact
            </span>
          }
          title="Talk to us."
        />

        <div className="row g-4 g-lg-5 align-items-stretch">

          <div className="col-lg-5">

            <div className="d-flex flex-column gap-3 h-100">

              {contactItems.map((item) => (
                <div
                  key={item.key}
                  className="bg-white rounded-4 border p-3 p-md-4 d-flex align-items-start gap-3"
                  style={{
                    borderColor: 'rgba(60,97,200,0.1)',
                    boxShadow: '0 4px 18px rgba(3,7,22,0.04)',
                    transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 10px 28px rgba(60,97,200,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(3,7,22,0.04)'
                  }}
                >

                  <div
                    className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: 'clamp(48px, 10vw, 56px)',
                      height: 'clamp(48px, 10vw, 56px)',
                      background: '#eef4ff',
                    }}
                  >
                    <img
                      src={item.gif}
                      alt={item.alt}
                      style={{
                        width: 'clamp(34px, 7vw, 42px)',
                        height: 'clamp(34px, 7vw, 42px)',
                        objectFit: 'contain',
                      }}
                    />
                  </div>

                  <div className="min-w-0 flex-grow-1 pt-1">
                    {item.content}
                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="col-lg-7">

            <div
              className="rounded-4 overflow-hidden h-100 border shadow-sm"
              style={{
                minHeight: 'clamp(280px, 50vw, 480px)',
                borderColor: 'rgba(60,97,200,0.12) !important',
              }}
            >

              <iframe
                title="SKB Montessori Training Institute"
                src="https://www.google.com/maps?q=SKB+Montessori+Training+Institute+Chennai&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  display: 'block',
                  minHeight: 'clamp(280px, 50vw, 480px)',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
