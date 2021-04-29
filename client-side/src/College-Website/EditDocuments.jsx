import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InputLabel from './Components/InputLabel'
import Heading from './Components/Heading'

function EditDocuments() {
    
    const url = new URL(window.location.href)
    const id = url.searchParams.get('id')

    const [file, setFile] = useState('')
    const [data, setData] = useState({
        subCode: '',
        tags: []
    })
    
    const getData = async () => {
        const axiosUrl = '/college/document/' + id
        const res = await axios.get(axiosUrl)
        // console.log(res.data)
        setData({...data, subCode: res.data.subCode, tags: res.data.tags})
    }
    
    useEffect(()=> {
        if(localStorage.getItem('admin') == null) {
            window.location.replace('/college/adminlogin')
        }
        getData()
        document.title = 'Edit Documents'

    }, [])
    
    const handleSubmit = async(e)=> {
        e.preventDefault()
        const axiosUrl = '/college/document/'+ id

        const newNode = {
            subCode: data.subCode,
            tags: data.tags
        }

        const res = await axios.patch(axiosUrl, newNode)
        const {isSuccess} = res.data

        if(isSuccess == true) {
            alert('Successfull')
            window.location.replace('/college/adminPapers')
        } else {
            alert('Failed')
        }
    }
    

    let inpStyle = "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";
    return (
        <div className="container p-3 rounded-md shadow-md mx-auto">
            <Heading style="text-center shadow-md" title='Update Document' />
            <form onSubmit={handleSubmit} id="form" className="my-2 p-3" encType="multipart/form-data">
                <div className="my-3">
                    <InputLabel label="Enter Subject Code"/>
                    <input 
                        type="text" 
                        placeholder="Notes of MTHS-101, ISCS-101 2k19" 
                        className={inpStyle}
                        value = {data.subCode}
                        onChange = {e => setData({...data, subCode: e.target.value})}
                    />
                </div>
                <div className="my-3">
                    <InputLabel label="Please provide files details too"/>
                    <textarea 
                        className={inpStyle} 
                        placeholder="Enter in the order you've selected files, Sub Code, Year and Teacher name"
                        value = {data.tags}
                        onChange = {e => setData({...data, tags: e.target.value.split(',')})}
                    />
                </div>

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
    )
}

export default EditDocuments
