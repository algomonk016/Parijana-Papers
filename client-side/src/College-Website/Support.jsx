import React, { useEffect } from 'react'
import SupportForm from './Components/SupportForm'
import SupportHero from './Components/SupportHero'
import SupportModal from './Components/SupprtModal'

function Support() {
    useEffect(()=>{
        document.title = 'Support Us - Parijana Papers'
    },[])
    return (
        <>
            <SupportModal />
            <div className="container md:grid md:grid-cols-2 gap-5 rounded-lg mx-auto justify-around text-gray-600 body-font relative py-5">
                <SupportHero />
                <SupportForm />
            </div>
        
        </>
    )
}

export default Support
