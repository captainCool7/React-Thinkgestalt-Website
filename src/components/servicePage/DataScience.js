import React from 'react'
import Image from '../Image'
import dataScienceImage from '../../images/Images/Service Pages/Data Science.png'
import nextBtn from '../../images/Icons/nextBtn.svg';
import './DataScience.css';
import Navbar from '../navbar/Navbar';
import ServiceHero from './serviceHero';

function DataScience() {
    var title1 = "Data";
  var title2 = "Science";
  var text1 = "Consumers are changing the way they buy. We’re changing the way you think. We give brands the fastest insight into what consumers buy and why. Establishing Data-driven strategy across organization to improve performance, reduce risks, and plan for what’s next. Data can make what is impossible today, possible tomorrow.";
  var text2 = "We provide strategic communications, and data-driven insights to improve customer experience and revenue growth. We help tech companies scale engineering capacity and deliver great software";
  var subText1 = "We provide strategic communications, and data-driven insights to improve customer experience and revenue growth.";
  var subText2 = "We help tech companies scale engineering capacity and deliver great software";
  return (
        <div className="service">
            <Navbar/>
            <ServiceHero title1={title1} title2={title2} subtext1={text1} subtext2={text2}/>
            <section className="webapp_section_2">
                <div className="webapp_s2_hero">
                    <Image src={dataScienceImage} alt="webImage"/>
                </div>
                <div className="webapp_subtext-1">
                    <p>{subText1}</p>
                </div>
                <div className="webapp_subtext-2">
                    <p>{subText2}</p>
                </div>
                <div className="webapp_nextBtn">
                    <Image src={nextBtn} alt="next button"/>
                </div>
            </section>
        </div>
    )
}

export default DataScience
