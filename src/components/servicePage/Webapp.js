import React from 'react'
import Image from '../Image'

import webappImage from '../../images/Images/Service Pages/Tailor-Made Web Apps.png'
import nextBtn from '../../images/Icons/nextBtn.svg';
import './service.css';
import Navbar from '../navbar/Navbar';
import ServiceHero from './serviceHero';
import './Webapp.css'
function Webapp() {
    var title1 = "Tailor-Made";
  var title2 = "Web Apps";
  var text1 = "We listen to your ideas and create custom software solutions from the ground up, designed especially for your business. Our company is an expert in developing different kinds of web applications to meet various goals.";
  var text2 = "Including high-performing progressive web apps (PWA), SaaS applications with scalable architecture, and dynamic single-page apps (SPA).";

    return (

        <div className="service">
            <Navbar/>
            <ServiceHero title1={title1} title2={title2} subtext1={text1} subtext2={text2}/>
            <section className="webapp_section_2">
                <div className="webapp_s2_hero">
                    <Image src={webappImage} alt="webImage"/>
                </div>
                <p className="webapp_subtext-1">We help assuring the development of your custom module as per your requirements and to make the workflow easy with different practices.</p>
                <div className="webapp_nextBtn">
                    <Image src={nextBtn} alt="next button"/>
                </div>
            </section>
        </div>
    )
}

export default Webapp
