import profilepicture from '../images/profile.jpg'
import React from 'react'

const About = () => {
    return(
        <div id="about" >
            <div >
                <h1 >Foreword</h1>
                <div className='Foreword'>
                    <p>
                        This website was built and designed by me in its entirety. I am, however, not a graphic designer,
                        as one might be able to observe. I am, in simple terms, an engineering-minded person doing projects I find interesting.
                        That is also the sole reason this website exists, as I wanted to learn more about (frontend) web development and to implement and
                        test the skills I had previously acquired. This website should see changes in the future as I keep learning about better practices, I am sure.
                    </p>
                    <p>
                        Here one can find limited information about me in addition to article-like summarizations of some of the projects
                        I have done. The topics of the projects found here vary substantially, ranging from machine learning to film photography.
                    </p>
                </div>
            </div>
            <div className='Aboutmediv'>
                <img src={profilepicture} alt="me" className='profilepic'/>
                <h3 >About me</h3>
                <p className='Aboutme'>
                    I am a 23-year-old masters student studying human-computer interaction at Aalto University. My minor is in computer science.
                    My background is in electrical engineering in which I possess a bachelor's degree from Aalto.
                    I also study mathematics at the University of Helsinki whenever I have time.
                </p>
            </div>
        </div>
    )
}

export default About