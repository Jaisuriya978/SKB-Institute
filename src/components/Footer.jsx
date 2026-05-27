import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaWhatsapp,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
} from "react-icons/fa"

const socialLinks = [
    { name: "Instagram", icon: <FaInstagram size={18} />, link: "https://www.instagram.com/skbtraininginstitute/", color: "#E1306C" },
    { name: "Facebook",  icon: <FaFacebookF  size={18} />, link: "https://www.facebook.com/skbtraininginstitute/",  color: "#1877F2" },
    { name: "YouTube",   icon: <FaYoutube    size={18} />, link: "https://www.youtube.com/@skbtraininginstitute",  color: "#FF0000" },
    { name: "WhatsApp",  icon: <FaWhatsapp   size={18} />, link: "https://wa.me/919597686903",                    color: "#25D366" },
    { name: "LinkedIn",  icon: <FaLinkedinIn size={18} />, link: "https://www.linkedin.com/in/skbtraininginstitute/", color: "#0A66C2" },
]

const navLinks = [
    { name: "Home",    path: "#top"     },
    { name: "About",   path: "#about"   },
    { name: "Courses", path: "#courses" },
    { name: "Process", path: "#process" },
    { name: "Contact", path: "#contact" },
]

export default function Footer() {
    return (
        <footer
            style={{
                background: "linear-gradient(180deg,#040a1c 0%,#030716 100%)",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                padding: "72px 0 0",
            }}
        >
            <style>{`
                /* Eyebrow label */
                .ft-eyebrow {
                    font-size: .70rem;
                    font-weight: 700;
                    letter-spacing: .14em;
                    text-transform: uppercase;
                    color: #6b9fff;
                    margin: 0 0 20px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .ft-eyebrow::after {
                    content: "";
                    flex: 1;
                    height: 1px;
                    background: rgba(107,159,255,.22);
                }

                /* Nav links */
                .ft-link {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: rgba(255,255,255,.65);
                    font-size: .88rem;
                    font-weight: 500;
                    text-decoration: none;
                    padding: 5px 0;
                    transition: color .2s ease, gap .2s ease;
                }
                .ft-link::before {
                    content: "";
                    width: 5px; height: 5px;
                    border-radius: 50%;
                    background: #3c61c8;
                    flex-shrink: 0;
                    opacity: 0;
                    transition: opacity .2s;
                }
                .ft-link:hover { color: #7eaaff; gap: 12px; }
                .ft-link:hover::before { opacity: 1; }

                /* Social buttons */
                .ft-social {
                    width: 42px; height: 42px;
                    border-radius: 12px;
                    border: 1px solid rgba(255,255,255,.10);
                    background: rgba(255,255,255,.05);
                    display: flex; align-items: center; justify-content: center;
                    color: rgba(255,255,255,.70);
                    text-decoration: none;
                    transition: transform .2s ease, background .2s ease, border-color .2s ease, color .2s ease;
                }
                .ft-social:hover {
                    transform: translateY(-4px);
                    border-color: rgba(255,255,255,.25);
                    color: #fff;
                }

                /* Bottom bar */
                .ft-bottom {
                    margin-top: 56px;
                    padding: 20px 0;
                    border-top: 1px solid rgba(255,255,255,.07);
                }

                /* Tagline */
                .ft-tagline {
                    font-size: .88rem;
                    font-style: italic;
                    color: rgba(255,255,255,.38);
                    margin: 0;
                    letter-spacing: .01em;
                }
            `}</style>

            <div className="container">
                <div className="row g-5">

                    {/* ── COL 1: BRAND ── */}
                    <div className="col-lg-4 col-md-12">

                        {/* Logo + name */}
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <img
                                src="https://tse3.mm.bing.net/th/id/OIP.hu1XnFAnUBoNt83CF-RXgQAAAA?pid=Api&P=0&h=180"
                                alt="SKB Logo"
                                style={{ width: "44px", height: "44px", objectFit: "contain", borderRadius: "10px" }}
                            />
                            <div>
                                <p style={{ margin: 0, color: "#fff", fontWeight: 700, fontSize: ".95rem", lineHeight: 1.2 }}>SKB</p>
                                <p style={{ margin: 0, color: "rgba(255,255,255,.50)", fontSize: ".76rem", fontWeight: 500, letterSpacing: ".02em" }}>Training Institute</p>
                            </div>
                        </div>

                        {/* Tagline */}
                        <p style={{
                            fontSize: "1.35rem",
                            fontStyle: "italic",
                            fontWeight: 600,
                            color: "#7eaaff",
                            margin: "0 0 14px",
                            letterSpacing: "-.01em",
                            lineHeight: 1.3,
                        }}>
                            Dream. Learn. Achieve.
                        </p>

                        {/* Description */}
                        <p style={{
                            color: "rgba(255,255,255,.50)",
                            fontSize: ".86rem",
                            lineHeight: 1.75,
                            maxWidth: "340px",
                            margin: "0 0 28px",
                        }}>
                            Your trusted growth partner in building a successful transformation
                            journey toward becoming a qualified educator.
                        </p>

                        {/* Contact snippets */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            {[
                                { Icon: FaPhone,           text: "+91 95976 86903"              },
                                { Icon: FaEnvelope,        text: "skbtraininginstitute@gmail.com"       },
                                { Icon: FaMapMarkerAlt,    text: "Tamil Nadu, India"             },
                            ].map(({ Icon, text }) => (
                                <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <span style={{
                                        width: "30px", height: "30px", borderRadius: "8px",
                                        background: "rgba(60,97,200,.18)",
                                        border: "1px solid rgba(96,140,255,.18)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0,
                                    }}>
                                        <Icon size={13} color="#7eaaff" />
                                    </span>
                                    <span style={{ color: "rgba(255,255,255,.55)", fontSize: ".82rem", fontWeight: 500 }}>{text}</span>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* ── COL 2: QUICK LINKS ── */}
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <p className="ft-eyebrow">Quick Links</p>
                        <ul className="list-unstyled m-0" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            {navLinks.map((l) => (
                                <li key={l.name}>
                                    <a href={l.path} className="ft-link">{l.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── COL 3: PROGRAMS ── */}
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <p className="ft-eyebrow">Programs</p>
                        <ul className="list-unstyled m-0" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            {[
                                "Montessori D.Ed",
                                "Practical Skills",
                                "Professional Training",
                                "Online Courses",
                                "Career Guidance",
                            ].map((p) => (
                                <li key={p}>
                                    <a href="#courses" className="ft-link">{p}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── COL 4: FOLLOW US ── */}
                    <div className="col-lg-4 col-md-4">
                        <p className="ft-eyebrow">Follow Us</p>
                        <p style={{ color: "rgba(255,255,255,.50)", fontSize: ".85rem", lineHeight: 1.70, margin: "0 0 22px" }}>
                            Stay connected for admissions, workshops, and student success stories.
                        </p>

                        {/* Social icon grid */}
                        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                            {socialLinks.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ft-social"
                                    title={s.name}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = s.color
                                        e.currentTarget.style.borderColor = s.color
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "rgba(255,255,255,.05)"
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,.10)"
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>

                        {/* Newsletter hint */}
                        <div
                            style={{
                                marginTop: "28px",
                                padding: "18px 20px",
                                borderRadius: "14px",
                                background: "rgba(60,97,200,.12)",
                                border: "1px solid rgba(96,140,255,.18)",
                            }}
                        >
                            <p style={{ color: "#a8c4ff", fontSize: ".80rem", fontWeight: 700, margin: "0 0 4px", letterSpacing: ".04em", textTransform: "uppercase" }}>
                                Admissions Open 2026
                            </p>
                            <p style={{ color: "rgba(255,255,255,.50)", fontSize: ".80rem", margin: "0 0 12px", lineHeight: 1.6 }}>
                                Limited seats available. Apply early to secure your spot.
                            </p>
                            <a
                                href="#contact"
                                style={{
                                    display: "inline-flex", alignItems: "center", gap: "6px",
                                    padding: "8px 18px", borderRadius: "8px",
                                    background: "linear-gradient(135deg,#3c61c8,#2a4baa)",
                                    color: "#fff", fontSize: ".80rem", fontWeight: 700,
                                    textDecoration: "none",
                                    boxShadow: "0 4px 14px rgba(60,97,200,.40)",
                                    transition: "transform .2s,box-shadow .2s",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(60,97,200,.55)" }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(60,97,200,.40)" }}
                            >
                                Enquire Now →
                            </a>
                        </div>

                    </div>

                </div>

                {/* ── BOTTOM BAR ── */}
                <div className="ft-bottom">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

                        <p style={{ margin: 0, color: "rgba(255,255,255,.40)", fontSize: ".80rem" }}>
                            © {new Date().getFullYear()} SKB Training Institute. All rights reserved. &nbsp;·&nbsp; Website Developed by{" "}
                            <a href="#" style={{ color: "#6b9fff", textDecoration: "none", fontWeight: 600 }}>
                                Seyon Tech Digital Media Solutions
                            </a>
                        </p>

                        <p className="ft-tagline">Empowering Educators. Enriching Lives.</p>

                    </div>
                </div>

            </div>
        </footer>
    )
}