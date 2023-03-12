import React from 'react'
import Sphere3D from '../components/Sphere3D'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Resume from '../sections/Resume'
import Navbar from '../components/Navbar'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger)

const Home = ({ toggleTheme, theme, isScrolled }) => {
    window.onload=pageLoaded;
    let tl2 = gsap.timeline({defaults: {ease: "rough.inOut", duration: 1.5}})
    let flagpoles = CSSRulePlugin.getRule(".HomeTitle")


    function titleAnimation() {
        var tl = gsap.timeline();
        tl.from('.HomeTitle', {y: 60, duration: 1.5, ease: "power4.out"})
        return tl
    }

    function sphereAnimation() {
        var tl = gsap.timeline();
        tl.from('.Home3D', {y: -60, duration: 1.5, ease: "power4.out"})
	    return tl
    }

    function pageLoaded() {
        tl2.add(titleAnimation()).add(sphereAnimation(), "-=1.5")
     }




    return (
        <div className='pagecontainer' >
            <Navbar toggleTheme={toggleTheme} theme={theme} isScrolled={isScrolled}/>
            <div id='home' >
                <div className='HomeTitle'>
                    <h1>Portfolio</h1>
                    <h1>Joel Wickström</h1>
                </div>
                <div className='Home3D'>
                    <Sphere3D />
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