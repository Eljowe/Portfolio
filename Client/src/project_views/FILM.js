import setup from '../images/FILM/film_setup.jpg'
import React from 'react'
import ProjectsNavbar from '../components/ProjectsNavbar'
import Backbutton from '../components/Backbutton'
import BurgerNavbar from '../components/BurgerNavbar'

const FILM = ({ toggleTheme, theme, projectScrolled, toggleMenu }) => {
    return(
        <div>
            <ProjectsNavbar toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled} toggleMenu={toggleMenu}/>
            <div className='projectdiv'>
                <Backbutton />
                <h3>Film photography, developing and scanning</h3>
                <h4 className="documentation_subtitle">Introduction</h4>
                <p>
                    A few years ago I bought a film camera in an auction for 8 euros.
                    That camera was awful. It was heavy and bulky, and its light meter didn't work.
                    Shooting with it, however, had a certain charm, and I found myself carrying it around in my bag like a brick.
                </p>
                <p>
                    After shooting film for a few years, I grew tired with having to take the film rolls into a shop where they would be developed and waiting a few days until I got to fetch the pictures back.
                </p>
                <p>
                    I started looking into film developing at home. The process seemed simple enough to follow through.
                    I got the necessary chemicals and tools.
                </p>
                <img className="FILMimg" src={setup} alt="2048 game"/>
                <p>
                    After developing my first roll, I realized I needed to do the scanning by myself too.
                    This resulted in long and still ongoing pursuit to 1) scan the negative and 2) to edit the positives to display colors as purely as possible.
                </p>
                <h1 className="unfinished">To be continued...</h1>
                <Backbutton />
            </div>
        </div>
    )
}

export default FILM