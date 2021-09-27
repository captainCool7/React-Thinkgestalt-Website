import React from 'react'

function ServiceHero(props) {
    return (
        <div>
            <section className="webapp_section_1">
                <span id="text--b">{props.title1}</span>
                <p id="text--i">{props.title2}</p>
                <div className="webapp_subtext-1">
                    <p>{props.subtext1}</p>
                </div>
                <div className="webapp_subtext-2">
                    <p>{props.subtext2}</p>
                </div>
                <hr/>
            </section>
        </div>
    )
}
export default ServiceHero;
