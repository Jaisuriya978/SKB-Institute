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
        icon: <FaInstagram size={22} />,
        link: "https://www.instagram.com/skbtraininginstitute/",
    },
    {
        name: "Facebook",
        icon: <FaFacebookF size={22} />,
        link: "https://www.facebook.com/skbtraininginstitute/",
    },
    {
        name: "YouTube",
        icon: <FaYoutube size={22} />,
        link: "https://www.youtube.com/@skbtraininginstitute",
    },
    {
        name: "WhatsApp",
        icon: <FaWhatsapp size={22} />,
        link: "https://wa.me/919597686903",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedinIn size={22} />,
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
                            <span className="font-serif fs-5">SKB <span className="text-light-soft fs-6">Montessori Training Institute</span></span></div>
                        <p className="font-serif fs-2 mt-4 mb-3"><span className="italic text-terracotta" style={{gap: '2px'}}>Dream. Learn. Achieve.</span></p>
                        <p style={{ color: 'rgba(255,255,255,.7)', maxWidth:'400px' }}>Your trusted growth partner in building a successful transformation journey toward becoming a qualified educator.</p>
                    </div>
                    <div className="col-md-3">

                        <p className="eyebrow text-center text-md-start">
                            Quick Links
                        </p>

                        <ul
                            className="list-unstyled mt-4 d-grid gap-4"
                            style={{
                                gridTemplateColumns:
                                    window.innerWidth < 576
                                        ? "1fr"
                                        : "repeat(2, 1fr)",
                            }}
                        >

                            {links.map((l) => (
                                <li
                                    key={l.name}
                                    className="text-center text-md-start"
                                >

                                    <a
                                        href={l.path}
                                        className="text-decoration-none"
                                        style={{
                                            color: "rgba(255,255,255,.85)",
                                            fontSize: "1.125rem",
                                            transition: "all .3s ease",
                                            display: "inline-block",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = "#5a78ff";
                                            e.currentTarget.style.transform =
                                                "translateX(4px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color =
                                                "rgba(255,255,255,.85)";
                                            e.currentTarget.style.transform =
                                                "translateX(0)";
                                        }}
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
                        <div className="row row-cols-3 row-cols-sm-5 g-3 mt-4">

                            {socialLinks.map((link) => (
                                <div key={link.name} className="col">

                                    <a
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none"
                                    >

                                        <div
                                            className="d-flex align-items-center justify-content-center rounded-pill border border-light border-opacity-25 mx-auto"
                                            style={{
                                                width: "100%",
                                                height: "52px",
                                                maxWidth: "72px",
                                                color: "#fff",
                                                transition: "all 0.3s ease",
                                                backgroundColor: "transparent",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = "translateY(-4px)";
                                                e.currentTarget.style.backgroundColor = "#3c61c8";
                                                e.currentTarget.style.boxShadow =
                                                    "0 10px 24px rgba(0,0,0,0.18)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.backgroundColor = "transparent";
                                                e.currentTarget.style.boxShadow = "none";
                                            }}
                                        >
                                            {link.icon}
                                        </div>

                                    </a>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div
                    className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mt-5 pt-4 border-top small"
                    style={{
                        borderColor: "rgba(255,255,255,.15)",
                        color: "rgba(255,255,255,.6)",
                    }}
                >

                    <div className="text-center text-md-start">
                        <p className="mb-1">
                            © {new Date().getFullYear()} SKB Montessori Training Institute.
                            All rights reserved.
                        </p>

                        <p
                            className="mb-0"
                            style={{
                                fontSize: "13px",
                                color: "rgba(255,255,255,.45)",
                            }}
                        >
                            Website crafted by{" "}

                            <a
                                href="#"
                                style={{
                                    color: "#5a78ff",
                                    textDecoration: "none",
                                    fontWeight: 500,
                                }}
                            >
                                Seyon Tech Digital Media Solutions
                            </a>

                        </p>
                    </div>

                    <p
                        className="mb-0 italic font-serif text-center text-md-end"
                        style={{
                            color: "rgba(255,255,255,.72)",
                        }}
                    >
                        Empowering Educators. Enriching Lives.
                    </p>

                </div>
            </div>
        </footer>
    )
}