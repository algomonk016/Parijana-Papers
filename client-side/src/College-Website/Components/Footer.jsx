import React from 'react'
import FooterSocialIcon from './FooterSocialIcon'
import para from '../Assests/Pics/army.jpg'
const Footer = () => {
    return (
        <footer className="text-gray-600 body-font border shadow-inner w-screen">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img src={para} className="w-10" alt=""/>
                    <span className="ml-3 text-xl">Parijana</span>
                </a>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <FooterSocialIcon p='linkedin' />
                    <FooterSocialIcon p='instagram' />
                    <FooterSocialIcon p='github' />
                    <FooterSocialIcon p='twitter' />
                </span>
            </div>
        </footer>
    )
}

export default Footer
