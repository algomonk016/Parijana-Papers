import React, { useEffect, useState } from 'react'
import NavbarBrand from './NavbarBrand';
import {faBookOpen, faPager, faAddressCard, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons'
import NavItem from './NavItem'
import brandPic from '../Assests/Pics/army.jpg'
function AdminNavbar() {
    const [admin, setAdmin] = useState(false)
    useEffect(()=> {
        if(localStorage.getItem('admin') != null) {
            setAdmin(true)
        }
    }, [])
    
    const handleClick = () => {
        localStorage.removeItem('admin')
        setAdmin(false)
    }

    let navbar = (
        admin == true? 
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <NavItem icon = {faPager} color='indigo' item='Papers' directTo='/adminPapers'/>
                <NavItem icon = {faBookOpen} color='red' item='Add Papers' directTo='/addPapers' />
                <NavItem icon = {faAddressCard} item='Admins List' directTo='/adminsList' />
                <button onClick={handleClick}><NavItem icon = {faSignOutAlt} color='red' directTo='/adminlogin' item={'logout ' + localStorage.getItem('admin')}/></button>   
            </nav>
            :
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <NavItem icon = {faUser} color='green' item='Login' directTo='/adminlogin' /> 
            </nav>
            )
    return (
        <header className="text-gray-600 body-font shadow-md mb-3">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <NavbarBrand icon = {brandPic} brand = 'Parijana'/>
                {navbar}
            </div>
        </header>
    )
}
export default AdminNavbar