import React from 'react'
import ReactSwitch from 'react-switch'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll'
const ProjectsNavbar = ({ toggleTheme, theme, projectScrolled }) => {
    return (
        <div className={projectScrolled ? 'NavbarScrolled' : 'Navbar'}>
            <nav>
                <ul>
                    <li>
                        <Link onClick={() => {setTimeout(() => {scroller.scrollTo('home', { smooth: false })}, 100)}} to="/" className='NavItem'>Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => {setTimeout(() => {scroller.scrollTo('about', { smooth: false })}, 100)}} to="/" className='NavItem'>About</Link>
                    </li>
                    <li>
                        <Link onClick={() => {setTimeout(() => {scroller.scrollTo('projects', { smooth: false })}, 100)}} to="/" className='NavItem'>Projects</Link>
                    </li>
                    <li>
                        <Link onClick={() => {setTimeout(() => {scroller.scrollTo('resume', { smooth: false })}, 100)}} to="/" className='NavItem'>Resume</Link>
                    </li>
                </ul>
            </nav>
            <ReactSwitch
                onChange={toggleTheme} checked={theme === 'dark'}
                id="material-switch"
                onColor="#414141"
                onHandleColor="#969696"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                uncheckedHandleIcon={<BsFillSunFill className='react-icons' size={14}/>}
                checkedHandleIcon={<BsFillMoonStarsFill className='react-icons' size={14} color={'#414141'}/>}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={40}
                className="react-switch"
            />
        </div>
    )
}
export default ProjectsNavbar