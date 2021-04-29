import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandPointRight} from '@fortawesome/free-solid-svg-icons'
const ModalMessage = (props) => {
    return (
        <div>
            <FontAwesomeIcon icon={faHandPointRight} />
            <span className="font-serif tracking-wide m-2 text-sm">{props.msg}</span>
        </div>
    )
}

export default ModalMessage
