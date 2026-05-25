import { stats } from '../data'
import { useEffect, useRef, useState } from 'react'
import {
  FaUserGraduate,
  FaBriefcase,
  FaSmile,
  FaChalkboardTeacher,
} from 'react-icons/fa'

/* Map each stat to an icon — adjust order to match your data array */
const ICONS = [FaUserGraduate, FaBriefcase, FaSmile, FaChalkboardTeacher]

/* Animated counter hook */
function useCounter(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const numeric = parseInt(String(target).replace(/\D/g, ''), 10)
    if (!numeric) { setCount(target); return }
    const suffix = String(target).replace(/[0-9]/g, '')
    let start = 0
    const step = numeric / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= numeric) { clearInterval(timer); setCount(String(numeric) + suffix) }
      else setCount(String(Math.floor(start)) + suffix)
    }, 16)
    return () => clearInterval(timer)
  }, [active])
  return count
}

function StatCard({ num, label, Icon, index, active }) {
  const displayed = useCounter(num, 1600, active)
  return (
    <div className="s-card" style={{ animationDelay: `${index * 0.12}s` }}>
      {/* Top shimmer line */}
      <div className="s-shimmer" />

      {/* Icon circle */}
      <div className="s-icon-wrap">
        <Icon className="s-icon" />
      </div>

      {/* Number */}
      <div className="s-num">{active ? displayed : '0'}</div>

      {/* Label */}
      <div className="s-lbl">{label}</div>

      {/* Hover glow */}
      <div className="s-glow" />
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="stats"
      ref={ref}
      className="position-relative overflow-hidden"
      style={{ background: "#03071a", padding: "clamp(64px, 10vw, 100px) 0" }}
    >

      {/* ── BACKGROUND GRID ── */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          pointerEvents: "none",
        }}
      />

      {/* ── CENTER GLOW ── */}
      <div
        className="position-absolute"
        style={{
          width: "min(700px, 90vw)", height: "min(300px, 40vh)",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          background: "radial-gradient(ellipse,rgba(60,97,200,0.13) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <style>{`
        /* Section heading */
        .s-eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          padding:6px 20px;border-radius:999px;
          border:1px solid rgba(96,140,255,.30);
          background:rgba(60,97,200,.12);
          color:#a0bcff;font-size:clamp(.72rem,1.2vw,.78rem);font-weight:700;
          letter-spacing:.10em;text-transform:uppercase;margin-bottom:14px;
        }
        .s-heading{
          font-size:clamp(1.6rem,4.5vw,2.6rem);
          font-weight:800;line-height:1.12;letter-spacing:-1px;
          background:linear-gradient(115deg,#fff 25%,#7eaaff 65%,#c2d6ff 100%);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
          margin:0;
        }
        .s-sub{
          color:rgba(255,255,255,.45);
          font-size:clamp(.84rem,1.1vw,.98rem);
          line-height:1.75;max-width:min(460px,92vw);margin:0 auto;
          padding:0 12px;
        }

        /* Cards */
        @keyframes sCardIn{
          from{opacity:0;transform:translateY(30px);}
          to{opacity:1;transform:translateY(0);}
        }
        .s-card{
          position:relative;overflow:hidden;
          background:linear-gradient(155deg,rgba(255,255,255,.07) 0%,rgba(255,255,255,.02) 100%);
          border:1px solid rgba(255,255,255,.10);
          border-radius:clamp(16px,2vw,22px);
          padding:clamp(24px,4vw,36px) clamp(14px,2vw,20px) clamp(22px,3.5vw,32px);
          text-align:center;
          backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
          opacity:0;animation:sCardIn .65s cubic-bezier(.22,.68,0,1.12) forwards;
          transition:transform .24s ease,border-color .24s ease,box-shadow .24s ease;
          cursor:default;
          height:100%;
        }
        .s-card:hover{
          transform:translateY(-8px);
          border-color:rgba(96,140,255,.38);
          box-shadow:0 20px 48px rgba(60,97,200,.22);
        }
        .s-card:hover .s-glow{opacity:1;}

        /* Shimmer top border */
        .s-shimmer{
          position:absolute;top:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,transparent,rgba(100,148,255,.9),transparent);
        }

        /* Hover glow blob */
        .s-glow{
          position:absolute;bottom:-40px;left:50%;transform:translateX(-50%);
          width:120px;height:80px;border-radius:50%;
          background:radial-gradient(circle,rgba(60,97,200,.45) 0%,transparent 70%);
          opacity:0;transition:opacity .3s ease;pointer-events:none;
        }

        /* Icon */
        .s-icon-wrap{
          width:clamp(46px,8vw,52px);height:clamp(46px,8vw,52px);border-radius:14px;
          background:rgba(60,97,200,.22);
          border:1px solid rgba(96,140,255,.25);
          display:inline-flex;align-items:center;justify-content:center;
          margin-bottom:clamp(12px,2vw,18px);
          transition:background .22s,border-color .22s,transform .22s ease;
        }
        .s-card:hover .s-icon-wrap{
          background:rgba(60,97,200,.38);
          border-color:rgba(96,140,255,.45);
          transform:scale(1.05);
        }
        .s-icon{font-size:clamp(1.1rem,2vw,1.3rem);color:#7eaaff;}

        /* Number */
        .s-num{
          font-size:clamp(1.75rem,5vw,3rem);
          font-weight:900;color:#ffffff;
          line-height:1;letter-spacing:-1.5px;
          margin-bottom:8px;
          transition:color .2s;
        }
        .s-card:hover .s-num{color:#a8c8ff;}

        /* Label */
        .s-lbl{
          color:rgba(255,255,255,.48);
          font-size:clamp(.65rem,1.2vw,.72rem);font-weight:600;
          letter-spacing:.08em;text-transform:uppercase;
          line-height:1.45;
          padding:0 4px;
        }

        /* Divider */
        .s-divider{
          width:clamp(40px,8vw,48px);height:2px;border-radius:2px;margin:0 auto 14px;
          background:linear-gradient(90deg,#3c61c8,rgba(60,97,200,0));
        }
      `}</style>

      <div className="container position-relative">

        {/* SECTION HEADER */}
       {/* <div className="text-center mb-4 mb-md-5 px-2">
          <div className="s-eyebrow">Our Impact in Numbers</div>
          <h2 className="s-heading mb-3">Why Students Choose SKB</h2>
          <div className="s-divider" />
          <p className="s-sub">
            Decades of commitment to quality education, measurable outcomes,
            and careers that last a lifetime.
          </p>
        </div> */}

        {/* STAT CARDS GRID */}
        <div className="row g-3 g-md-4 justify-content-center">
          {stats.map(([n, l], i) => {
            const Icon = ICONS[i] || FaUserGraduate
            return (
              <div key={l} className="col-6 col-md-3">
                <StatCard num={n} label={l} Icon={Icon} index={i} active={active} />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
