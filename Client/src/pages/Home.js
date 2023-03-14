import React, { useEffect, useRef } from 'react'
import Sphere3D from '../components/Sphere3D'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Resume from '../sections/Resume'
import Navbar from '../components/Navbar'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'

gsap.registerPlugin(ScrollTrigger)

const Home = ({ toggleTheme, theme, isScrolled }) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight])
    window.onload=pageLoaded
    let tl2 = gsap.timeline({ defaults: { ease: 'rough.inOut', duration: 1.5 } })


    function pageLoaded() {
        tl2.from('.HomeTitle', { x: -windowSize.current[0]/8, delay:0.15, duration: 1.5, ease: 'power4.inOut', opacity: 0 })
        .from('.Home3D', { x: windowSize.current[0]/8, delay:0.15 , duration: 1.5, ease: 'power4.inOut', opacity: 0 }, '-=1.65')
        .from('.Navbar', { y: -80, delay:0.15 , duration: 1.5, ease: 'power4.inOut' }, '-=1.8')
        
    
    }

    useEffect(() => {

        gsap.timeline().to('.Home3D', {
            scrollTrigger:{
                trigger: '.pagecontainer',
                start:'+=50',
                end: '+=600',
                scrub: true,
                ease: 'power2.inOut',
                //invalidateOnRefresh: true
            },
            opacity: 0,
        }).to('.HomeTitle', {
            scrollTrigger:{
                trigger: '.pagecontainer',
                start: '+=50',
                end: '+=600',
                scrub: true,
                ease: 'power2.inOut',
                invalidateOnRefresh: true
            },
            opacity: 0,
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
                start: '+=20%',
                end: '+=70%',
                scrub: true,
                ease: 'power2.inOut',
                //markers: true,
            }
        }).fromTo('#projects h1', {
            opacity: 0, x: -500 }, { opacity:1, x: 0,
            scrollTrigger: {
                trigger: '#about',
                start: '+=20%',
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
            <Navbar toggleTheme={toggleTheme} theme={theme} isScrolled={isScrolled}/>
            <div id='home' >
                <div className='HomeTitle'>
                    <h1>Portfolio</h1>
                    <h1>Joel Wickström</h1>
                </div>
                <div className='Home3D'>
                    <Sphere3D theme={theme}/>
                </div>
            </div>
            <About />
            <div className='spacer layer1'></div>
            <Projects />
            <div className='spacer layer2'></div>
            <Resume />
        </div>
    )
}

export default Home