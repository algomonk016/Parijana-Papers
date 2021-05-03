import React, { useEffect } from 'react'
import SupportForm from './Components/SupportForm'
import SupportHero from './Components/SupportHero'

function Support() {
    useEffect(()=>{
        document.title = 'Support Us'
    },[])
    return (
        <div className="container md:grid md:grid-cols-2 gap-5 rounded-lg mx-auto justify-around text-gray-600 body-font relative py-5">
            <SupportHero />
            <SupportForm />
        </div>
    )
}

export default Support
