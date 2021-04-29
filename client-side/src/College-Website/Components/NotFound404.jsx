import React from 'react'
import Heading from './Heading'
import notfound from '../Assests/Pics/NotFound.jpg'
function NotFound404() {
    return (
        <div className="mt-5 text-center">
            <Heading title='Kahan bhatak rahe ho janab, ye page bana hi nahi hai &#128514;' />
            <img src={notfound} className="mx-auto w-1/2 mt-5 rounded-lg" alt=""/>
        </div>
    )
}

export default NotFound404
