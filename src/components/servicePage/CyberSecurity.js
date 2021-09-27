import React from 'react'
import Image from '../Image'
import cyberImage from '../../images/Images/Service Pages/Cyber Security.png'
import nextBtn from '../../images/Icons/nextBtn.svg';
import './CyberSecurity.css';
import Navbar from '../navbar/Navbar';
import ServiceHero from './serviceHero';

function CyberSecurity() {
    var title1 = "Cyber";
  var title2 = "Security";
  var text1 = "Proactively identify threats to your digital infrastructure so you can minimise damage, reduce costs and financial losses, and prevent future attacks in an ever-evolving landscape. We’ll help you uncover and fix security issues before product launch.";
  var text2 = "Get an unbiased expert evaluation of your business processes, products and systems – according to industry security standards and regulations.";
  var subText1 = "We provide strategic communications, and data-driven insights to improve customer experience and revenue growth.";
  var subText2 = "We help tech companies scale engineering capacity and deliver great software";
    return (
        <div className="service">
            <Navbar/>
            <ServiceHero title1={title1} title2={title2} subtext1={text1} subtext2={text2}/>
            <section className="cyber_section2">
                <div className="section2_content">
                    <div className="section2-left">
                        <p>subtext1</p>
                        <p>subtext2</p>
                    </div>
                    <div className="section2-right">
                        <Image src={cyberImage} alt="Cyber Security"/>
                    </div>
                </div>
                <div >
                    <Image src={nextBtn} alt="next button"/>
                </div>
            </section>
        </div>
    )
}

export default CyberSecurity
