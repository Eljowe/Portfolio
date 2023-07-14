import React from 'react'
import ProjectsNavbar from '../components/ProjectsNavbar'
import Backbutton from '../components/Backbutton'
import BurgerNavbar from '../components/BurgerNavbar'

//template for new project views
const TAPIO = ({ toggleTheme, theme, projectScrolled, toggleMenu }) => {
    return(
        <div>
            <ProjectsNavbar toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled} toggleMenu={toggleMenu}/>
            <div className='projectdiv'>
                <Backbutton />
                <h3>ToTe/Tapio website</h3>
                <p>
                    The website in question can be found <a className="link_in_text" href='https://totetapio.com' target='_blank' rel='noreferrer'>here</a>.
                </p>
                <p>
                    I wanted to practice my frontend design skills and to try some new technologies.
                    I came up with an idea to design a website for my sunday league football team.
                </p>
                <Backbutton />
            </div>
        </div>
    )
}

export default TAPIO