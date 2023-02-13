import ABOUT from '../project_views/ABOUT'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { useState, useEffect } from 'react'

const Projects = () => {

    return(
        <div id="projects">
            <h1>Projects</h1>
            <div className='ProjectList'>
                <a href="/portfolioproject" ><div className='ProjectListItem' id="portfolioitem">Portfolio</div></a>
                <a href="/RL" ><div className='ProjectListItem' id="RLitem">Reinforcement learning</div></a>
                <a href="/ticketbot" ><div className='ProjectListItem' id="kideitem">Ticket bot</div></a>
                <a href="/3dDesign" ><div className='ProjectListItem' id="caditem">3D Design</div></a>
                <a href="/film" ><div className='ProjectListItem' id="filmitem">Film photography</div></a>
            </div>
            <div className='Iconsdiv'>
                <a className="socialicon" href="https://github.com/Eljowe" target="_blank" rel="noopener noreferrer"><BsGithub className='Socialicon' size='4vh'/></a>
                <a className="socialicon" href="https://www.linkedin.com/in/joelwickstrom/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='Socialicon' size='4vh'/></a>
            </div>
        </div>
    )
}

export default Projects