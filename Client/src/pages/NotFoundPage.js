import Sphere3D from '../components/Sphere3D'
import ProjectsNavbar from '../components/ProjectsNavbar'


const NotFoundPage = ({ toggleTheme, theme, toggleMenu }) => {
    return(
        <div className="Notfound">
            <ProjectsNavbar toggleTheme={toggleTheme} theme={theme} toggleMenu={toggleMenu} />
            <h1>404: Page not found</h1>
            <div id='Error3D' className='Error3D'>
                <Sphere3D theme={theme} parentName={'Error3D'} className='SphereCanvas'/>
            </div>
        </div>
    )
}

export default NotFoundPage