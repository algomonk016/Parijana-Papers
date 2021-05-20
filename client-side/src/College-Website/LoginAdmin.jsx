import {React, useState, useEffect} from 'react'
import Heading from './Components/Heading'
import InputLabel from './Components/InputLabel';
import axios from 'axios'
import {Link} from 'react-router-dom'

function LoginAdmin() {
    let url = '/college/admin/login'
    let inpStyle = "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    
    const [formData, setFormData] = useState({
        adminId:'',
        password:''
    })

    useEffect(()=>{
        if(sessionStorage.getItem('isAdmin') != null) {
            window.location.replace('/college/adminPapers')
        }
        document.title = 'Admin Login'

    }, [])

    let handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(url, formData)
            .then(res => {
                if(res.data.adminId) {
                    console.log(res.data)
                    if(res.data.hasPermission === true) {
                        sessionStorage.setItem('isAdmin', formData.adminId)
                        window.location.replace('/college/adminPapers')
                    } else {
                        alert('you are not authorized')
                    }
                }
                else alert('incorrect credentials')
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div className='my-2 p-3'>
            <Heading style='text-center' title='Admin Login'/>
            <div className="flex justify-center mt-4">
                <form className="w-3/5">
                    <div>
                        <InputLabel label="Enter Admin id"/>
                        <input 
                            type="text" 
                            onChange={e => setFormData({...formData, adminId: e.target.value})} 
                            placeholder="Enter unique admin id" 
                            className={inpStyle}
                        />
                    </div>
                    <div className="my-3">
                        <InputLabel label="Enter password"/>    
                        <input 
                            type="password" 
                            onChange={e => setFormData({...formData, password:e.target.value})} 
                            placeholder="****" 
                            className={inpStyle}
                        />
                    </div>
                    <div className="my-3 text-center">
                        <button 
                            className="rounded-md bg-purple-400 text-purple-700 hover:bg-purple-500 hover:text-purple-800 py-2 px-3" 
                            onClick={handleSubmit}
                        >   Login
                        </button>
                        <Link 
                            className="ml-3 rounded-md bg-blue-300 text-blue-700 hover:bg-blue-500 hover:text-blue-800 py-2 px-3" 
                            to='/college/addAdmin'>
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginAdmin
