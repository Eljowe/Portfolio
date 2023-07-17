import React, { useEffect, useRef } from 'react'
import Sphere3D from '../components/Sphere3D'
import About from '../sections/About'
import Resume from '../sections/Resume'
import { gsap } from 'gsap'
import Projects from '../sections/Projects'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BurgerNavbar from '../components/BurgerNavbar'
import NavigationScreen from '../components/NavigationScreen'

gsap.registerPlugin(ScrollTrigger)

const Home = ({ toggleTheme, theme, isScrolled, toggleMenu, menuOpen }) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight])

    window.onload=pageLoaded


    function pageLoaded() {
        let tl2 = gsap.timeline({ defaults: { ease: 'rough.inOut', duration: 1.5 } })

        // Define animations using the timeline
        tl2.from('.HomeTitle', { x: -windowSize.current[0]/4, delay:0.15, duration: 1.5, ease: 'power4.inOut', opacity: 0 })
            .from('.Home3D', { x: windowSize.current[0]/4, delay:0.15 , duration: 1.5, ease: 'power4.inOut', opacity: 0 }, '-=1.65')
            .from('.Navbar', { y: -80, delay:0.15 , duration: 1.5, ease: 'power4.inOut' }, '-=1.8')
            .call(addMouseMoveListener) // Call a function to add mousemove event listener after animations finish

        function addMouseMoveListener() {
            document.addEventListener('mousemove', mouseMoveFunc)
        }

        function mouseMoveFunc(e) {
            if (!isScrolledDown()) {
                const depth = -15
                const moveX = (e.pageX - window.innerWidth/10) / depth
                const moveY = (e.pageY - window.innerHeight/10) / depth
                gsap.to('.HomeTitle', {
                    duration: 1,
                    x: moveX,
                    y: moveY,
                    ease: 'slow',
                    stagger: 0.008,
                    overwrite: true
                })
            }
        }

        function isScrolledDown() {
            return window.scrollY > 0
        }
    }



    useEffect(() => {
        gsap.timeline().to('.Home3D', {
            scrollTrigger:{
                trigger: '.pagecontainer',
                start:'+=50',
                end: '+=65%',
                scrub: true,
                ease: 'power2.inOut',
                //invalidateOnRefresh: true
            },
            opacity: 0, zIndex: 0, x: 300,
        }).to('.HomeTitle', {
            scrollTrigger:{
                trigger: '.pagecontainer',
                start: '+=50',
                end: '+=65%',
                scrub: true,
                ease: 'power2.inOut',
                invalidateOnRefresh: true,
                //markers: true,
            },
            opacity: 0,
            zIndex: 0,
            x: -200,
        }).fromTo('.Foreword', {
            opacity: 0, x: 500 }, { opacity:1, x: 0,
            scrollTrigger: {
                trigger: '#home',
                start: 'top top',
                end: '+=70%',
                scrub: true,
                ease: 'power2.inOut',
                //markers:true,
            }
        }).fromTo('.Aboutmediv', {
            opacity: 0, x: -500 }, { opacity:1, x: 0,
            scrollTrigger: {
                trigger: '#home',
                start: 'top top',
                end: '+=70%',
                scrub: true,
                ease: 'power2.inOut',
            }
        }).fromTo('.title', {
            opacity: 0, x: -500 }, { opacity:1, x: 0,
            scrollTrigger: {
                trigger: '#home',
                start: 'top top',
                end: '+=60%',
                duration: 1.5,
                scrub: true,
                ease: 'power2.inOut',
                //markers: true,
            }
        }).fromTo('.ProjectList', {
            opacity: 0, x: 500 }, { opacity:1, x: 0,
            scrollTrigger: {
                trigger: '#about',
                start: 'top top',
                end: '+=70%',
                scrub: true,
                ease: 'power2.inOut',
                //markers: true,
            }
        }).fromTo('#projects h1', {
            opacity: 0, x: -500 }, { opacity:1, x: 0,
            scrollTrigger: {
                trigger: '#about',
                start: 'top top',
                end: '+=70%',
                scrub: true,
                ease: 'power2.inOut',
                //markers: true,
            }
        }).fromTo('#mainresume', {
            opacity: 0, x: -500 }, { opacity:1, x: 0,
            scrollTrigger: {
                trigger: '#resume',
                start: '-=800',
                end: '+=60%',
                scrub: true,
                ease: 'power2.inOut',
                //markers: true,
            }
        }).fromTo('#secondresume', {
            opacity: 0, x: 500 }, { opacity:1, x: 0,
            scrollTrigger: {
                trigger: '#resume',
                start: '-=800',
                end: '+=60%',
                scrub: true,
                ease: 'power2.inOut',
                //markers: true,
            }
        })

    })


    return (
        <div className='pagecontainer' >
            <NavigationScreen toggleTheme={toggleTheme} theme={theme} isScrolled={isScrolled} toggleMenu={toggleMenu} menuOpen={menuOpen}/>
            <BurgerNavbar toggleTheme={toggleTheme} theme={theme} isScrolled={isScrolled} toggleMenu={toggleMenu} menuOpen={menuOpen}/>

            <div id='home' >
                <div className='HomeTitle'>
                    <h1>PORTFOLIO</h1>
                    <h1>JOEL WICKSTRÖM </h1>
                </div>
                <div id='3DBox' className='Home3D'>
                    <Sphere3D theme={theme} parentName={'3DBox'} className='SphereCanvas'/>
                </div>
            </div>
            <About />
            <div className='spacer layer1'></div>
            <Projects/>
            <div className='spacer layer2'></div>
            <Resume />
        </div>
    )
}
//<div className='spacer layer1'></div>
// <div className='spacer layer2'></div>

export default Home