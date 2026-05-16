import heroImg from '../assets/image1.png'
import materialsImg from '../assets/image2.png'
import portraitImg from '../assets/image3.png'
import classroomImg1 from '../assets/image5.png'
import classroomImg from '../assets/image4.png'
import SectionHeader from './SectionHeader'

export default function Gallery() {
 const imgs = [
     { src: classroomImg1, alt: 'Students in classroom', tall: true },
     { src: materialsImg, alt: 'Montessori materials' },
     { src: portraitImg, alt: 'SKB graduate portrait' },
     { src: heroImg, alt: 'Teacher with children' },
     { src: classroomImg, alt: 'Classroom session' },
   ]
   return (
     <section className="section bg-cream">
       <div className="container">
         <SectionHeader eyebrow="Gallery" title="Moments of learning & achievement."
           intro="Student activities, classroom sessions, workshops, practical training, and graduation moments that reflect the SKB experience." />
         <div className="row g-3">
           <div className="col-12 col-lg-6"><img src={imgs[0].src} alt={imgs[0].alt} className="gallery-img tall" loading="lazy" /></div>
           <div className="col-lg-6">
             <div className="row g-3">
               {imgs.slice(1).map(im => (
                 <div className="col-6" key={im.alt}><img src={im.src} alt={im.alt} className="gallery-img" loading="lazy" /></div>
               ))}
             </div>
           </div>
         </div>
       </div>
     </section>
   )
}