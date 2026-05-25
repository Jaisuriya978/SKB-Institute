import aboutImg from '../assets/Image6.jpg'

import visionGif from '../assets/vision.gif'
import missionGif from '../assets/mission.gif'
import mottoGif from '../assets/motto.gif'

import SectionHeader from './SectionHeader'

const valueCards = [
    {
        gif: visionGif,
        alt: 'Vision',
        title: 'Vision',
        text: 'Creating confident and compassionate future educators.',
        bg: '#EEF6FF',
    },
    {
        gif: missionGif,
        alt: 'Mission',
        title: 'Mission',
        text: 'Practical learning with mentorship, internships, and career support.',
        bg: '#FFF5EE',
    },
    {
        gif: mottoGif,
        alt: 'Motto',
        title: 'Motto',
        text: 'Determination, development, and dedication in education.',
        bg: '#F5F3FF',
    },
]

export default function About() {
    return (
        <section
            id="about"
            className="py-5 bg-light overflow-hidden"
        >

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
                            <span className="text-terracotta">
                                Training Institute
                            </span>
                        </>
                    }
                />

                <div className="row align-items-center g-4 g-lg-5">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-5 order-2 order-lg-1">

                        <div className="pe-lg-4">

                            <p
                                className="text-muted lh-lg mb-4"
                                style={{
                                    fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                                }}
                            >
                                SKB Montessori Training Institute is dedicated
                                to empowering aspiring educators through
                                professional teacher training programs focused
                                on practical learning and child-centered education.
                            </p>

                            <p
                                className="text-muted lh-lg mb-4"
                                style={{
                                    fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                                }}
                            >
                                We help students, homemakers, fresh graduates,
                                and passionate individuals build successful
                                careers in teaching through modern classroom
                                training and internship exposure.
                            </p>

                            {/* VISION / MISSION / MOTTO */}
                            <div className="d-flex flex-column gap-3">

                                {valueCards.map((card) => (
                                    <div
                                        key={card.title}
                                        className="bg-white rounded-4 shadow-sm border p-3 p-sm-4 d-flex align-items-start gap-3"
                                        style={{
                                            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-3px)'
                                            e.currentTarget.style.boxShadow = '0 12px 28px rgba(60,97,200,0.1)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)'
                                            e.currentTarget.style.boxShadow = ''
                                        }}
                                    >

                                        <div
                                            className="rounded-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{
                                                width: 'clamp(56px, 12vw, 65px)',
                                                height: 'clamp(56px, 12vw, 65px)',
                                                background: card.bg,
                                            }}
                                        >

                                            <img
                                                src={card.gif}
                                                alt={card.alt}
                                                width={36}
                                                height={36}
                                                style={{
                                                    objectFit: 'contain',
                                                }}
                                            />

                                        </div>

                                        <div className="min-w-0">

                                            <h5 className="fw-bold mb-1" style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}>
                                                {card.title}
                                            </h5>

                                            <p
                                                className="text-muted mb-0"
                                                style={{
                                                    lineHeight: '1.7',
                                                    fontSize: 'clamp(13px, 1.6vw, 14px)',
                                                }}
                                            >
                                                {card.text}
                                            </p>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-7 order-1 order-lg-2">

                        <div
                            className="position-relative"
                            style={{
                                paddingBottom: 'clamp(0px, 2vw, 0px)',
                            }}
                        >

                            {/* MAIN IMAGE */}
                            <img
                                src={aboutImg}
                                alt="SKB Montessori Training Institute"
                                className="img-fluid w-100 rounded-4 rounded-lg-5 shadow-sm"
                                style={{
                                    width: '100%',
                                    height: 'clamp(260px, 45vw, 520px)',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    borderRadius: '24px',
                                }}
                            />

                            {/* EXPERIENCE CARD */}
                            <div
                                className="position-absolute d-none d-sm-block"
                                style={{
                                    bottom: 'clamp(12px, 3vw, 24px)',
                                    right: 'clamp(12px, 3vw, 28px)',
                                    zIndex: 2,
                                }}
                            >

                                <div
                                    className="bg-white shadow rounded-4 px-3 px-md-4 py-3 border text-center"
                                    style={{
                                        minWidth: 'clamp(120px, 22vw, 150px)',
                                        borderColor: 'rgba(60,97,200,0.12) !important',
                                        boxShadow: '0 12px 32px rgba(3,7,22,0.12)',
                                    }}
                                >

                                    <h2
                                        className="fw-bold text-terracotta mb-1"
                                        style={{
                                            fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
                                            lineHeight: 1,
                                        }}
                                    >
                                        8+
                                    </h2>

                                    <p
                                        className="mb-0 fw-medium text-muted"
                                        style={{
                                            fontSize: 'clamp(0.78rem, 1.6vw, 0.9rem)',
                                            lineHeight: 1.35,
                                        }}
                                    >
                                        Years of Excellence
                                    </p>

                                </div>

                            </div>

                            {/* MOBILE EXPERIENCE CARD — below image, no overlap */}
                            <div className="d-sm-none mt-3">
                                <div
                                    className="bg-white shadow-sm rounded-4 px-3 py-3 border text-center mx-auto"
                                    style={{
                                        maxWidth: '180px',
                                        borderColor: 'rgba(60,97,200,0.12)',
                                        borderTop: '3px solid rgba(60,97,200,0.5)',
                                    }}
                                >
                                    <h2
                                        className="fw-bold text-terracotta mb-1"
                                        style={{ fontSize: '2.2rem', lineHeight: 1 }}
                                    >
                                        8+
                                    </h2>
                                    <p
                                        className="mb-0 fw-medium text-muted"
                                        style={{ fontSize: '0.85rem', lineHeight: 1.35 }}
                                    >
                                        Years of Excellence
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
