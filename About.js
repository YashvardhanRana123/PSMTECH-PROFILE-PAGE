import React from 'react'
import Footer from '../Component/Footer';
import Contact from '../Component/Contact';
import Navbar from '../Component/Navbar';

export const About = () => {
    return (
        <div>
            <Navbar/>
            <div className='About'>
                <div className='About-Heading'>
                    <big><h1>About Us</h1></big>
                </div>
                <div className='About-Pera1'>
                    <big><h1 className='About-Pera1-Heading'>Professional Technologists for Information Management</h1></big>
                    <h4 className='About-Pera1-Text'>ProTech IT Group Inc. is a carefully selected team of professional technologists with a track record of demonstrated excellence providing everything needed for the ongoing improvement and support of the systems that manage your information.

                        Remove these burdensome responsibilities from your own plate and your own people and assign them to someone who has invested the time and effort into the training and certification that is the foundation of being a professional.

                        People who treat their clients with respect, concern, and personal care.
                        People who treat their client businesses with the seriousness and careful thought required to deliver the most effective solutions to support them.
                        People who become your friend and make you proud to have selected us.</h4>
                </div>
            </div>
            <div className='About-Pera2'>
                <big><h1 className='About-Pera2-Heading'>Connecting Your Network to Your Business Goals and Objectives</h1></big>
                <h4 className='About-Pera2-Text'>We meet with and learn from your people and your management what they need from their IT systems, what their priorities are, and what will bring them the greatest value, maximizing benefit to the business. We then apply that learning to the design of each and every connection.

                    Any investment in your network is valueless unless it directly, effectively, and positively impacts the success of your business. As such, your network is very directly connected to your business, and we begin there. Every other connection we make and manage relates directly back to the goals and objectives you established for your business.</h4>
            </div>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default About;