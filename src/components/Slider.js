import React,{ useState} from 'react'
import cs1 from '../images/Images/Case Studies/Case Study 1.png';
import cs2 from '../images/Images/Case Studies/Case Study 2.png';
import rb from '../images/Icons/Right Arrow Btn.svg';
import lb from '../images/Icons/Left Arrow Btn.svg';
import Image from './Image';
import './Slider.css';
function Slider() {
    const [number,setNumber] = useState(0);

    var slide1 = {
        title: "Cloud System",
        subtitle: "Cloud Networks and Systems",
    }
    var slide2 = {
        title: "Robotic Process Automation",
        subtitle: "80% productivity gain in Packaging Company",
    }
    var arr=[slide1,slide2];
    return (
        <div className="slider">
            <p className="slider-title"><span className="section_4_span">Case</span> Study</p>
            <section style={{ backgroundImage: `url('${number===1?cs2:cs1}')` }}  className="slider_img">
                <div>
                <h1>{arr[number].title}</h1>
                <p>{arr[number].subtitle}</p>
                </div>
            </section>
            <div className="slider_btn">
                <button id="img_btn" onClick={()=>setNumber(number>0?number-1:number)}><Image  src={lb} alt="left button"/></button>
                <span>{number+1}/2</span>
                <button id="img_btn" onClick={()=>setNumber(number<1?number+1:number)}><Image src={rb} alt="right button"/></button>
            </div>
            <p className="section_4_p">With a decade of experience in Web & Software Solutions, access to top tier talent, we Fast Track the entire process and drive organisational change from within. We bring careful planning, alignment, and aggressive execution so that you can glimpse the Future today.</p>
        </div>
    )
}

export default Slider
