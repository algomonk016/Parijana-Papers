import React from 'react'
import FileDetails from './FileDetails'
import pic from '../Assests/Pics/pdf.png'
import axios from 'axios'
import {Animated} from "react-animated-css";
import '../style.css'

function PDF(props) {
    let url = 'http://localhost:5000/'+props.url
    const handleOpen = async ()=> {
        let axiosUrl = 'college/document/inc/'+props.id
        const res = await axios.patch(axiosUrl, {id: props.id})
        window.location.assign(url)
    }

    return (
        <Animated animationIn="slideInDown" animationOut="slideOutUp" animationInDuration={900} isVisible={true}>
            <div onClick={handleOpen} className="shadow-lg w-48 bg-white rounded-md p-3 m-3 cursor-pointer pdfDetails">
                <img src={pic} className="" />
                <div className="mt-2"> <FileDetails text={props.subCode} /> </div>
            </div>
        </Animated>
    )
}

export default PDF
