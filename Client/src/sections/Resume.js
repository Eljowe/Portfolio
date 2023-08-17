import React from 'react'

const Resume = () => {
    return(
        <div id="resume">
            <div className='resumecolumns'>
                <div className='resumediv' id="mainresume">
                    <h1>Resume</h1>
                    <h3>Education</h3>
                    <p className="resumetime">Sep. 2019 - Currently</p>
                    <h3 className="subtitle">Aalto University</h3>
                    <ul className="educationlist">
                        <li className="educationItem">Master's student</li>
                        <li className="educationItem">Major in human-computer interaction</li>
                        <li className="educationItem">Minor in computer science</li>
                        <li className="educationItem">Bachelor's degree in electronics and electrical engineering</li>
                    </ul>
                    <p className="resumetime">Sep. 2021 - Currently</p>
                    <h3 className="subtitle">University of Helsinki</h3>
                    <ul className="educationlist">
                        <li className="educationItem">Second-year student</li>
                        <li className="educationItem">Major in mathematics with computer science as the field of study</li>
                        <li className="educationItem">Minor in astronomy</li>
                    </ul>
                    <p className="resumetime">Sep. 2015 - Jun. 2018</p>
                    <h3 className="subtitle">Helsinki school of natural sciences (high school)</h3>
                    <ul className="educationlist">
                        <li className="educationItem">Graduated in 2018</li>
                    </ul>
                    <h3 className="resumehead">Experience</h3>
                    <p className="resumetime">May 2022 - Aug. 2022 & May 2023 - Aug. 2023</p>
                    <h3 className="subtitle">Vaisala Oyj</h3>
                    <ul className="educationlist">
                        <li className="educationItem">Test engineer trainee at Vaisala instrument factory</li>
                        <li className="educationItem">Designing and constructing a production line</li>
                        <li className="educationItem">3D-Design and printing of manufacturing components</li>
                        <li className="educationItem">Running calibration tests for instruments</li>
                    </ul>
                </div>
                <div className='resumediv' id="secondresume">
                    <h3>Skills and familiar tools</h3>
                    <ul className="skillsList">
                        <li className="skill">Python</li>
                        <li className="skill">Solidworks CAD</li>
                        <li className="skill">Web software development (Node, React, ThreeJS etc.)</li>
                        <li className="skill">VS Code and git</li>
                        <li className="skill">Background in electrical engineering</li>
                    </ul>
                    <h3>Languages</h3>
                    <ul className="skillsList">
                        <li className="skill">Finnish (native)</li>
                        <li className="skill">English (full professional proficiency)</li>
                        <li className="skill">Swedish (basics)</li>
                    </ul>
                    <h3>Interests and hobbies</h3>
                    <ul className="skillsList">
                        <li className="skill">Random programming projects</li>
                        <li className="skill">3D-design and printing</li>
                        <li className="skill">Electric guitar</li>
                        <li className="skill">Film photography, developing and scanning</li>
                        <li className="skill">Football</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume