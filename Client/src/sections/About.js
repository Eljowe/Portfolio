import profilepicture from '../images/profile2.jpg'
import React from 'react'

const About = () => {
    return(
        <div id="about" >
            <div >
                <h1 className='title'>Foreword</h1>
                <div className='Foreword'>
                    <p>
                        I am a 23-year-old Masters student currently specializing in Human-Computer Interaction at Aalto University.
                        Alongside my primary field of study, I pursue a minor in Computer Science.
                        My background is in electrical engineering, in which I hold a bachelor's degree from Aalto University.
                        Additionally, I have studied Mathematics at University of Helsinki and try to continue whenever time permits.
                    </p>
                </div>
            </div>
            <div className='Aboutmediv'>
                <img src={profilepicture} alt="me" className='profilepic'/>
                <h3 >About this website</h3>
                <p className='Aboutme'>
                    I try to update this website from time to time, as I gather new experience through work and personal projects.
                    This website serves as a portfolio, CV, and a playground for my front-end experiments.
                </p>
            </div>
        </div>
    )
}

export default About