import React, {useRef} from 'react'
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
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    
    window.onload=pageLoaded
    let tl2 = gsap.timeline({ defaults: { ease: 'rough.inOut', duration: 1.5 } })
    

    function pageLoaded() {
        tl2.from('.HomeTitle', { y: 120, duration: 1.5, ease: 'power4.out', opacity: 0 }).from('.Home3D', { y: -120, duration: 1.5, ease: 'power4.out', opacity: 0 }, "-=1.5")
    }

    var windowRatio = windowSize.current[0]/windowSize.current[1]

    gsap.to(".Home3D", {
        scrollTrigger:{
            trigger: " .HomeTitle", 
            start:`-=${windowRatio*90}`,
            end: `+=${windowRatio*120}`,
            scrub: 1,
            ease: "default.inOut"
        },
        x: windowSize.current[0]/2,
        y: 0,
        opacity: 0
    })

    gsap.to(".HomeTitle", {
        scrollTrigger:{
            trigger: " .HomeTitle", 
            start: `-=${windowRatio*90}`,
            end: `+=${windowRatio*120}`,
            scrub: 1,
            ease: "default.inOut"
        },
        x: -windowSize.current[0]/2,
        y: 0,
        opacity: 0
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