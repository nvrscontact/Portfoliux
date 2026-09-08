import './styles/App.css'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Expertise from './components/Expertise/Expertise'
import Languages from './components/languages/Languages'
import SvetlaneProject from './components/SvetlaneProject/SvetlaneProject'
import Experience from './components/experience/Experience'
import Certifications from './components/certifications/Certifications'
import RestaurantMockup from './components/RestaurantMockup/RestaurantMockup'
import RestaurantFeatures from './components/RestaurantFeatures/RestaurantFeatures'

function App() {


  return (
    <>
      <Navbar />

      <section>
        <Hero />

        <section className='homepage-two-columns'>
          <Expertise />
          <About />
        </section>

        <section className='homepage-two-columns'>
          <SvetlaneProject />
          <Languages />
        </section>

        <section className='homepage-two-columns'>
          <Certifications />
          <Experience />
        </section>

        <section className='homepage-two-columns'>
          <RestaurantFeatures/>
          <RestaurantMockup />
        </section>

      </section>
      <Footer />
    </>
  )
}

export default App
