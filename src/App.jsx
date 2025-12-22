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
     <Navbar/>
     <ButtonsTop title1={"Frontend Development"} title2={"Visual Prototypes"} title3={"Using UX / UI Techniques"} />
     <HeroParagraph/>
     <ProjectsCards/>
     <Text title={"Commintment"}/>
     <Languages/>
     <Technologies/>
     <About/>
     <Services/>
     <Footer/>
    </>
  )
}

export default App
