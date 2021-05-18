import React, { useEffect } from 'react'
import gif from './Assests/Pics/successMailBlue.gif'
import Heading from './Components/Heading'

const Success = () => {
    useEffect(()=>{
        document.title = 'Success 🎉 - Parijana Papers'
    },[])
    return (
        <div className="container mx-auto my-10">
            <Heading title="Document Sent Successfully 🎉" style = "text-center bg-gray-200 py-3 rounded-lg shadow-lg text-green-700" />
            <img src={gif} className="md:mx-auto md:w-1/2 w-screen mt-5" alt="Email Sent Successfully"/>
            <Heading title="Thankyou for your Support 😇" style = "text-center bg-gray-200 py-3 rounded-lg shadow-lg text-green-700" />
        </div>
    )
}

export default Success
