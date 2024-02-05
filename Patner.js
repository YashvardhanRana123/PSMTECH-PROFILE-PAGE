import React from 'react'
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

export const Patner = () => {
    return (
        <div>
            <Navbar/>
            <div className='Patner'>
                <div className='Patner-Heading'>
                    <big><h1>PREFERRED PARTNERS</h1></big>
                </div>
                <div className='Patner-Pera1'>
                    <div className='Patner-Pera1-Heading'>
                        <big><h1>Our Partners</h1></big>
                    </div>
                        <h4> While ProTech IT Group Inc. remains committed to being vendor neutral and providing the solution which best fits each customer’s needs, we do maintain strategic partnerships with industry leaders. These partnerships bring many benefits, which all lead to the best experience for the customer.</h4>
                    <div className='Patner-Pera-Companies'>
                        <div className='Patner-Pera-Companies-First'>
                        <div className='Patner-Pera-Companies-1'><h1>Google</h1></div>
                        <div className='Patner-Pera-Companies-2'><h1>IBM</h1></div>
                        <div className='Patner-Pera-Companies-3'><h1>Microsoft</h1></div>
                        </div>
                        <div className='Patner-Pera-Companies-Second'>
                        <div className='Patner-Pera-Companies-4'><h1>Infosys</h1></div>
                        <div className='Patner-Pera-Companies-5'><h1>TechM</h1></div>
                        <div className='Patner-Pera-Companies-6'><h1>TCS</h1></div>
                        </div>
                        <div className='Patner-Pera-Companies-Third'>
                        <div className='Patner-Pera-Companies-7'><h1>ZOHO</h1></div>
                        <div className='Patner-Pera-Companies-8'><h1>Cognizent</h1></div>
                        <div className='Patner-Pera-Companies-9'><h1>Nargo</h1></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Patner-Contact'>
                <Contact/>
            </div>
            <div className='Patner-Fotter'>
                <Footer/>
            </div>
        </div>
    )
}
export default Patner;