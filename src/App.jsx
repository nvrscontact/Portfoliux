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

  return (
    <>
      <Navbar />
      <ButtonsTop title1={"Frontend Development"} title2={"Visual Prototypes"} title3={"Using UX / UI Techniques"} />
      <section id="grid">

        <HeroParagraph />
        <ProjectsCards />
        <section className='special_phrases'><Text title={"Commitment"} /></section>
        <Languages />
        <Technologies />
        <section className='special_phrases'><Text title={"Focus"} /></section>
        <About />
        <Services />

      </section>
      <Footer />
    </>
  )
}

export default App
