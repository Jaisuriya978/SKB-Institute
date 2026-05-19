import { useState } from 'react'
import { PhoneCall, Mail } from 'lucide-react'
import SectionHeader from './SectionHeader'

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
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader eyebrow="Contact" title="Talk to us." />

        <div className="row g-5">

          <div className="col-lg-5 d-flex flex-column gap-4">

            <div>
              <p className="eyebrow">Address</p>

              <p className="fs-5 mt-2 mb-0">
                SKB Montessori Training Institute
                <br />
                4/379, Parvathi Nagar, Saravana Bawa Nagar, Old Perungalathur, Chennai - 600063 Tamil Nadu, India
              </p>
            </div>

            <div>

              <p className="eyebrow">
                Phone
              </p>

              <a
                href="tel:+919597686903"
                className="d-flex align-items-center gap-2 fs-5 text-decoration-none mb-2"
              >
                <PhoneCall size={18} className="text-terracotta" />

                +91 95976 86903
              </a>

              <a
                href="tel:+919841152894"
                className="d-flex align-items-center gap-2 fs-5 text-decoration-none"
              >
                <PhoneCall size={18} className="text-terracotta" />

                +91 98411 52894
              </a>

            </div>
            <div>

              <p className="eyebrow">
                Email
              </p>

              <a
                href="mailto:skbtraininginstitute@gmail.com"
                className="d-flex align-items-center gap-2 fs-5 text-decoration-none"
              >
                <Mail size={18} className="text-terracotta" />

                skbtraininginstitute@gmail.com
              </a>

            </div>

            <div>
              <p className="eyebrow">Availability</p>

              <p className="fs-5 mt-2 mb-0">
                Monday – Saturday · 9:00 AM – 5:00 PM
              </p>
            </div>

          </div>

          <div className="col-lg-7">

            <form
              onSubmit={submit}
              className="bg-white border rounded-4 p-4 p-md-5 d-flex flex-column gap-3"
            >

              <div className="row g-3">

                {/* Name */}
                <div className="col-sm-6">

                  <label className="eyebrow d-block mb-2">
                    Full name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''
                      }`}
                    placeholder="Your name"
                  />

                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name}
                    </div>
                  )}

                </div>

                {/* Phone */}
                <div className="col-sm-6">

                  <label className="eyebrow d-block mb-2">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''
                      }`}
                    placeholder="+91 ..."
                  />

                  {errors.phone && (
                    <div className="invalid-feedback">
                      {errors.phone}
                    </div>
                  )}

                </div>

              </div>

              {/* Email */}
              <div>

                <label className="eyebrow d-block mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''
                    }`}
                  placeholder="you@example.com"
                />

                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                )}

              </div>

              {/* Program */}
              <div>

                <label className="eyebrow d-block mb-2">
                  Program of interest
                </label>

                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className={`form-select form-select-lg ${errors.program ? 'is-invalid' : ''
                    }`}
                >
                  <option value="">
                    Select Program
                  </option>

                  <option>
                    Advanced Diploma in Montessori & Child Care
                  </option>

                  <option>
                    PG Diploma in International Teachers' Training
                  </option>

                  <option>
                    PG Diploma in Special Education
                  </option>
                </select>

                {errors.program && (
                  <div className="invalid-feedback">
                    {errors.program}
                  </div>
                )}

              </div>

              {/* Message */}
              <div>

                <label className="eyebrow d-block mb-2">
                  Message
                </label>

                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-control ${errors.message ? 'is-invalid' : ''
                    }`}
                  placeholder="Tell us about your goals…"
                ></textarea>

                {errors.message && (
                  <div className="invalid-feedback">
                    {errors.message}
                  </div>
                )}

              </div>

              <button
                type="submit"
                className="btn btn-primary align-self-start"
              >
                Send enquiry
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}