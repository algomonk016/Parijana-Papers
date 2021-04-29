import React from 'react'
import { Link } from 'react-router-dom'

function NavbarBrand(props) {
    return (
        <Link to='/college' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
            <img src={props.icon} className="rounded-full flex-auto w-10"/>
            <span className="ml-3 text-xl flex-auto">{props.brand}</span>
        </Link>
    )
}

export default NavbarBrand