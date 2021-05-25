import React from 'react'
import FileDetails from './FileDetails'
import pic from '../Assests/Pics/pdf.png'
import axios from 'axios'
import { Animated } from "react-animated-css";
import '../style.css'

let PDF = (props) => {
    // let downloadLink = props.downloadLink
    let viewLink = props.viewLink
    const handleOpen = async () => {
        let axiosUrl = 'college/document/inc/' + props.id
        axios.patch(axiosUrl, { id: props.id })
        window.open(viewLink)
    }

    return (
        <Animated animationIn="zoomIn" animationOut="slideOutUp" animationInDuration={750} isVisible={true}>
            <div onClick={handleOpen} className="shadow-lg w-40 bg-white rounded-md p-3 m-2 cursor-pointer pdfDetails">
                <img src={pic} className="" />
                <div className="mt-2"> <FileDetails text={props.subCode} /> </div>
            </div>
        </Animated>
    )
}

export default PDF