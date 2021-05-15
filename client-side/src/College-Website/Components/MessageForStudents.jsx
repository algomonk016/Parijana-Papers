import React, { useEffect, useState } from 'react'

const MessageForStudents = () => {
    let message = ()=> {
        return(
            <div className="alert-banner container mx-auto w-4/5 top-5">
                <input type="checkbox" className="hidden" id="banneralert" />
                
                <label className="close cursor-pointer flex items-center justify-between w-full p-2 bg-orange-200 rounded-md shadow-md text-orange-700 relative" title="close" for="banneralert">
                    <p className="px-1 py-2">
                        <strong>Important message for Juniors</strong>
                        <br />
                        Bhale hi tumhe yahan pe papers and notes mil jaae, but seniors se interaction krte rehna, 
                        kyunki jo chiz vo bataenge vo tumhe poore internet pe kahin nahi milega
                    </p>
                    
                    <svg className="fill-current text-red-500 absolute top-0 right-0 mt-2 mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                    </svg>
                </label>
            </div>
        )
    }

    const [banner, setbanner] = useState(false)

    useEffect(()=>{
        if(typeof(Storage)!='undefined') {
            if(sessionStorage.getItem('isOpenBanner')===null) {
                setbanner(true)
                sessionStorage.setItem('isOpenBanner', true)
            }
        }
    },[])

    return (
        <>
            {banner?message():''}
        </>
    )
}

export default MessageForStudents
