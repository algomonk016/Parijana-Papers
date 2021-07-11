import React from 'react'
import NavbarBrand from './NavbarBrand';
import {faBookOpen, faPager, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import NavItem from './NavItem'
import brandPic from '../Assests/Pics/army.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <header className="text-gray-600 body-font shadow-md mb-3">
            <div className="md:w-11/12 mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <NavbarBrand icon = {brandPic} brand = 'Parijana'/>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavItem icon = {faPager} color='indigo' item='Papers' directTo='/papers'/>
                    <NavItem icon = {faBookOpen} color='red' item='Notes' directTo='/notes' />
                    <NavItem icon = {faAddressCard} item='Support' directTo='/support' />
                    <a href="https://discord.gg/X4pUGEYJ5r" className="shaking inline-flex items-center bg-purple-200 border-0 py-1 px-2 text-purple-600 hover:text-purple-700 rounded-md text-base mt-1">
                        <span className="text-lg mr-1"><FontAwesomeIcon icon={faDiscord} /></span>
                        <span className="mx-1 tracking-wide">Join Evolution UIET</span>
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
