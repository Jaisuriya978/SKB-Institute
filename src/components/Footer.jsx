import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaWhatsapp,
    FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
    {
        name: "Instagram",
        icon: <FaInstagram size={26} />,
        link: "https://www.instagram.com/skbtraininginstitute/",
    },
    {
        name: "Facebook",
        icon: <FaFacebookF size={26} />,
        link: "https://www.facebook.com/skbtraininginstitute/",
    },
    {
        name: "YouTube",
        icon: <FaYoutube size={26} />,
        link: "https://www.youtube.com/@skbtraininginstitute",
    },
    {
        name: "WhatsApp",
        icon: <FaWhatsapp size={26} />,
        link: "https://wa.me/919597686903",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedinIn size={26} />,
        link: "https://www.linkedin.com/in/skbtraininginstitute/",
    },
];

const links = [
    { name: "Home", path: "#top" },
    { name: "About", path: "#about" },
    { name: "Courses", path: "#courses" },
    { name: "Process", path: "#process" },
    { name: "Contact", path: "#contact" },
];

export default function Footer() {
    return (
        <footer className="bg-ink pt-5 pb-4">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-5">
                        <div className="d-flex align-items-center gap-2"><img
                            src="https://tse3.mm.bing.net/th/id/OIP.hu1XnFAnUBoNt83CF-RXgQAAAA?pid=Api&P=0&h=180"
                            alt="SKB Montessori Logo"
                            className="navbar-logo"
                        />
                            <span className="font-serif fs-5">SKB <span className="text-muted-soft fs-6">Montessori Training Institute</span></span></div>
                        <p className="font-serif fs-3 mt-4 mb-3">Dream it. Learn it. <span className="italic text-terracotta">Achieve it with SKB.</span></p>
                        <p style={{ color: 'rgba(255,255,255,.7)' }}>Your trusted growth partner in building a successful transformation journey toward becoming a qualified educator.</p>
                    </div>
                    <div className="col-md-3">
                        <p className="eyebrow">Quick Links</p>
                        <ul className="list-unstyled mt-3">
                            {links.map((l) => (
                                <li key={l.name} className="mb-2">
                                    <a
                                        href={l.path}
                                        className="text-decoration-none"
                                        style={{ color: "rgba(255,255,255,.85)" }}
                                    >
                                        {l.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <p className="eyebrow">Follow us</p>
                        <p className="mt-3" style={{ color: 'rgba(255,255,255,.85)' }}>Follow us for updates, admissions, workshops, and student success stories.</p>
                        <div className="d-flex flex-wrap gap-2 mt-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm rounded-pill px-3 border border-light border-opacity-25 text-white shadow-sm transition"
                                    onMouseEnter={(e) => {
                                        e.currentTarget.classList.remove("bg-transparent");
                                        e.currentTarget.classList.add("bg-dark", "text-dark");
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.classList.remove("bg-light", "text-dark");
                                        e.currentTarget.classList.add("bg-transparent");
                                    }}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 mt-5 pt-4 border-top small" style={{ borderColor: 'rgba(255,255,255,.15) !important', color: 'rgba(255,255,255,.6)' }}>
                    <p className="mb-0">© {new Date().getFullYear()} SKB Montessori Training Institute. All rights reserved.</p>
                    <p className="mb-0 italic font-serif">Empowering Educators. Enriching Lives.</p>
                </div>
            </div>
        </footer>
    )
}