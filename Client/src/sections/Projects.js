const Projects = () => {
    return(
        <div id="projects">
            <h1>Projects</h1>
            <div className='ProjectList'>
                <a href="/kalliokierrokselle"  ><div className='ProjectListItem'><div className='projectPic' id="kallioitem">Kalliokierrokselle.fi</div><div className='ProjectListItemText'><p>A Next.js project, with auth and db with firebase, that allows users to update current pricing of bars in Kallio.</p></div></div></a>
                <a href="/ticketbot"  ><div className='ProjectListItem'><div className='projectPic' id="kideitem">Ticket bot</div><div className='ProjectListItemText'><p>Practicing web automation and REST api usage by creating an automated ticket buying app. Then using Flutter to test mobile development.</p></div></div></a>
                <a href="/tapio"  ><div className='ProjectListItem'><div className='projectPic' id="tapioitem"></div><div className='ProjectListItemText'><p>A static SPA website for the football team I play in. Built with Vite js.</p></div></div></a>
                <a href="/3dDesign"  ><div className='ProjectListItem'><div className='projectPic' id="caditem">3D Design</div><div className='ProjectListItemText'><p>Using 3D-designing tools like Solidworks to create random solutions to random problems.</p></div></div></a>
                <a href="/portfolioproject"  ><div className='ProjectListItem'><div className='projectPic' id="portfolioitem">Portfolio</div><div className='ProjectListItemText'><p>How I built this website. What tools I used and why. What I learned.</p></div></div></a>
                <a href="/RL"  ><div className='ProjectListItem'><div className='projectPic' id="RLitem">Reinforcement learning</div><div className='ProjectListItemText'><p>Trying to use reinforcement learning to master a 2048-type browser game.</p></div></div></a>
                <a href="/film"  ><div className='ProjectListItem'><div className='projectPic' id="filmitem">Film photography</div><div className='ProjectListItemText'><p>My film photography process from shooting to developing and scanning at home.</p></div></div></a>
            </div>
        </div>
    )
}

export default Projects