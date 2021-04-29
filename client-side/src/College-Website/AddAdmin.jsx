import {React, useEffect, useState} from 'react'
import Heading from './Components/Heading'
import InputLabel from './Components/InputLabel'
import axios from 'axios'


function AddAdmin() {
    let inpStyle = "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    
    useEffect(()=>{
        document.title = 'Admin Registration'
    },[])

    const [formData, setFormData] = useState({
        name:'',
        adminId:'',
        pass:''
    })

    let handleSubmit = e => {
        e.preventDefault()
        // console.log(formData)
        
        const newNode = {
            name: formData.name,
            adminId: formData.adminId,
            password: formData.pass
        }
        // console.log(newNode)
        let url = '/college/admin'

        axios.post(url, newNode)
            .then(res => {
                window.location.replace('/college/adminlogin')
            })
            .catch(err => console.log('Something went wrong!'))   
    }
    return (
        <div>
            <Heading style="text-center" title="Register Admin" />
            <div className="flex justify-center">
                <form className="w-3/5">
                    <div>
                        <InputLabel label="Name"/>
                        <input 
                            type="text" 
                            onChange={e => setFormData({...formData, name: e.target.value})} 
                            placeholder="Enter full name" 
                            className={inpStyle}
                        />
                    </div>
                    <div className="my-3">
                        <InputLabel label="Admin Id"/>    
                        <input 
                            type="text" 
                            onChange={e => setFormData({...formData, adminId:e.target.value})} 
                            placeholder="Enter unique admin id" 
                            className={inpStyle}
                        />
                    </div>
                    <div className="my-3">
                        <InputLabel label="Password"/>    
                        <input 
                            type="password" 
                            onChange={e => setFormData({...formData, pass:e.target.value})} 
                            placeholder="****" 
                        className={inpStyle}/>
                    </div>
                    <div className="my-3 text-center">
                        <button 
                            className="rounded-md bg-green-400 text-green-700 hover:bg-green-500 hover:text-green-800 py-2 px-3" 
                            onClick={handleSubmit} >
                            Register Admin
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddAdmin
