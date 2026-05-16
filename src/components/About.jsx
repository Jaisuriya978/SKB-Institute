import materialsImg from '../assets/image2.png'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="section">
          <div className="container">
            <SectionHeader eyebrow="About SKB" title={<>About SKB Montessori <span className="italic text-terracotta">Training Institute</span></>} />
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="d-flex flex-column gap-3 fs-6">
                  <p>SKB Montessori Training Institute is committed to transforming passionate learners into professional educators through high-quality teacher training programs. Our institute focuses on practical teaching methodologies, child-centered education, classroom confidence, and professional growth.</p>
                  <p>We believe education is not just about teaching lessons — it is about inspiring children, nurturing creativity, and building a brighter future. Our programs are carefully designed to provide both theoretical knowledge and practical teaching experience that prepares students for real classroom environments.</p>
                  <p>With dedicated faculty members, supportive learning environments, internship opportunities, and flexible learning modes, SKB has become a trusted choice for aspiring teachers and childcare professionals.</p>
                  <p className="fw-semibold">Whether you are a beginner stepping into the teaching field or someone looking to upgrade your skills, SKB provides the right platform to achieve your career goals.</p>
                </div>
              </div>
              <div className="col-lg-5">
                <img src={materialsImg} alt="Montessori materials" loading="lazy" className="rounded-4 border w-100 mb-4" style={{ height: 280, objectFit: 'cover' }} />
                <div className="row g-3">
                  <div className="col-6"><div className="card-soft"><p className="eyebrow">Our Vision</p><p className="small mt-2 mb-0">Skilled, compassionate, and confident educators shaping the future generation through quality education.</p></div></div>
                  <div className="col-6"><div className="card-soft"><p className="eyebrow">Our Mission</p>
                    <ul className="small mt-2 mb-0 ps-3">
                      <li>Industry-relevant programs</li><li>Practical teaching skills</li>
                      <li>Internship & guidance</li><li>Inclusive education</li>
                    </ul>
                  </div></div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}