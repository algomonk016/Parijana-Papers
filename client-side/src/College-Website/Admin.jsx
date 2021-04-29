import axios from 'axios'
import React, {useEffect, useState} from 'react'
import InputLabel from './Components/InputLabel'
import Heading from './Components/Heading'

function Admin() {
    let url = '/college/document'
    const [file, setFile] = useState('')
    const [data, setData] = useState({
        subCode: '',
        tags: []
    })

    useEffect(()=>{ 
        if(localStorage.getItem('admin') == null) {
            window.location.replace('/college/adminlogin')
        }
        document.title = 'Add Documents'
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault() 
        console.log(data)
        let formData = new FormData()
        formData.append('file', file)
        // console.log(file)

        try {
            const res = await axios.post(url, formData)
            const {subCode, filePath, isSuccessfull, fileName} = res.data
            console.log('file uploaded')
            console.log(res.data)
            
            const newNode = {
                subCode: data.subCode,
                tags: data.tags,
                documentUrl: filePath,
                fileName: fileName,
                uploadedBy: localStorage.getItem('admin')
            }
            const res2 = await axios.post(url+'/Data', newNode)
            const { isSuccessfull2 } = res2.data
            
            if(isSuccessfull === isSuccessfull2 === true) {
                alert('Operation successfull')
                document.getElementById('form').reset()

            }
            else alert('Operation failed')

        } catch(err) {
            console.log(err)
        }
    }

    const handleFileSelect = e => {
        setFile(e.target.files[0])
    }

    let inpStyle = "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";
    return (
        <div className="container p-3 rounded-md shadow-md mx-auto">
            <Heading style="text-center shadow-md" title='Upload Document' />
            <form onSubmit={handleSubmit} id="form" className="my-2 p-3" encType="multipart/form-data">
                <div className="my-3">
                    <InputLabel label="Enter Subject Code"/>
                    <input 
                        type="text" 
                        placeholder="Notes of MTHS-101, ISCS-101 2k19" 
                        className={inpStyle}
                        onChange = {e => setData({...data, subCode: e.target.value})}
                    />
                </div>
                <div className="my-3">
                    <InputLabel label="Attach files"/>
                    <input 
                        type="file" 
                        className="border-0 w-full" 
                        id='customFile'
                        name="file"
                        onChange={handleFileSelect}
                    />
                </div>
                <div className="my-3">
                    <InputLabel label="Please provide files details too"/>
                    <textarea 
                        className={inpStyle} 
                        placeholder="Enter in the order you've selected files, Sub Code, Year and Teacher name"
                        onChange = {e => setData({...data, tags: (e.target.value.toLowerCase()).split(',')})}
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

export default Admin
