import standR from '../images/3D/standrender.jpg'
import stand3 from '../images/3D/stand3.jpg'
import FS1 from '../images/3D/filmscanner1.JPG'
import FS2 from '../images/3D/filmscanner2.JPG'
import FS3 from '../images/3D/filmscanner3.JPG'
import F from '../images/3D/F.jpg'
import scanner from '../images/3D/scanner.jpg'
import React from 'react'
import STLview from '../components/STLview'
import ScannerSTL from '../STLmodels/scanner.STL'
import speaker_stand from '../STLmodels/speaker_stand.STL'
import vinylmount from '../STLmodels/vinylmount.STL'
import ProjectsNavbar from '../components/ProjectsNavbar'
import Backbutton from '../components/Backbutton'

const CAD = ({ toggleTheme, theme, projectScrolled }) => {
    return(
        <div>
            <ProjectsNavbar toggleTheme={toggleTheme} theme={theme} projectScrolled={projectScrolled}/>
            <div className='projectdiv'>
                <Backbutton />
                <h3>3D Design</h3>
                <p>
                    Here is a (very limited) collection of CAD-models I have created, mainly for 3D-printing
                    with my Voxelab Aquila. Everytting here has been designed with Solidworks CAD software. Models below can be rotated and inspected.
                </p>
                <div className='STL_div'>
                    <STLview className="STLview" STL={speaker_stand} position={{ x: -75, z: 0, y: -80 }}/>
                </div>
                <p>
                    Simple speaker stand to direct the sound. I am not fully sure about PLAs (the printing material) audio properties, but so far these have worked well.
                    The design is simple and optimizes the printing process as the walls are thin.
                </p>
                <div className="CAD_images">
                    <img className="standimg" src={standR} alt="speaker stand render with wooden block"/>
                    <img className="standimg" src={stand3} alt="speaker stand in use"/>
                </div>
                <p>
                    Demonstrating use with a render and a picture of the printed product.
                </p>
                <div className='STL_div'>
                    <STLview className="STLview" STL={ScannerSTL} position={{ x: -30, z: -40, y: -30 }}/>
                </div>
                <p>
                    Film negative scanning adapter/mount compatible with my Olympus XZ-10 camera. Camera simply takes a photo of the backlit negative.
                    The mount is needed for keeping the camera stable and in constant distance to achieve constant focus.
                </p>
                <div className="CAD_images">
                    <img className="standimg3" src={FS1} alt="film scanner exploded parts"/>
                    <img className="standimg3" src={FS2} alt="film scanner from below"/>
                    <img className="standimg3" src={FS3} alt="film scanner intact"/>
                </div>
                <p>
                    Exploded views demonstrating the printing in two parts solution to avoid using supports while printing due to challenging geometry.
                </p>
                <div className="CAD_images">
                    <img className="standimg" src={scanner} alt="speaker stand render"/>
                    <img className="standimg" src={F} alt="speaker stand render with wooden block"/>
                </div>
                <p>
                    Setup and the output. More information about the full process on film photography-page.
                </p>
                <div className='STL_div'>
                    <STLview className="STLview" STL={vinylmount} position={{ x: -70, z: -40, y: -20 }}/>
                </div>
                <p>
                    A mount for my vinyl LPs. It's really just a small shelf that is nailed into the wall. Works well.
                </p>
                <h3>To be continued...</h3>
                <Backbutton />
            </div>
        </div>
    )
}

export default CAD