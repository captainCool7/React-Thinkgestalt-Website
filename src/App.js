import './App.css';
import {Route, Switch} from 'react-router-dom';
import Hero_Section from './images/HeroSection/Artwork.svg';
// import ServiceFrame from './components/servicePage/ServiceFrame';
import scrollDown from './images/Icons/Scroll Down.svg';
import subSection1 from './images/Images/Home Page/Image 1.png'
import subSection2 from './images/Images/Home Page/Image 2.png'
import image3 from './images/Images/Home Page/Image 3.png'
// import section4 from './images/Images/Home Page/Image 4.png'
// import cs1 from './images/Images/Case Studies/Case Study 1.png';
// import lb from './images/Icons/Left Arrow Btn.svg';
import Tailor_app from './components/tailor_app';
// import rb from './images/Icons/Right Arrow Btn.svg';
import Navbar from './components/navbar/Navbar'
import Image from './components/Image';
import LinkItem from './components/linkItem';
import Slider from './components/Slider';
// 
function App() {
  
  return (
    <div className="App">
      <section style={{ backgroundImage: `url(${Hero_Section})` }} className="Section_1">
        <Navbar />
        <div className="Hero_text">
          <h1 id="lightText">Is Your Enterprise</h1>
          <h1 id="boldText">Future Ready?</h1>
        </div>
        <div className="HeroScroll">
          <Image src={scrollDown} alt="scrolldown"/>
        </div>
      </section>

         <section>
         <div className="Slide">
             <div className="subSections">
               <h1 id="slide1_Text">We <span id="slide1_Text--light">Are think</span> gestalt</h1>
                 <img id="slide1_img" src={subSection1} alt="img1"/>
              </div>
             <div>
               <p className="slide_p_Text">We're a group of designers and developers who treats our own company as a product. How we work today is the result of a decade of iterations on our processes and tools. We work in small teams, using the latest tools to create a transparent and collaborative space.</p>
             </div>
          </div>

          <div className="Slide">
             <h1 id="boldText">What We <span id="slide1_Text--light">Do</span></h1>
             <div className="subSections">
             <img src={subSection2} alt="img1"/>
                 <p className="slide_p_Text">We transform organisations from within. We work directly with executives at large organisations to reimagine their future. Together, we define a single Northstar based on business priorities to design better processes, products and services.</p>
             </div>
         </div>
       </section>

      <section className="Section_3">
      <h1 className="Section_3_head"><span id="slide1_Text--light">Our</span> Services</h1>
        <p className="slide_p_Text">Stitching tech stacks to come up with a comprehensive solution that transforms your business.</p>
        <div className="divide_section">
            <div className="section_left">
              <LinkItem img={0} title="Tailor-Made Apps" link="/webapps"/>
              <LinkItem img={1} title="Data Science" link="/datascience"/>
              <LinkItem img={2} title="Cyber Security" link="/cybersecurity"/>
              <LinkItem img={3} title="RPA" link="/"/>
              <LinkItem img={4} title="Cloud Services" link="/"/>
              <LinkItem img={5} title="Website Development" link="/"/>
            </div>
            <div className="section_right">
              <Image src={image3} alt="image3"/>
            </div>
        </div>
      </section>

      <section>
        <Slider/>
      </section>
    </div>
    // <div className="App">
    //   <section style={{ backgroundImage: `url(${Hero_Section})` }} className="HeroSection">
    //       <div className="navBar">
    //         <h1>thinkgestalt</h1>
    //         <h2>Menu</h2>
    //       </div>
    //       <div className="HeroText">
    //         <h1>Is Your Enterprise</h1>
    //         <h1>Future Ready?</h1>
    //       </div>
    //       <div className="HeroScroll">
    //         <img src={scrollDown} alt="scroll Icon"/>
    //       </div>
    //   </section>

    //   <section>
    //     <div className="Slide">
    //         <div className="subSections">
    //             <h1 id="slide1_Text">We Are think gestalt</h1>
    //             <img src={subSection1} alt="img1"/>
    //         </div>
    //         <div>
    //           <p className="slideText">We're a group of designers and developers who treats our own company as a product. How we work today is the result of a decade of iterations on our processes and tools. We work in small teams, using the latest tools to create a transparent and collaborative space.</p>
    //         </div>
    //     </div>

    //     <div className="Slide">
    //         <h1>What We Do</h1>
    //         <div className="subSections">
    //         <img src={subSection2} alt="img1"/>
    //             <h1 id="slide2_Text">We transform organisations from within. We work directly with executives at large organisations to reimagine their future. Together, we define a single Northstar based on business priorities to design better processes, products and services.</h1>
    //         </div>
    //     </div>
    //   </section>

    //   <section>
    //     <h1>Our services</h1>
    //     <p>Stitching tech stacks to come up with a comprehensive solution that transforms your business.</p>
    //     <div>
    //       <div className="ServiceSection">
    //         <div>
    //           <ul>
    //             <li>Tailor-Made Apps</li>
    //             <li>Data Science</li>
    //             <li>Cyber Security</li>
    //             <li>RPA</li>
    //             <li>Cloud Services</li>
    //             <li>Website Development</li>
    //           </ul>
    //         </div>
    //         <div>
    //           <img src={section3} alt="section3"/>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section>
    //     <h1>Case Study</h1>
    //     <img src={cs1}  alt="case study 1"/>
    //     <div>
    //       <img src={lb} alt="left"/>
    //       <span>1/3</span>
    //       <img src={rb} alt="right"/>
    //     </div>

    //     <h3>With a decade of experience in Web & Software Solutions, access to top tier talent, we Fast Track the entire process and drive organisational change from within. We bring careful planning, alignment, and aggressive execution so that you can glimpse the Future today.</h3>
    //   </section>

    //   <section>
    //     <h1>Built For Mission- Critical Use Cases</h1>
    //     <div>
    //       <div>By Role</div>
    //     </div>
    //     <div>
    //         <p>CTO Director Agency</p>
    //     </div>
    //     <a href="#">Load More</a>
    //   </section>

    //   <section>
    //     <h1>Let’s talk. Just enter your details and we will reply within 24 hours</h1>
    //     <div className="FormSection">
    //       <img src={section4} alt="formImage"/>
    //       <form>
    //         <input type="text" placeholder="Name"/>
    //         <input type="text" placeholder="Name"/>
    //         <input type="text" placeholder="Name"/>
    //         <textarea rows="6" cols="25"/>
    //         <input type="submit" />
    //       </form>
    //     </div>
    //   </section>
    // </div>
  );
}
export default App;
