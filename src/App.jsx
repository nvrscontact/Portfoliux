

import About from './components/About/About'
import Footer from './components/Sections/Footer/Footer'
import Hero from './components/Sections/Hero/Hero'
import Navbar from './components/Sections/Navbar/Navbar'
import Expertise from './components/Expertise/Expertise'
import Languages from './components/Languages/Languages'
import SvetlaneProject from './components/SvetlaneProject/SvetlaneProject'
import Experience from './components/Experience/Experience'
import Certifications from './components/Certifications/Certifications'
import RestaurantMockup from './components/RestaurantMockup/RestaurantMockup'
import RestaurantFeatures from './components/RestaurantFeatures/RestaurantFeatures'


import styles from './Base.module.css'

function App() {


  return (
    <>
      <Navbar />

      <section>
        <Hero />

        <section className={styles.twoColumns}>
          <Expertise />
          <About />
        </section>

        <section className={styles.twoColumns}>
          <SvetlaneProject />
          <Languages />
        </section>

        <section className={styles.twoColumns}>
          <Certifications />
          <Experience />
        </section>

        <section className={styles.twoColumns}>
          <RestaurantFeatures/>
          <RestaurantMockup />
        </section>

      </section>
      <Footer />
    </>
  )
}

export default App
