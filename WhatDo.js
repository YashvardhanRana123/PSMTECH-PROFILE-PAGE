import React from 'react'
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';

export const WhatDo = () => {
    return (
        <div>
          <Navbar/>
            <div className='WhatDo'>
                <div className='WhatDo-Heading'>
                    <h1>What We Do</h1>
                </div>
                <div className='WhatDo-Text'>
                    <h4>The information technology systems that manage your data need careful attention, expert design, and constant management. Our expertise and experience at each level is enhanced by our deep understanding of how they all work together most efficiently. Your business depends on your network. We assure that every part of it consistently performs at its best.</h4>
                </div>
            <div className='WhatDo-Cards'>
                <div className='WhatDo-Cards-Group-1'>
                <div className='WhatDo-Card1'>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 className='WhatDo-Card1-Heading'>Consulting and Professional Service</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='WhatDo-Button-1' type='button'>Read More</button>
  </div>
</div>

<div className='WhatDo-Card2'>
  <img src="" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 className='WhatDo-Card2-Heading'>Network Infrastructure</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='WhatDo-Button-2' type='button'>Read More</button>
  </div>
</div>
      
<div className='WhatDo-Card3'>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 className='WhatDo-Card3-Heading'>DatCenter Service</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='WhatDo-Button-3' type='button'>Read More</button>
  </div>
</div>
</div>
<div className='WhatDo-Cards-Group-2'>
      
<div className='WhatDo-Card4'>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 className='WhatDo-Card4-Heading'>Cloud Service</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='WhatDo-Button-4' type='button'>Read More</button>
  </div>
</div>
      
<div className='WhatDo-Card5'>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 className='WhatDo-Card5-Heading'>Security at all Layer</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='WhatDo-Button-5' type='button'>Read More</button>
  </div>
</div>
      
<div className='WhatDo-Card6'>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h2 className='WhatDo-Card6-Heading'>PSM CARE</h2>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='WhatDo-Button-6' type='button'>Read More</button>
  </div>
</div>
</div>
      

                </div>
            </div>
            <div className='WhatDo-Contact'>
            <Contact/>
            </div>
            <Footer/>
            </div>
    )
}
export default WhatDo;