import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Projects3 = () => {
    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 700 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 700, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return(
        <div id="projects">
            <h1>Projects</h1>
            <div className='ProjectList'>
                <Carousel swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={['mobile']}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item"
                    //focusOnSelect={true}
                >
                    <a href="/tapio"  ><div className='ProjectListItem3'><div className='projectPic' id="tapioitem"></div><div className='ProjectListItemText3'><p>A static SPA website for the football team I play in. Built with Vite js.</p></div></div></a>
                    <a href="/RL"  ><div className='ProjectListItem3'><div className='projectPic' id="RLitem">Reinforcement learning</div><div className='ProjectListItemText3'><p>Trying to use reinforcement learning to master a 2048-type browser game.</p></div></div></a>
                    <a href="/ticketbot"  ><div className='ProjectListItem3'><div className='projectPic' id="kideitem">Ticket bot</div><div className='ProjectListItemText3'><p>Practicing web automation and REST api usage by creating an automated ticket buying app. Then using Flutter to test mobile development.</p></div></div></a>
                    <a href="/3dDesign"  ><div className='ProjectListItem3'><div className='projectPic' id="caditem">3D Design</div><div className='ProjectListItemText3'><p>Using 3D-designing tools like Solidworks to create random solutions to random problems.</p></div></div></a>
                    <a href="/portfolioproject"  ><div className='ProjectListItem3'><div className='projectPic' id="portfolioitem">Portfolio</div><div className='ProjectListItemText3'><p>How I built this website. What tools I used and why. What I learned.</p></div></div></a>
                    <a href="/film"  ><div className='ProjectListItem3'><div className='projectPic' id="filmitem">Film photography</div><div className='ProjectListItemText3'><p>My film photography process from shooting to developing and scanning at home.</p></div></div></a>
                </Carousel>
            </div>
        </div>
    )
}

export default Projects3