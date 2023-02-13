import React from 'react'
import ProjectsNavbar from '../components/ProjectsNavbar'
import Backbutton from '../components/Backbutton'

const WEBSITE = ({ toggleTheme, theme, projectScrolled }) => {
    return(
        <div>
            <ProjectsNavbar toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled}/>
            <div className='projectdiv'>
                <Backbutton />
                <h3>Portfolio (this website)</h3>
                <h4 className="documentation_subtitle">Introduction</h4>
                <p>
                    For a while I had been intrigued by the idea of developing my very own website.
                    Finally, after taking the courses Web Software Development and Full Stack Open, I felt like I could come up with something.
                    To be honest, there was no planning phase, I just got to it. This project happened quite spontaneously.
                </p>
                <p>
                    This website was built with React and some functionality-adding libraries. More on them later.
                </p>
                <h4 className="documentation_subtitle">Beginning the project</h4>
                <p>
                    I started by creating a new React project. I then removed everything I wouldn't need and modified the basic structure to fit what seemed intuitive.
                    At this point I focused on running the project locally and adding the basic components like navigation bar, routes and pages one by one.
                </p>
                <Backbutton />
            </div>
        </div>
    )
}

export default WEBSITE