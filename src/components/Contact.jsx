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

        <div className="row g-5">

          <div className="col-lg-5 d-flex flex-column gap-4">

            {/* Address */}
            <div>

              {/*<p className="eyebrow">
                Address
              </p>*/}

              <div className="d-flex align-items-start gap-3 mt-3">

                <img
                  src={locationGif}
                  alt="Address"
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "contain",
                  }}
                />

                <p
                  className="fs-5 mb-0"
                  style={{
                    maxWidth: "420px",
                    lineHeight: "1.8",
                  }}
                >
                  No. 4/379, Saravanabhava Nagar,
                  <br />
                  Near Parvathy Nagar bus stop,
                  <br />
                  Old Perungalathur, Chennai - 600063
                </p>

              </div>

            </div>

            {/* Phone */}
            <div>

              {/*<p className="eyebrow">
                Phone
              </p>*/}

              <div className="mt-3 d-flex flex-column gap-3">

                <a
                  href="tel:+919597686903"
                  className="d-flex align-items-center gap-3 fs-5 text-decoration-none"
                >

                  <img
                    src={phoneGif}
                    alt="Phone"
                    style={{
                      width: "42px",
                      height: "42px",
                      objectFit: "contain",
                    }}
                  />

                  +91 95976 86903

                </a>
              </div>

            </div>

            {/* Email */}
            <div>

              {/*<p className="eyebrow">
                Email
              </p>*/}

              <a
                href="mailto:skbtraininginstitute@gmail.com"
                className="d-flex align-items-center gap-3 fs-5 text-decoration-none mt-3"
              >

                <img
                  src={mailGif}
                  alt="Email"
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "contain",
                  }}
                />

                skbtraininginstitute@gmail.com

              </a>

            </div>

            {/* Availability */}
            <div>

              {/*<p className="eyebrow">
                Availability
              </p>*/}

              <div className="d-flex align-items-center gap-3 mt-3">

                <img
                  src={timeGif}
                  alt="Availability"
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "contain",
                  }}
                />

                <p className="fs-5 mb-0">
                  Monday – Saturday · 9:00 AM – 5:00 PM
                </p>

              </div>

            </div>



            {/* Badges */}
            <div className="d-flex gap-3 flex-wrap">

              {/* Certified */}
              <div className="badge rounded-4 bg-light-subtle text-terracotta px-3 py-3 d-flex flex-column align-items-center gap-2">

                <img
                  src={certifiedGif}
                  alt="Certified Training"
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "contain",
                  }}
                />

                <span className="fw-semibold">
                  Certified Training
                </span>

              </div>

              {/* Placement */}
              <div className="badge rounded-4 bg-light-subtle text-terracotta px-3 py-3 d-flex flex-column align-items-center gap-2">

                <img
                  src={placementGif}
                  alt="Placement Support"
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "contain",
                  }}
                />

                <span className="fw-semibold">
                  Placement Support
                </span>

              </div>

              {/* Faculty */}
              <div className="badge rounded-4 bg-light-subtle text-terracotta px-3 py-3 d-flex flex-column align-items-center gap-2">

                <img
                  src={facultyGif}
                  alt="Expert Faculty"
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "contain",
                  }}
                />

                <span className="fw-semibold">
                  Expert Faculty
                </span>

              </div>

            </div>

          </div>

          <div className="col-lg-7">

            <div
              className="bg-white rounded-5 shadow-sm p-3 p-lg-4 h-100"
              style={{
                border: "0px solid #ececec",
              }}
            >

              <div
                className="overflow-hidden rounded-5"
                style={{
                  height: "100%",
                  minHeight: "420px",
                }}
              >

                <iframe
                  title="SKB Montessori Training Institute"
                  src="https://www.google.com/maps?q=SKB+Montessori+Training+Institute+Chennai&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}