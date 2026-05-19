import materialsImg from '../assets/Image6.jpg'
import SectionHeader from './SectionHeader'

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <SectionHeader eyebrow="About SKB" title={<>SKB Montessori <span className="italic text-terracotta">Training Institute</span></>} />
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="d-flex flex-column gap-3 fs-6">

                            <p>
                                SKB Montessori Training Institute is dedicated to empowering aspiring educators through professional teacher training programs that combine academic excellence with practical classroom experience. Our institute focuses on developing confident, compassionate, and skilled teachers who can create meaningful learning environments for children.
                            </p>

                            <p>
                                We believe teaching is one of the most powerful professions in shaping the future generation. At SKB, students are trained using child-centered learning approaches, modern teaching methodologies, classroom management strategies, and activity-based education practices that prepare them for real-world teaching environments.
                            </p>

                            <p>
                                Our programs are specially designed for students, women, fresh graduates, homemakers, and individuals who are passionate about building successful careers in education and childcare. With flexible online and offline learning options, students can comfortably balance their personal and professional commitments while upgrading their skills.
                            </p>

                            <p>
                                SKB provides a supportive and interactive learning atmosphere where students receive guidance from experienced faculty members, participate in practical training sessions, and gain exposure through internship opportunities. We focus not only on theoretical learning but also on helping students develop communication skills, creativity, leadership qualities, and teaching confidence.
                            </p>

                            <p>
                                Through our Montessori, International Teachers’ Training, and Special Education programs, students gain the knowledge and practical experience required to work in preschools, Montessori schools, international schools, tuition centers, childcare centers, and educational institutions across India.
                            </p>

                            <p>
                                Our mission is to make quality teacher education accessible, career-oriented, and empowering for every learner. We continuously strive to create future educators who can inspire children, encourage creativity, and contribute positively to society through education.
                            </p>

                            <p className="fw-semibold">
                                Whether you are beginning your journey in teaching or looking to enhance your professional skills, SKB Training Institute provides the right platform, mentorship, and opportunities to help you achieve your career goals with confidence.
                            </p>

                        </div>
                    </div>

                    <div className="col-lg-5">

                        <img
                            src={materialsImg}
                            alt="Montessori materials"
                            loading="lazy"
                            className="rounded-4 border w-100 mb-4"
                            style={{ height: 300, objectFit: 'cover' }}
                        />

                        <div className="row g-3">

                            <div className="col-6">
                                <div className="card-soft h-100">

                                    <p className="eyebrow">
                                        Our Vision
                                    </p>

                                    <ul className="small mt-3 mb-0 ps-3 d-flex flex-column gap-2">

                                        <li>
                                            Empower aspiring educators with practical teaching skills
                                        </li>

                                        <li>
                                            Promote child-centered and inclusive education methods
                                        </li>

                                        <li>
                                            Develop confident, compassionate, and creativity
                                        </li>

                                        <li>
                                            Encourage lifelong learning and professional growth
                                        </li>

                                        <li>
                                            Inspire future educators to positively impact minds
                                        </li>

                                        <li>
                                            Build a trusted and career-focused training environment
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card-soft h-100">

                                    <p className="eyebrow">
                                        Our Mission
                                    </p>

                                    <ul className="small mt-2 mb-0 ps-3 d-flex flex-column gap-2">
                                        <li>Provide industry-relevant teacher training programs</li>

                                        <li>Develop practical classroom and communication skills</li>

                                        <li>Offer internship opportunities and career guidance</li>

                                        <li>Promote inclusive and child-centered education</li>

                                        <li>Empower students through flexible learning methods</li>

                                        <li>Build confident educators for modern classrooms</li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}