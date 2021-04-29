import React from 'react'

function Heading(props) {
    let style = `text-xl pb-3 capitalize mt-5 ${props.style}`;
    return (    
        <p className={style}>{props.title}</p>
    )
}

export default Heading
