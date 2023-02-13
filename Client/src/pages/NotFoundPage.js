import Home3D from '../components/Sphere3D'
import ProjectsNavbar from '../components/ProjectsNavbar'

const NotFoundPage = ({ toggleTheme, theme }) => {
    return(
        <div className="Notfound">
            <ProjectsNavbar toggleTheme={toggleTheme} theme={theme}/>
            <h1>404: Page not found</h1>
            <Home3D />
        </div>
    )
}

export default NotFoundPage