import React, { useEffect } from 'react'
import Heading from './Components/Heading'
import comeBack from './Assests/Pics/come-back-later.gif'
function Notes() {
    useEffect(()=>{
        document.title = 'Notes'
    },[])
    return (
        <div className="text-center">
            <Heading title='Isko aane mein abhi time hai &#128540;'/>
            <img src={comeBack} className="w-1/2 mx-auto" alt=""/>
        </div>
    )
}

export default Notes
