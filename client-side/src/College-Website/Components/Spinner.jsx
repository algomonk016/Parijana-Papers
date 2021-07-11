import React from 'react'
import { useState } from "react";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;

const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#E9421E");
    return (
        <div className="p-5 my-auto ml-10">
            <ScaleLoader color={color} loading={loading} size={105} />
        </div>
    )
}

export default Spinner
