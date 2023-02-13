import React from 'react'
import Sphere3D from '../components/Sphere3D'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Resume from '../sections/Resume'
import Navbar from '../components/Navbar'


const Home = ({ toggleTheme, theme, isScrolled }) => {
    return (
        <div className='pagecontainer'>
            <Navbar toggleTheme={toggleTheme} theme={theme} isScrolled={isScrolled}/>
            <div id='home'>
                <div className='HomeTitle'>
                    <h1>Portfolio</h1>
                    <h1>Joel Wickström</h1>
                </div>
                <div className='Home3D'>
                    <Sphere3D />
                </div>
            </div>
            <About />
            <Projects />
            <Resume />
        </div>
    )
}

export default Home