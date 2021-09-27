import React from 'react'
import Navbar from './navbar/Navbar'
import Image from './Image'
import webappImage from '../images/Images/Service Pages/Tailor-Made Web Apps.png'
import nextBtn from '../images/Icons/nextBtn.svg';
import './Tailor_app.css'
function Tailor_app() {
    return (
        <div className="webapp">
            <Navbar/>
            <section className="webapp_section_1">
                <span id="text--b">Tailor-Made</span>
                <p id="text--i">Web Apps</p>
                <div className="webapp_subtext-1">
                    <p>We listen to your ideas and create custom software solutions from the ground up, designed especially for your business. Our company is an expert in developing different kinds of web applications to meet various goals.</p>
                </div>
                <div className="webapp_subtext-2">
                    <p>Including high-performing progressive web apps (PWA), SaaS applications with scalable architecture, and dynamic single-page apps (SPA).</p>
                </div>
                <hr/>
            </section>

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

export default Tailor_app
