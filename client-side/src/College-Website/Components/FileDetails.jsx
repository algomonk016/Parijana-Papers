import React from 'react'

function FileDetails(props) {
    let style = "text-sm py-1 px-2 mr-2 text-gray-700 rounded bg-gray-300 border-gray-700";
    return (
        <span className={style}>{props.text}</span>
    )
}

export default FileDetails
