import './styles/App.css'
import About from './components/About'
import Footer from './components/layout/Footer'
import Hero from './components/layout/Hero'
import Languages from './components/Languages'
import Navbar from './components/layout/Navbar'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import ButtonsTop from './components/subcomponents/ButtonsTop'
import Technologies from './components/Technologies'
import Text from './components/Text'

function App() {


  return (
    <>
      <Navbar />
      <ButtonsTop title1={"Frontend Development"} title2={"UX / UI Techniques"} title3={"Backend Development"} />
      <section>


        <Hero />
        <Projects />

        <section className='homepage-two-columns'>
          <Technologies />
        </section>

        <section className='homepage-two-columns'>
        <div></div>
        <About />
        </section>

        <section className='homepage-two-columns'>

          <Languages />
          <div></div>

        </section>

        <section className='homepage-two-columns'>

          <div></div>
          <Experience />
        </section>

        <section className='homepage-two-columns'>

          <Certifications />
          <div></div>
        </section>

        <section className='special_phrases commitment_order'><Text title={"Commitment"} /></section>
        <section className='special_phrases focus_order'><Text title={"Focus"} /></section>

      </section>
      <Footer />
    </>
  )
}

export default App
