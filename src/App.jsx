import './styles/App.css'
import About from './components/about/About'
import Projects from './components/Projects'
import Text from './components/Text'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Technologies from './components/technologies/Technologies'
import Languages from './components/languages/Languages'
import Mockup from './components/mockup/Mockup'
import Experience from './components/experience/Experience'
import Certifications from './components/certifications/Certifications'

function App() {


  return (
    <>
      <Navbar />
      
      <section>
        <Hero />
        <Projects />

        <section className='homepage-two-columns'>
          <Technologies />
          <About />
        </section>

        <section className='homepage-two-columns'>
          <Mockup/>
          <Languages />
        </section>

        <section className='homepage-two-columns'>

          <Certifications />
          <Experience />
        </section>

        <section className='special_phrases commitment_order'><Text title={"Commitment"} /></section>
        <section className='special_phrases focus_order'><Text title={"Focus"} /></section>

      </section>
      <Footer />
    </>
  )
}

export default App
