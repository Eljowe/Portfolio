import './Styles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Navigate,
    Routes
} from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from './helpers/ScrollToTop'
import { createContext, useState, useEffect, useRef } from 'react'
import React from 'react'
import NotFoundPage from './pages/NotFoundPage'
import ScrollTopArrow from './components/ScrollTopArrow'
import CAD from './project_views/CAD'
import FILM from './project_views/FILM'
import KIDE from './project_views/KIDE'
import RLAI from './project_views/RLAI'
import WEBSITE from './project_views/WEBSITE'
import TAPIO from './project_views/TAPIO'
import useLocoScroll from './helpers/locoScroll'
import { gsap } from 'gsap'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export const ThemeContext = createContext(null)

function App() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [projectScrolled, setProjectScrolled] = useState(false)
    const [gsapMenu, setGsapMenu] = useState(false)

    useEffect(() => {
        const checkScroll = () => {
            if (window.pageYOffset > window.innerHeight) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', checkScroll)

        return () => {
            window.removeEventListener('scroll', checkScroll)
        }
    }, [isScrolled])

    useEffect(() => {
        const checkProjectScroll = () => {
            if (window.pageYOffset > 100) {
                setProjectScrolled(true)
            } else {
                setProjectScrolled(false)
            }
        }
        window.addEventListener('scroll', checkProjectScroll)

        return () => {
            window.removeEventListener('scroll', checkProjectScroll)
        }
    }, [projectScrolled])

    const [theme, setTheme] = useState('dark')

    const setThemeInStorage = (theme) => {
        localStorage.setItem('theme', theme)
    }

    const getThemeInStorage = () => {
        return localStorage.getItem('theme')
    }

    useEffect(() => {
        if (getThemeInStorage() !== undefined) {
            setTheme(getThemeInStorage())
        } else {
            setThemeInStorage('dark')
        }

    }, [theme])

    const toggleTheme = () => {
        const newtheme = theme  === 'light' ? 'dark' : 'light'
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
        setThemeInStorage(newtheme)
    }

    const [menuOpen, setMenuOpen] = useState('closed')

    const toggleMenu = () => {
        setMenuOpen((curr) => (curr === 'open' ? 'closed' : 'open'))
        setGsapMenu((curr) => !curr)
        if (gsapMenu) {
            gsap.timeline().to('.NavigationScreen', {
                duration: 0.3,
                x: '-50%',
                ease: 'power2.inOut'
            })} else {
            gsap.timeline().to('.NavigationScreen', {
                duration: 0.3,
                x: '50vw',
                ease: 'power2.inOut',
            })
        }

    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App" id={theme===null ? 'dark' : theme}>
                <Router>
                    <Routes>
                        <Route path='/' exact={true} element={<Home toggleTheme={toggleTheme} theme={theme} isScrolled={isScrolled} toggleMenu={toggleMenu} menuOpen={menuOpen} />} />
                        <Route path='*' exact={true} element={<NotFoundPage toggleTheme={toggleTheme} theme={theme} toggleMenu={toggleMenu} menuOpen={menuOpen} />} />
                        <Route path="/portfolioproject" element={<WEBSITE toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled} toggleMenu={toggleMenu} menuOpen={menuOpen} />} />
                        <Route path="/RL" element={<RLAI toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled} toggleMenu={toggleMenu} menuOpen={menuOpen} />}/>
                        <Route path="/ticketbot" element={<KIDE toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled} toggleMenu={toggleMenu} menuOpen={menuOpen} />} />
                        <Route path="/3dDesign" element={<CAD toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled} toggleMenu={toggleMenu} menuOpen={menuOpen} />} />
                        <Route path="/film" element={<FILM toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled} toggleMenu={toggleMenu} menuOpen={menuOpen} />} />
                        <Route path="/tapio" element={<TAPIO toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled} toggleMenu={toggleMenu} menuOpen={menuOpen} />} />
                    </Routes>
                </Router>
                {isScrolled && <h1><ScrollTopArrow/></h1>}
                <footer>
                    <a className="socialicon" href="https://github.com/Eljowe" target="_blank" rel="noopener noreferrer"><BsGithub className='Socialicon' size='26px'/></a>
                    <a className="socialicon" href="https://www.linkedin.com/in/joelwickstrom/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='Socialicon' size='26px'/></a>
                </footer>
            </div>
        </ThemeContext.Provider>
    )
}

export default App
