import ABOUT from '../project_views/ABOUT'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects2 = () => {
    const windowSize = useRef([window.innerWidth, window.innerHeight])

    useEffect(() => {
        gsap.timeline().fromTo('.ProjectList2', { x: `${windowSize.current[0]*0.1}` }, {
            scrollTrigger: {
                scrub: true,
                trigger: '#projects2',
                pin: true,
                // anticipatePin: 1,
                start: 'top top',
                end: `+=${windowSize.current[1]*2.5}`,
            },
            x: `${-(windowSize.current[0]*0.75)*0.6*5}`,
            ease: 'none'
        })

    }, [])




    return(
        <div id="projects2" >
            <h1>Projects</h1>
            <div className='ProjectList2'>
                <a href="/portfolioproject" ><div className='ProjectListItem2' id="portfolioitem">Portfolio</div></a>
                <a href="/RL" ><div className='ProjectListItem2' id="RLitem">Reinforcement learning</div></a>
                <a href="/ticketbot" ><div className='ProjectListItem2' id="kideitem">Web automation</div></a>
                <a href="/3dDesign" ><div className='ProjectListItem2' id="caditem">3D Design</div></a>
                <a href="/film" ><div className='ProjectListItem2' id="filmitem">Film photography</div></a>
            </div>
            <div className='Iconsdiv'>
                <a className="socialicon" href="https://github.com/Eljowe" target="_blank" rel="noopener noreferrer"><BsGithub className='Socialicon' size='4vh'/></a>
                <a className="socialicon" href="https://www.linkedin.com/in/joelwickstrom/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='Socialicon' size='4vh'/></a>
            </div>
        </div>
    )
}

export default Projects2