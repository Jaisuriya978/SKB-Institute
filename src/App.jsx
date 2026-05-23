import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import WhySKB from './components/WhySKB'
import Features from './components/Features'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import stats from './components/stats'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <stats/>
      <About />
      <Courses />
      <WhySKB />
      <Features />
      <Process />
      <Gallery />
      <Testimonials />

      <FAQ />
      <CTA />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  )
}