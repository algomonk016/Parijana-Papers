import React from 'react'

function InputLabel(props) {
    let labelStyle = "leading-7 text-md text-gray-600";

    return (
        <div>
            <label className={labelStyle}>{props.label}</label>
        </div>
    )
}

export default InputLabel
