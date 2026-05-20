import materialsImg from '../assets/Image6.jpg'
import SectionHeader from './SectionHeader'

export default function About() {
    return (
        <section id="about" className="py-5 bg-light">

            <div className="container">

                <SectionHeader
                    eyebrow={
                        <span className="badge rounded-pill px-4 py-2 bg-light-subtle text-terracotta fw-semibold border border-primary-subtle">
                            About SKB
                        </span>
                    }
                    className="mb-5"
                    title={
                        <>
                            SKB Montessori{" "}
                            <span className="italic text-terracotta">
                                Training Institute
                            </span>
                        </>
                    }
                />

                {/* TOP SECTION */}
                <div className="row align-items-stretch g-5">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-7 d-flex">

                        <div className="d-flex flex-column justify-content-center">

                            <p className="text-muted lh-lg mb-4">
                                SKB Montessori Training Institute is dedicated to empowering
                                aspiring educators through professional teacher training
                                programs that combine academic excellence with practical
                                classroom experience.
                            </p>

                            <p className="text-muted lh-lg mb-4">
                                We focus on developing confident, compassionate, and skilled
                                teachers through child-centered learning methods, classroom
                                management strategies, and practical teaching exposure.
                            </p>

                            <p className="text-muted lh-lg mb-4">
                                Our programs are designed for students, women, fresh
                                graduates, homemakers, and passionate individuals seeking
                                successful careers in education and childcare.
                            </p>

                            <p className="text-muted lh-lg mb-4">
                                Through internships, mentorship, and interactive learning,
                                students gain real-world teaching confidence and professional
                                communication skills.
                            </p>

                            <p className="fw-semibold lh-lg mb-0">
                                Whether you are beginning your teaching journey or upgrading
                                your professional skills, SKB provides the right platform to
                                grow with confidence.
                            </p>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="col-lg-5">

                        <img
                            src={materialsImg}
                            alt="Montessori materials"
                            loading="lazy"
                            className="img-fluid w-100 h-100 rounded-5 shadow-sm border object-fit-cover"
                        />

                    </div>

                </div>

                {/* VISION & MISSION */}
                <div className="row g-4 mt-5">

                    {/* VISION */}
                    <div className="col-md-6">

                        <div className="bg-white rounded-5 shadow-sm border p-4 h-100">

                            <span className="text-terracotta fw-bold small">
                                OUR VISION
                            </span>

                            <h3 className="fw-bold mt-3 mb-3">
                                Shaping Future Educators
                            </h3>

                            <p className="text-muted lh-lg mb-4">
                                To become a leading Montessori training institute that
                                develops compassionate, confident, and creative educators
                                capable of transforming modern learning environments.
                            </p>

                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">

                                <li className="d-flex gap-2">
                                    <span className="text-terracotta">✓</span>
                                    Empower aspiring educators
                                </li>

                                <li className="d-flex gap-2">
                                    <span className="text-terracotta">✓</span>
                                    Promote child-centered learning
                                </li>

                                <li className="d-flex gap-2">
                                    <span className="text-terracotta">✓</span>
                                    Encourage lifelong professional growth
                                </li>

                                <li className="d-flex gap-2">
                                    <span className="text-terracotta">✓</span>
                                    Inspire creativity and leadership
                                </li>

                            </ul>

                        </div>

                    </div>

                    {/* MISSION */}
                    <div className="col-md-6">

                        <div className="bg-white rounded-5 shadow-sm border p-4 h-100">

                            <span className="text-terracotta fw-bold small">
                                OUR MISSION
                            </span>

                            <h3 className="fw-bold mt-3 mb-3">
                                Practical Learning & Career Growth
                            </h3>

                            <p className="text-muted lh-lg mb-4">
                                Our mission is to provide industry-focused teacher training
                                through practical learning, mentorship, internship exposure,
                                and flexible education methods.
                            </p>

                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">

                                <li className="d-flex gap-2">
                                    <span className="text-terracotta">✓</span>
                                    Industry-relevant training programs
                                </li>

                                <li className="d-flex gap-2">
                                    <span className="text-terracotta">✓</span>
                                    Internship and career guidance
                                </li>

                                <li className="d-flex gap-2">
                                    <span className="text-terracotta">✓</span>
                                    Communication and classroom skills
                                </li>

                                <li className="d-flex gap-2">
                                    <span className="text-terracotta">✓</span>
                                    Flexible online & offline learning
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}