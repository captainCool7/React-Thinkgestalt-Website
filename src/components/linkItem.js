import React from 'react'
import './linkItem.css';
import {Link} from 'react-router-dom'
import Image from './Image';
import autoservice from '../images/Icons/Automation Services.svg';
import webapps from '../images/Icons/Tailor-Made Web Apps.svg';
import datascience from '../images/Icons/Data Science.svg';
import cybersecurity from '../images/Icons/Cyber Security.svg';
import cloud from '../images/Icons/Cloud Services.svg';
import webdev from '../images/Icons/Website Development.svg';
function LinkItem(props) {
    var arr=[webapps, datascience,cybersecurity,autoservice,cloud,webdev];
    return (
        <div className="link_item">
            
            <i id="link_icon"><Image src={arr[props.img]} alt="icon"/></i>
            <h1 id="link_title"><Link className="custom_link" to={props.link}>{props.title}</Link></h1>
        </div>
    )
}

export default LinkItem;
