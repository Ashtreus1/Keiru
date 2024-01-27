import React from 'react'
import Background from './Background'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'
import NavBar from './component/NavBar'


const Home = () => {
  return (
    <>  
        <Background>
            <HeroSection/>
            
            <NavBar/>
            <Footer/>
            
        </Background>
    </>
  )
}

export default Home