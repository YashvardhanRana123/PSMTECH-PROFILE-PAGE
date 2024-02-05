
import './App.css';
import Footer from './Component/Footer';
import Cards from './Component/Cards';
import HomeFlex from './Component/HomeFlex';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Testimonial from './Component/Testimonial';
import ProTechCare from './Component/ProTechCare';
import HomeCom1 from './Component/HomeCom1';
import ContactUs from './Pages/ContactUs';
import About from './Pages/About';
import Patner from './Pages/Patner';
import WhatDo from './Pages/WhatDo';




function App() {
  return (
    <div >
      <Navbar/>
      <Cards/>
      <HomeFlex/>
      <HomeCom1/>
      <ProTechCare/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
