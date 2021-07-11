import React from 'react'
import ContactUs from '../Assests/Pics/contact-us-2.png'
import SupportMessage from './SupportMessage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Animated } from "react-animated-css";

function SupportHero() {
    return (
        <div className="rounded-md shadow-md">
            <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={50} isVisible={true}>
                <img src={ContactUs} alt="" className="w-5/6 mx-auto"/>
            </Animated>
            <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                <div className="px-8 py-8 bg-gray-100 font-serif">
                    <SupportMessage message="If you have any Question Papers or Notes that we don't have, then do share it. Your single contribution will be very helpful for us and for our juniors." />
                    <SupportMessage message="Feel free to give feedback and to tell the areas of the website to improve." />
                    <span className="text-lg"> 
                        <FontAwesomeIcon icon={faHandPointRight} /> You can also send the files to 
                        <a href="mailto:algomonk016@gmail.com" 
                            className="italic cursor-pointer hover:underline hover:text-blue-700"
                            >
                            <span className="text-indigo-500 mx-1 ml-2"><FontAwesomeIcon icon={faEnvelope} /> algomonk016@gmail.com </span>
                        </a>
                    </span> <br />
                    <span className="text-lg"> 
                        <FontAwesomeIcon icon={faHandPointRight} /> If you liked it, then you can star it on 
                        <a href="https://github.com/algomonk016/Parijana-Papers" 
                            className="italic cursor-pointer hover:underline hover:text-blue-700">
                            <span className="text-purple-500 mx-1"><FontAwesomeIcon icon={faGithub} /> Parijana-Papers </span>
                        </a>
                    </span> <br />
                    <span className="text-lg"> 
                        <FontAwesomeIcon icon={faHandPointRight} /> Do checkout 
                        <a href="https://www.youtube.com/c/Gocode" 
                            className="italic cursor-pointer hover:underline hover:text-blue-700">
                            <span className="text-red-500 mx-1"><FontAwesomeIcon icon={faYoutube} /> Go Code</span>
                        </a> 
                        for awesome programming videos.</span>
                </div>
            </Animated>
        </div>
    )
}

export default SupportHero