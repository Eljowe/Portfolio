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
                    To be honest, with this project, there was no planning phase, I just got to it.
                </p>
                <p>
                    This website was built with Node JS, React and some functionality-adding libraries. More on them later.
                </p>
                <h4 className="documentation_subtitle">Beginning the project</h4>
                <p>
                    I started by creating a new React project with create-react-app.
                    I then removed everything I wouldn't need and modified the basic structure to fit what seemed intuitive based on what I had learned on course projects.
                    At this point I focused on running the developing environment locally and adding the basic components like navigation bar, routes and pages one by one.
                </p>
                <p>
                    The backend is simple Express-based Node app. I decided that the Express-React-stack provided enough functionality without adding unnecessary complexity for a simple portfolio project.
                </p>
                <p>
                    The first challenge was learning to use CSS. Sure, I had used some CSS on courses, but the assignments had required very basic-looking layouts with pre-styled components. I wanted to go through the styling fully by myself.
                    This goal made me realize I knew very little about 1. CSS and 2. actual GUI construction. Once again, I reflected back on what I had learned (or read about but never implemented) in different courses such as User Interface Construction and found myself in urgent need of doing more research about the practices used in frontend web development.
                </p>
                <h4 className="documentation_subtitle">Cycling through the designs</h4>
                <p>
                    After deploying what I would consider the first version of this website, I quickly found myself doing a complete overhaul of the design. The first design was too unpolished, my friend said it reminded them of early 2000s-web. That didn't sound good, and certainly wasn't what I was aiming for.
                    I decided to try and modernize my design.
                </p>
                <p>
                    The first version of the website consisted of multiple pages. After trying to go for a more minimalistic look, I converted the different pages into sections on a single page. There were, however, still a few pages as each project had its own.
                    The home page now had four sections: landing section, about, projects, and resume. This is the layout the website still uses for now.
                </p>

                <Backbutton />
            </div>
        </div>
    )
}

export default WEBSITE