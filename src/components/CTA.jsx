import portraitImg from '../assets/Image4.jpg'

export default function CTA() {
  return (
   <section id="apply" className="section bg-ink">
         <div className="container">
           <div className="row g-5 align-items-center">
             <div className="col-lg-7">
               <p className="eyebrow">Begin Your Journey</p>
               <h2 className="font-serif display-4 mt-3">
                 Begin your journey toward a <span className="italic text-terracotta">rewarding teaching career</span>.
               </h2>
               <p className="mt-4 fs-5" style={{ color: 'rgba(255,255,255,.75)' }}>
                 Become a confident educator with professional training, practical skills, and career guidance from SKB Montessori Training Institute.
               </p>
               <div className="mt-4 d-flex flex-wrap gap-2">
                 <a href="#contact" className="btn btn-primary">Enroll Today</a>
                 <a href="#contact" className="btn btn-outline-light rounded-pill px-4">Talk to Our Team</a>
                 <a href="#contact" className="btn btn-light rounded-pill px-4">Apply Now</a>
               </div>
             </div>
             <div className="col-lg-5">
               <img src={portraitImg} alt="SKB student" loading="lazy" className="rounded-4 w-100" style={{ height: 460, objectFit: 'cover' }} />
             </div>
           </div>
         </div>
       </section>
  )
}