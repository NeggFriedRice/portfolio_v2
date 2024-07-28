
import './index.css'
import Navbar from './components/Navbar'
import Bio from './components/Bio'
import Stack from './components/Stack'
import About from './components/About'
import Projects from './components/Projects'
import StickyBox from "react-sticky-box"
import Socials from './components/Socials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {

  return (
    <>
      <Navbar />
      <StickyBox offsetTop={60} offsetBottom={60} className="sticky-box">
        <Socials />
      </StickyBox>
      <Bio />
      <Stack />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
