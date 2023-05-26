import React from 'react'
import ProjectsNavbar from '../components/ProjectsNavbar'
import Backbutton from '../components/Backbutton'
import { CodeBlock, dracula } from 'react-code-blocks'
import Home3D from '../components/Sphere3D'
import BurgerNavbar from '../components/BurgerNavbar'
import NavigationScreen from '../components/NavigationScreen'

const WEBSITE = ({ toggleTheme, theme, projectScrolled, toggleMenu }) => {
    const code = `"scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js",
        "build:ui": "cd ../Client && rmdir /s /q build && npm run build && robocopy build ../Backend/build /s && cd ../Backend",
        "deploy": "flyctl deploy",
        "d": "npm run build:ui && npm run deploy",
        "logs:prod": "fly logs"
    },`
    return(
        <div>
            <ProjectsNavbar toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled} toggleMenu={toggleMenu}/>
            <div className='projectdiv'>
                <Backbutton />
                <h3>Portfolio (this website)</h3>
                <h4 className="documentation_subtitle">Introduction</h4>
                <p>
                    For a while I had been intrigued by the idea of developing my very own website.
                    Finally, after taking the courses Web Software Development and Full Stack Open, I felt like I could come up with something.
                    To be honest, with this project, there was no planning phase, I just got to it. <a className="link_in_text" href="https://github.com/Eljowe/Portfolio" target="_blank" rel="noopener noreferrer">Link to the github repository</a>
                </p>
                <p>
                    This website was built with Node JS, React and some functionality-adding libraries. More on them later. No templates were used.
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
                    The home page now had four sections: landing section, about, projects, and resume. This is the layout the website still uses for now. Sadly there are no screenshots of the previous designs as I was quite eager to move on from them.
                </p>
                <h4 className="documentation_subtitle">Production pipeline</h4>
                <p>
                    I used similar methods to push updates and new content to the website as what was used in the Full Stack Open-course. While not certainly the most practical implementation, it works.
                    The project directory is divided to two halves: backend and frontend.
                </p>

                <p>I created my own commands to run the UI production build and to copy it to the backend directory, which is then uploaded to the hosting server Fly.io.
                Below is the scripts snippet from package.json. The build is uploaded to the server with commands "npm run d" and "npm run deploy". I could have combined these two commands to upload with one line, but I noticed that I would often find minor fixes after starting build, so I would waste time waiting for uploading to fly to complete.</p>

                <div className="code">
                    <CodeBlock
                        id="code"
                        language='json'
                        text={code}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
                <p>In the future I want to use Vite js and scrap the copy-paste process in order to get more used to industry friendly practices.</p>

                <h4 className="documentation_subtitle">Libraries</h4>
                <p>There were a few libraries I had seen used in other people's projects and wanted to try them myself. For example, Three JS and GSAP had been on my "to try" list for as long as I have been familiar with frontend-trickery. </p>
                <p>For Three JS I found a practical use case in showcasing my 3D designs in interactive way, where one can rotate the models as they please. <a className="link_in_text" href="https://joelwickstrom.com/3dDesign" target="_blank" rel="noopener noreferrer">Click here to see the CAD-showcase</a>.
                Also, the spinning sphere in the landing screen is also rendered in real time with Three JS. I disabled the user controls for the sphere as it caused confusion when using mobile website and trying to scroll down.</p>
                <Home3D/>
                <p>GSAP was another library that seemed being able to add some liveliness to UI designs. It allows, for example, adding scrolling animations easily, which I used it for, for now at least.</p>
                <Backbutton />
            </div>
        </div>
    )
}

export default WEBSITE