import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandsHelping} from '@fortawesome/free-solid-svg-icons'

function SupportMessage(props) {
    return (
        <p className="my-1 text-lg">
            <FontAwesomeIcon icon={faHandsHelping}/> {props.message}
        </p>
    )
}

export default SupportMessage
