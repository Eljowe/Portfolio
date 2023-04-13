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
import Navbar from './components/Navbar'
import ScrollTopArrow from './components/ScrollTopArrow'
import CAD from './project_views/CAD'
import FILM from './project_views/FILM'
import KIDE from './project_views/KIDE'
import RLAI from './project_views/RLAI'
import WEBSITE from './project_views/WEBSITE'
import useLocoScroll from './helpers/locoScroll'

export const ThemeContext = createContext(null)

function App() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [projectScrolled, setProjectScrolled] = useState(false)

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
                    </Routes>
                </Router>
                {isScrolled && <h1><ScrollTopArrow/></h1>}
                <footer></footer>
            </div>
        </ThemeContext.Provider>
    )
}

export default App
