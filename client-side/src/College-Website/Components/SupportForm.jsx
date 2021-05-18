import React from 'react'
import InputLabel from './InputLabel'
import {Animated} from 'react-animated-css'

let SupportForm =()=> {
    let inpStyle = "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";
    let nextURL = window.location.href + '/success'

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
                <form action="https://formsubmit.co/algomonk016@gmail.com" method="POST" encType="multipart/form-data" className="my-2 p-3">
                    <div className="my-1">
                        <InputLabel label="Your Name"/>
                        <input 
                            type="text" 
                            placeholder="Enter Your Name Here.." 
                            className={inpStyle}
                            required
                        />
                    </div>
                    <div className="my-3">
                        <InputLabel label="Enter title"/>
                        <input 
                            type="text" 
                            placeholder="MTH-S101 Quiz-2" 
                            className={inpStyle}
                            required
                        />
                    </div>
                    <div className="my-3">
                        <InputLabel label="Attach files"/>
                        <input 
                            type="file" 
                            className="border-0 w-full"
                            name="files" 
                            accept="image/png, image/jpeg, application/pdf"
                            required
                        />
                    </div>
                    <div className="my-3">
                        <InputLabel label="Please provide files details too"/>
                        <textarea 
                            className={inpStyle} 
                            placeholder="Sem-1 TeacherName1 Branch-Name 2021"
                            required
                        />
                    </div>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={nextURL} />
                    <input type="hidden" name="_template" value="table" />
                    <input type="text" name="_honey" className="hidden" />
                    <div className="mt-3 grid grid-cols-2 gap-10">
                        <button 
                            type="submit" 
                            className="bg-green-300 text-green-700 hover:bg-green-400 hover:text-green-800 py-3 rounded-md"
                            >
                                Send Files
                            </button>
                        <button type="reset" className="bg-red-300 text-red-700 hover:bg-red-400 hover:text-red-800 py-3 rounded-md" >Reset</button>
                    </div>
                </form>
            </div>
        </Animated>
    )
}

export default SupportForm
