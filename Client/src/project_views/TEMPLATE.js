import React from 'react'
import ProjectsNavbar from '../components/ProjectsNavbar'
import Backbutton from '../components/Backbutton'

//template for new project views
const TEMPLATE = ({ toggleTheme, theme, projectScrolled }) => {
    return(
        <div className="project_content">
            <ProjectsNavbar toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled}/>
            <Backbutton />
            <h3>TEMPLATE view</h3>
            <p>
                Here is the content on TEMPLATE project
            </p>
            <Backbutton />
        </div>
    )
}

export default TEMPLATE