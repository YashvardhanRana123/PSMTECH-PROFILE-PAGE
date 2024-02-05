import React from 'react'
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

export const ContactUs = () => {
  return (
    <div>
      <Navbar/>
        <div className='ContactUs-Page'>
            <div className='ContactUs-Page-Heading'>
               <big> <h1>CONTACT PROTECH IT GROUP INC.</h1></big>
            </div>
            <div className='ContectUs-Page-Small-Container'>
                <h6>200 Broadhollow Road, Suite 207
Melville, NY 11747</h6>
<h6>+1 631 830 6260</h6>
            </div>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}
export default ContactUs;