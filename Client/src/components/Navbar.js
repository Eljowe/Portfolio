import React from 'react'
import ReactSwitch from 'react-switch'
import { BsFillMoonStarsFill, BsFillSunFill, BsX, BsList } from 'react-icons/bs'

const Navbar = ({ toggleTheme, theme, isScrolled, toggleMenu }) => {

    return (
        <div className={isScrolled ? 'NavbarScrolled' : 'Navbar'}>
            <nav>
                <ul>
                    <li>
                        <a className='BsXNavItem' onClick={toggleMenu}><BsX className='BsX' size='40px'/></a>
                    </li>
                    <li>
                        <a className='NavItem' href="#home">Home</a>
                    </li>
                    <li>
                        <a className='NavItem' href="#about">About</a>
                    </li>
                    <li>
                        <a className='NavItem' href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className='NavItem' href="#resume">Resume</a>
                    </li>
                </ul>
            </nav>
            <ReactSwitch
                onChange={toggleTheme} checked={theme !== 'light'}
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
export default Navbar