import React from 'react'
import ReactSwitch from 'react-switch'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll'
import { BsX } from 'react-icons/bs'
const NavigationScreen = ({ toggleTheme, theme, projectScrolled, toggleMenu }) => {
    return(
        <div className='NavigationScreen'>

            <nav>
                <ul className='NavList'>
                    <li>
                        <a className='NavigationScreenCross' onClick={toggleMenu}><BsX className='BsX' size='4rem'/></a>
                    </li>
                    <li>
                        <a className='NavigationScreenItem' href="#home" onClick={toggleMenu}>Home</a>
                    </li>
                    <li>
                        <a className='NavigationScreenItem' href="#about" onClick={toggleMenu}>About</a>
                    </li>
                    <li>
                        <a className='NavigationScreenItem' href="#projects" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li>
                        <a className='NavigationScreenItem ' href="#resume" onClick={toggleMenu}>Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default NavigationScreen