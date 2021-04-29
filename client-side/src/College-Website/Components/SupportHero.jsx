import React from 'react'
import ContactUs from '../Assests/Pics/contact-us-2.png'
import SupportMessage from './SupportMessage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandPointRight} from '@fortawesome/free-solid-svg-icons'
import {Animated} from "react-animated-css";

function SupportHero() {
    return (
        <div className="rounded-md shadow-md">
            <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={50} isVisible={true}>
                <img src={ContactUs} alt="" className="w-full"/>
            </Animated>
            <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                <div className="container px-8 py-6 bg-gray-200 font-serif">
                    <SupportMessage message="If you have any Question Papers or Notes that we don't have, then do share it. Your single contribution will be very helpful for us and for our juniors." />
                    <SupportMessage message="Feel free to give feedback and to tell the areas of the website to improve." />
                    <span className="text-lg"> <FontAwesomeIcon icon={faHandPointRight} /> You can also send the files to <a href="mailto:algomonk016@gmail.com" className="italic cursor-pointer hover:underline hover:text-blue-700">algomonk016@gmail.com</a></span>
                </div>
            </Animated>
        </div>
    )
}

export default SupportHero