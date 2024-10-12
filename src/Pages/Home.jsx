import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import First from '../Components/First'
import Projects from '../Components/Projects'
import Second from '../Components/Second'
import Third from '../Components/Third'
import Skills from '../Components/Skills'
import Contact from '../Components/Contact'
import CertificatesSection from '../Components/CertificatesSection'

const Home = () => {
  useEffect(() => {
    document.title = 'Developer Madhu Portfolio'
  }, [])
  
  return (
    <div>
        <Navbar />
        <First />
        <br />
        <Second />
        <br />
        <Projects />
        <br />
        <Third />
        <br />
        <Skills />
        <br />
        <CertificatesSection />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home