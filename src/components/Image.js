import React from 'react'

function Image(props) {
    return (
        <>
            <img src={props.src} alt="{props.text}"/>            
        </>
    )
}

export default Image
