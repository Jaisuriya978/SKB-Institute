import aboutImg from '../assets/Image6.jpg'

import visionGif from '../assets/vision.gif'
import missionGif from '../assets/mission.gif'
import mottoGif from '../assets/motto.gif'

import SectionHeader from './SectionHeader'

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

                <div className="row align-items-center g-5">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-5">

                        <div className="pe-lg-4">

                            <p
                                className="text-muted lh-lg mb-4"
                                style={{
                                    fontSize: '1.05rem',
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
                                    fontSize: '1.05rem',
                                }}
                            >
                                We help students, homemakers, fresh graduates,
                                and passionate individuals build successful
                                careers in teaching through modern classroom
                                training and internship exposure.
                            </p>

                          


                            {/* VISION / MISSION / MOTTO */}
                            <div className="d-flex flex-column gap-3">

                                {/* Vision */}
                                <div className="bg-white rounded-4 shadow-sm border p-3 d-flex align-items-start gap-3">

                                    <div
                                        className="rounded-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                        style={{
                                            width: "65px",
                                            height: "65px",
                                            background: "#EEF6FF",
                                        }}
                                    >

                                        <img
                                            src={visionGif}
                                            alt="Vision"
                                            width={36}
                                            height={36}
                                            style={{
                                                objectFit: "contain",
                                            }}
                                        />

                                    </div>

                                    <div>

                                        <h5 className="fw-bold mb-1">
                                            Vision
                                        </h5>

                                        <p
                                            className="text-muted mb-0"
                                            style={{
                                                lineHeight: "1.7",
                                                fontSize: "14px",
                                            }}
                                        >
                                            Creating confident and compassionate future educators.
                                        </p>

                                    </div>

                                </div>

                                {/* Mission */}
                                <div className="bg-white rounded-4 shadow-sm border p-3 d-flex align-items-start gap-3">

                                    <div
                                        className="rounded-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                        style={{
                                            width: "65px",
                                            height: "65px",
                                            background: "#FFF5EE",
                                        }}
                                    >

                                        <img
                                            src={missionGif}
                                            alt="Mission"
                                            width={36}
                                            height={36}
                                            style={{
                                                objectFit: "contain",
                                            }}
                                        />

                                    </div>

                                    <div>

                                        <h5 className="fw-bold mb-1">
                                            Mission
                                        </h5>

                                        <p
                                            className="text-muted mb-0"
                                            style={{
                                                lineHeight: "1.7",
                                                fontSize: "14px",
                                            }}
                                        >
                                            Practical learning with mentorship, internships, and career support.
                                        </p>

                                    </div>

                                </div>

                                {/* Motto */}
                                <div className="bg-white rounded-4 shadow-sm border p-3 d-flex align-items-start gap-3">

                                    <div
                                        className="rounded-4 d-flex align-items-center justify-content-center flex-shrink-0"
                                        style={{
                                            width: "65px",
                                            height: "65px",
                                            background: "#F5F3FF",
                                        }}
                                    >

                                        <img
                                            src={mottoGif}
                                            alt="Motto"
                                            width={36}
                                            height={36}
                                            style={{
                                                objectFit: "contain",
                                            }}
                                        />

                                    </div>

                                    <div>

                                        <h5 className="fw-bold mb-1">
                                            Motto
                                        </h5>

                                        <p
                                            className="text-muted mb-0"
                                            style={{
                                                lineHeight: "1.7",
                                                fontSize: "14px",
                                            }}
                                        >
                                            Determination, development, and dedication in education.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-7">

                        <div className="position-relative">

                            {/* MAIN IMAGE */}
                            <img
                                src={aboutImg}
                                alt="SKB Montessori Training Institute"
                                className="img-fluid rounded-5 shadow-sm w-100"
                                style={{
                                    height: '520px',
                                    objectFit: 'cover',
                                    
                                }}
                            />


                            {/* EXPERIENCE CARD */}
                            <div
                                className="position-absolute bottom-0 end-0 translate-middle-y"
                                style={{
                                    zIndex: 2,
                                    marginBottom: '-105px'
                                }}
                            >

                                <div
                                    className="bg-white shadow rounded-5 px-5 py-4 border text-center"
                                >

                                    <h2
                                        className="fw-bold text-terracotta mb-1"
                                        style={{
                                            fontSize: '3rem',
                                        }}
                                    >
                                        8+
                                    </h2>

                                    <p className="mb-0 fw-medium">
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