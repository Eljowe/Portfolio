import React from 'react'
import ProjectsNavbar from '../components/ProjectsNavbar'
import Backbutton from '../components/Backbutton'
import BurgerNavbar from '../components/BurgerNavbar'


const KALLIO = ({ toggleTheme, theme, projectScrolled, toggleMenu }) => {
    return(
        <div>
            <ProjectsNavbar toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled} toggleMenu={toggleMenu}/>
            <div className='projectdiv'>
                <Backbutton />
                <h3>Kalliokierrokselle.fi</h3>
                <p>
                    The website in question can be found <a className="link_in_text" href='https://kalliokierrokselle.fi' target='_blank' rel='noreferrer'>here</a>.
                </p>
                <p>
                    I wanted to create a fullstack app with Next.js and firebase auth and db. I got the idea from my friend who used an application to check the gas prices.
                </p>
                <p>
                    Both, this article and the website itself are still in progress. Currently, the website lacks, in my opinion, in visual looks aswell as in optimization and functionality.
                </p>
                <Backbutton />
            </div>
        </div>
    )
}

export default KALLIO