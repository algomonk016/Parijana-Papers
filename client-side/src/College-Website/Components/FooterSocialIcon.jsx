import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
const FooterSocialIcon = (props) => {
    switch(props.p) {
        case 'linkedin':
            return <a href="https://www.linkedin.com/in/shivesh-tiwari-21bbb0190/" className="ml-3 text-2xl cursor-pointer text-blue-700 transition duration-500 ease-in-out hover:text-gray-700 transform hover:-translate-y-1 hover:scale-110"><FontAwesomeIcon icon={faLinkedin} /></a>
        case 'instagram':
            return <a href="https://www.instagram.com/tshiv.esh/" className="ml-3 text-2xl cursor-pointer text-pink-600 transition duration-500 ease-in-out hover:text-gray-700 transform hover:-translate-y-1 hover:scale-110"><FontAwesomeIcon icon={faInstagram} /></a>
        case 'github':
            return <a href="https://github.com/algomonk016" className="ml-3 text-2xl cursor-pointer text-purple-700 transition duration-500 ease-in-out hover:text-gray-700 transform hover:-translate-y-1 hover:scale-110"><FontAwesomeIcon icon={faGithub} /></a>
        default:
            return <a href="https://twitter.com/ShiveshTiwariS1" className="ml-3 text-2xl cursor-pointer text-blue-600 transition duration-500 ease-in-out hover:text-gray-700 transform hover:-translate-y-1 hover:scale-110"><FontAwesomeIcon icon={faTwitter} /></a>
    }
}

export default FooterSocialIcon
