import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import HeroParagraph from './components/HeroParagraph'
import Languages from './components/Languages'
import Navbar from './components/Navbar'
import ProjectsCards from './components/ProjectsCard'
import Services from './components/Services'
import ButtonsTop from './components/subcomponents/ButtonsTop'
import Technologies from './components/Technologies'
import Text from './components/Text'

function App() {

  /* 
    technologies - parrafo - about 
    languages - projectos - services


    orden normal:
    parrafo
    projectscards
    commintment
    languages
    technologies
    focus
    about
    services
    */


  return (
    <>
      <Navbar />
      <ButtonsTop title1={"Frontend Development"} title2={"Visual Prototypes"} title3={"Using UX / UI Techniques"} />
      <section id="grid" className='contenedor'>

        <section className='one_sec'>
          <Technologies />
          <Languages />
        </section>

        <section className='two_sec'>
          <HeroParagraph />
          <ProjectsCards />
        </section>

        <section className='three_sec'>
          <About />
          <Services />
        </section>

        <section className='special_phrases commitment_order'><Text title={"Commitment"} /></section>
        <section className='special_phrases focus_order'><Text title={"Focus"} /></section>

      </section>
      <Footer />
    </>
  )
}

export default App
