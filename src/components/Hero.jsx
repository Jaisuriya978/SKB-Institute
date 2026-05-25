import heroImg from '../assets/Image5.JPG'
import { stats } from '../data'
import { FaCheckCircle, FaGraduationCap, FaArrowRight } from "react-icons/fa"
import RocketGif from '../assets/rocket.gif'

export default function Hero() {

  const highlights = [
    "Experienced Faculty",
    "Online & Offline Classes",
    "Internship Opportunities",
    "Career Guidance",
    "Recognized Programs",
    "Hands on Training",
  ]

  return (
    <section
      id="top"
      className="position-relative overflow-hidden"
      style={{
        minHeight: "100vh",
        height: "auto",
        maxHeight: "none",
        paddingTop: "clamp(88px, 12vh, 120px)",
        paddingBottom: "clamp(32px, 5vh, 48px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >

      {/* BG IMAGE */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <img
          src={heroImg}
          alt=""
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center 20%",
            display: "block",
          }}
        />
      </div>

      {/* GRADIENT OVERLAY */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(105deg,rgba(3,7,22,0.97) 0%,rgba(3,7,22,0.91) 38%,rgba(3,7,22,0.58) 62%,rgba(3,7,22,0.12) 100%)",
          zIndex: 1,
        }}
      />

      {/* Mobile — stronger overlay for readability */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-md-none"
        style={{
          background: "linear-gradient(180deg, rgba(3,7,22,0.55) 0%, rgba(3,7,22,0.88) 70%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* BOTTOM FADE */}
      <div
        className="position-absolute bottom-0 start-0 w-100"
        style={{
          height: "180px",
          background: "linear-gradient(to bottom, transparent, rgba(3,7,22,0.55))",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* GRID TEXTURE */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          zIndex: 2, pointerEvents: "none",
        }}
      />

      {/* CORNER GLOW */}
      <div
        className="position-absolute"
        style={{
          width: "clamp(280px, 40vw, 460px)",
          height: "clamp(280px, 40vw, 460px)",
          top: "-130px", left: "-130px", borderRadius: "50%",
          background: "radial-gradient(circle,rgba(60,97,200,0.22) 0%,transparent 68%)",
          zIndex: 2, pointerEvents: "none",
        }}
      />

      {/* ROCKET */}
      <img
        src={RocketGif}
        alt="Rocket"
        className="d-none d-md-block"
        style={{
          position: "absolute",
          width: "clamp(64px, 6vw, 92px)",
          right: "4%", top: "12%", zIndex: 5,
          animation: "rocketFloat 3.5s ease-in-out infinite",
          pointerEvents: "none",
          mixBlendMode: "screen",
          filter: "drop-shadow(0 0 20px rgba(60,97,200,0.55))",
        }}
      />

      {/* STYLES */}
      <style>{`
        @keyframes rocketFloat {
          0%,100%{transform:translateY(0) rotate(-6deg);}
          50%{transform:translateY(-18px) rotate(5deg);}
        }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(22px);}
          to{opacity:1;transform:translateY(0);}
        }
        .ha{opacity:0;animation:fadeUp .72s cubic-bezier(.22,.68,0,1.12) forwards;}
        .ha1{animation-delay:.06s;} .ha2{animation-delay:.18s;}
        .ha3{animation-delay:.30s;} .ha4{animation-delay:.42s;}
        .ha5{animation-delay:.54s;} .ha6{animation-delay:.66s;}

        .h-badge{
          display:inline-flex;align-items:center;gap:8px;
          padding:6px 18px;border-radius:999px;
          border:1px solid rgba(96,140,255,0.38);
          background:rgba(60,97,200,0.16);
          color:#aac2ff;font-size:clamp(.70rem,.75vw,.80rem);font-weight:700;
          letter-spacing:.09em;text-transform:uppercase;
        }

        .h-accent-bar{
          width:3px;height:clamp(28px,4vw,36px);flex-shrink:0;border-radius:3px;
          background:linear-gradient(180deg,#4a72e8 0%,transparent 100%);
        }
        .h-tagline{
          margin:0;color:rgba(255,255,255,.42);
          font-size:clamp(.65rem,.70vw,.76rem);
          font-weight:600;letter-spacing:.12em;text-transform:uppercase;
        }

        .h-title{
          font-size:clamp(1.85rem,5.5vw,3.6rem);
          font-weight:900;line-height:1.1;letter-spacing:-1.5px;margin:0;
          background:linear-gradient(118deg,#ffffff 20%,#7eaaff 58%,#c2d6ff 100%);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
        }

        .h-sub{
          color:rgba(255,255,255,.58);
          font-size:clamp(.88rem,1.2vw,.96rem);
          line-height:1.75;max-width:min(440px,100%);margin:0;
        }

        .h-pill{
          display:inline-flex;align-items:center;gap:6px;
          padding:5px 12px;border-radius:999px;
          background:rgba(255,255,255,.055);
          border:1px solid rgba(255,255,255,.10);
          color:rgba(255,255,255,.75);
          font-size:clamp(.68rem,.72vw,.76rem);font-weight:500;
          transition:background .18s,border-color .18s;cursor:default;
        }
        .h-pill:hover{background:rgba(60,97,200,.26);border-color:rgba(96,140,255,.40);}

        .h-btn-solid{
          display:inline-flex;align-items:center;justify-content:center;gap:9px;
          padding:clamp(11px,1.1vw,13px) clamp(20px,2vw,30px);
          border-radius:12px;
          background:linear-gradient(135deg,#3c61c8 0%,#2740a0 100%);
          color:#fff;border:none;
          font-size:clamp(.84rem,.88vw,.92rem);font-weight:700;
          text-decoration:none;letter-spacing:.015em;
          box-shadow:0 7px 24px rgba(60,97,200,.48);
          transition:transform .2s ease,box-shadow .2s ease;
        }
        .h-btn-solid:hover{transform:translateY(-3px);box-shadow:0 13px 32px rgba(60,97,200,.65);color:#fff;}

        .h-btn-outline{
          display:inline-flex;align-items:center;justify-content:center;gap:9px;
          padding:clamp(11px,1.1vw,13px) clamp(20px,2vw,30px);
          border-radius:12px;
          background:rgba(255,255,255,.055);
          color:#fff;border:1.5px solid rgba(255,255,255,.26);
          font-size:clamp(.84rem,.88vw,.92rem);font-weight:700;
          text-decoration:none;letter-spacing:.015em;
          backdrop-filter:blur(6px);
          transition:transform .2s ease,border-color .2s ease,background .2s ease;
        }
        .h-btn-outline:hover{transform:translateY(-3px);border-color:rgba(255,255,255,.52);background:rgba(255,255,255,.11);color:#fff;}

        .h-trust{
          color:rgba(255,255,255,.40);
          font-size:clamp(.68rem,.72vw,.76rem);
          font-weight:500;margin:0;
        }

        .h-stat{
          background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.10);
          border-radius:14px;
          padding:clamp(12px,1.5vw,20px) clamp(10px,1vw,14px);
          text-align:center;
          backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
          position:relative;overflow:hidden;
          transition:transform .22s ease,border-color .22s ease,background .22s ease;
        }
        .h-stat::before{
          content:"";position:absolute;top:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,transparent,rgba(100,148,255,.85),transparent);
        }
        .h-stat:hover{transform:translateY(-5px);border-color:rgba(96,140,255,.36);background:rgba(60,97,200,.22);}

        .h-stat-num{
          font-size:clamp(1.35rem,4vw,2.4rem);
          font-weight:800;color:#fff;line-height:1;letter-spacing:-1px;
        }
        .h-stat-lbl{
          color:rgba(255,255,255,.48);margin-top:6px;
          font-size:clamp(.58rem,.65vw,.70rem);
          font-weight:600;letter-spacing:.06em;text-transform:uppercase;line-height:1.4;
        }

        @media (max-width: 575.98px) {
          .h-cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .h-cta-row .h-btn-solid,
          .h-cta-row .h-btn-outline {
            width: 100%;
          }
        }
      `}</style>

      {/* CONTENT */}
      <div className="container position-relative" style={{ zIndex: 3 }}>

        <div className="row">
          <div className="col-lg-7 col-xl-6">

            <div className="mb-3 ha ha1">
              <span className="h-badge">
                <FaGraduationCap />Admissions Open 2026
              </span>
            </div>

            <div className="d-flex align-items-center gap-3 mb-3 ha ha2">
              <span className="h-accent-bar" />
              <p className="h-tagline">SKB Montessori Training Institute</p>
            </div>

            <h1 className="h-title ha ha3">
              Building Skills,<br />Shaping Futures
            </h1>

            <p className="h-sub mt-3 ha ha4">
              Expert-led programmes in early-childhood education — designed to
              launch confident, career-ready Montessori teachers.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-3 ha ha4">
              {highlights.map((h) => (
                <span key={h} className="h-pill">
                  <FaCheckCircle style={{ color: "#6b9fff", fontSize: ".68rem" }} />
                  {h}
                </span>
              ))}
            </div>

            <div className="d-flex flex-wrap gap-3 mt-4 ha ha5 h-cta-row">
              <a href="#courses" className="h-btn-solid">
                Explore Courses <FaArrowRight style={{ fontSize: ".80rem" }} />
              </a>
              <a href="#contact" className="h-btn-outline">
                Admission Enquiry
              </a>
            </div>

            <div className="d-flex flex-wrap align-items-center gap-2 mt-3 ha ha6">
              <span style={{ color: "#fbbf24", fontSize: "clamp(.78rem,.82vw,.82rem)", letterSpacing: "1px" }}>
                ★★★★★
              </span>
              <p className="h-trust mb-0">Trusted by 300+ students across Tamil Nadu</p>
            </div>

          </div>
        </div>

        {/* STATS ROW */}
        {/*<div className="row g-2 g-sm-3 ha ha6" style={{ marginTop: "clamp(24px, 4vw, 40px)" }}>
          {stats.map(([n, l]) => (
            <div key={l} className="col-6 col-sm-3">
              <div className="h-stat">
                <div className="h-stat-num">{n}</div>
                <div className="h-stat-lbl">{l}</div>
              </div>
            </div>
          ))}
        </div>*/}

      </div>
    </section>
  )
}
