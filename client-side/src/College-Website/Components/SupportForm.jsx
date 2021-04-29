import React, {useEffect, useState} from 'react'
import InputLabel from './InputLabel'
import {Animated} from 'react-animated-css'
function SupportForm() {
    // let url = 'http://localhost:5000/college/document'
    const [document, setDocument] = useState({
        senderMail:'',
        fileTitle:'',
        file:[],
        tags:''
    })

    useEffect(()=>{
        // alert('Currently, the form has been disabled')
    },[])

    let handleSubmit = (e)=> {
        e.preventDefault()
        console.log(document)
    }

    let inpStyle = "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";
    return (
        <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
            <div className="container p-3 rounded-md shadow-md">
                <div className="text-center text-gray-700 mb-2 text-xl">
                    <span className="text-3xl">Support Us</span> <br/>
                    By providing 
                    <span className="font-medium"> Notes </span> 
                    and 
                    <span className="font-medium"> Papers </span> 
                    that we are missing
                </div>
                <form action="" className="my-2 p-3">
                    <div className="">
                        <InputLabel label="Provide your email"/>
                        <input 
                            type="email" 
                            placeholder="example@gmail.com" 
                            className={inpStyle}
                            onChange = {e => setDocument({...document, senderMail: e.target.value})}
                            disabled
                        />
                    </div>
                    <div className="my-3">
                        <InputLabel label="Enter title"/>
                        <input 
                            type="text" 
                            placeholder="Notes of MTHS-101, ISCS-101 2k19" 
                            className={inpStyle}
                            disabled
                            onChange = {e => setDocument({...document, fileTitle: e.target.value})}
                        />
                    </div>
                    <div className="my-3">
                        <InputLabel label="Attach files"/>
                        <input 
                            type="file" 
                            className="border-0 w-full" 
                            onChange={e=> setDocument({...document, file:e.target.value})}
                            disabled
                            multiple
                        />
                    </div>
                    <div className="my-3">
                        <InputLabel label="Please provide files details too"/>
                        <textarea 
                            className={inpStyle} 
                            placeholder="Enter in the order you've selected files, Sub Code, Year and Teacher name"
                            disabled
                            onChange = {e => setDocument({...document, tags: e.target.value})}
                        />
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-10">
                        <button 
                            type="submit" 
                            className="bg-green-300 text-green-700 hover:bg-green-400 hover:text-green-800 py-3 rounded-md"
                            disabled
                            onClick = {handleSubmit}
                            >
                                Send Files
                            </button>
                        <button disabled type="reset" className="bg-red-300 text-red-700 hover:bg-red-400 hover:text-red-800 py-3 rounded-md" >Reset</button>
                    </div>
                </form>
            </div>
        </Animated>
    )
}

export default SupportForm
