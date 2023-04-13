import Home3D from '../components/Sphere3D'
import ProjectsNavbar from '../components/ProjectsNavbar'
import BurgerNavbar from '../components/BurgerNavbar'

const NotFoundPage = ({ toggleTheme, theme, toggleMenu }) => {
    return(
        <div className="Notfound">
            <ProjectsNavbar toggleTheme={toggleTheme} theme={theme} toggleMenu={toggleMenu} />
            <h1>404: Page not found</h1>
            <Home3D theme={theme}/>
        </div>
    )
}

export default NotFoundPage