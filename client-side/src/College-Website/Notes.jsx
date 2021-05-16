import React, { useEffect } from 'react'
import Heading from './Components/Heading'
import comeBack from './Assests/Pics/come-back-later.gif'

function Notes() {
    useEffect(()=>{
        document.title = 'Notes - Parijana Papers'
    },[])
    
    return (
        <div className="text-center pt-5">
            <Heading title='Isko aane mein abhi time hai &#128540;'/>
            <img src={comeBack} className="sm:w-1/2 mx-auto" alt=""/>
        </div>
    )
}

export default Notes
