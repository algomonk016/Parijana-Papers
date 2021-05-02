import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Heading from './Components/Heading'
import Documents from './Components/Documents'

const AdminPapers = async => {
    let inpStyle = "w-7/12 bg-white rounded border shadow-md rounded-md border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";
    const url = '/college/document'
    
    const [papers, setPapers] = useState([])
    const [inpData, setInpData] = useState()
    const [allpapers, setAllpapers] = useState([])

    useEffect(()=> {
        if(localStorage.getItem('admin') == null) {
            window.location.replace('/college/adminlogin')
        }
        getAllPapers()
        document.title = 'Question Papers'
    }, [])
    
    useEffect(()=>{
       getPapers()
    },[inpData])

    const getAllPapers = async () => {
        const res = await axios.get(url)
        setPapers(await res.data)
        setAllpapers(res.data)
    }
    
    const getPapers = async () => {
        const srchUrl = url + '/search'
        if(inpData) {
            let tags = inpData.trim().toLowerCase().split(' ')
            const res = await axios.post(srchUrl, tags)
            if(res.data != []) setPapers(res.data)
        } else {
            setPapers(allpapers)
        }
    }
    
    // contains all the papers and display it in table
    let papersList
    if(papers!=null) {
        papersList = papers.map(obj => {
            return(
                <Documents id={obj._id} subCode = {obj.subCode} tags = {obj.tags.length} dateAdded = {obj.dateAdded} url = {obj.filePath} uploadedBy = {obj.uploadedBy} />
            )
        })
    }
    return (
        <div>
            <div className="flex justify-center px-5">
                <input type="text" onChange={e => setInpData(e.target.value)} className={inpStyle} placeholder="Search here"/>
            </div>

            <Heading style="text-center shadow-md w-4/5 mx-auto bg-gray-200 pt-1 text-3xl" title={'papers '} />

            <table className="w-4/5 mx-auto">
                <thead>
                    <td className="px-5"> <Heading title='PDF'/> </td>
                    <td className="px-5"> <Heading title='tags'/> </td>
                    <td className="px-5"> <Heading title='uploaded by'/> </td>
                    <td className="px-5"> <Heading title='date Added'/> </td>
                    <td className="text-center"> <Heading title='Actions'/> </td>
                </thead>
                <tbody>
                    {papersList}
                </tbody>
            </table>
        </div>
    )
}

export default AdminPapers