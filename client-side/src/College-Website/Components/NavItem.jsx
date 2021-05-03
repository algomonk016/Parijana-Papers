import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';

function NavItem(props) {
    let style = `md:mr-2 m-1 sm:mx-3 hover:text-${props.color}-700 bg-${props.color}-200 text-${props.color}-600 px-3 py-1 rounded-md cursor-pointer`;
    let link = '/college'+props.directTo
    return (
        <NavLink to={link} className={style}>
            <FontAwesomeIcon icon={props.icon}/>
            <span className="mx-1 tracking-wider">{props.item}</span>
        </NavLink>
    )
}

export default NavItem
