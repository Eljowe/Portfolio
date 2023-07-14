import profilepicture from '../images/profile.jpg'
import React from 'react'

const About = () => {
    return(
        <div id="about" >
            <div >
                <h1 className='title'>Foreword</h1>
                <div className='Foreword'>
                    <p>
                        I am a 23-year-old Masters student currently specializing in Human-Computer Interaction at Aalto University.
                        Alongside my primary field of study, I have also pursued a minor in Computer Science, further expanding my technical expertise.
                        My background is in electrical engineering, in which I hold a bachelor's degree from Aalto University.
                        Additionally, I have a keen interest in Mathematics, which I try to study at University of Helsinki whenever time permits.
                        My academic journey is driven by an interest for exploring the intersection of technology and design.
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