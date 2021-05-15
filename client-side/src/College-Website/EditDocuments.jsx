import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InputLabel from './Components/InputLabel'
import Heading from './Components/Heading'

let EditDocuments = () => {
    const url = new URL(window.location.href)
    const id = url.searchParams.get('id')

    const [data, setData] = useState({
        subCode: '',
        tags: []
    })

    const [prevData, setPrevData] = useState({
        subCode: '',
        tags: ''
    })

    const getData = async () => {
        const axiosUrl = '/college/document/' + id
        const res = await axios.get(axiosUrl)
        setPrevData({ subCode: res.data.subCode, tags: res.data.tags.toString() })
        setData({ subCode: res.data.subCode, tags: res.data.tags.toString() })
    }

    useEffect(() => {
        if (localStorage.getItem('admin') == null) {
            window.location.replace('/college/adminlogin')
        }
        getData()
        document.title = 'Edit Documents'
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const axiosUrl = '/college/document/' + id

        if (Array.isArray(data.tags) === false) data.tags = convertToArray(data.tags)

        const newNode = {
            subCode: data.subCode,
            tags: data.tags
        }

        const res = await axios.patch(axiosUrl, newNode)
        const { isSuccess } = res.data

        if (isSuccess == true) {
            alert('Successfull')
            window.location.replace('/college/adminPapers')
        } else {
            alert('Failed')
        }
    }

    const handleTag = e => {
        let string = e.target.value
        string = string.toLowerCase()
        let temp = convertToArray(string)
        setData({ ...data, tags: temp })
    }

    function convertToArray(string) {
        let temp = []
        let tag = ''
        for (let ch of string) {
            if (ch == ',') {
                tag = ''
                continue
            }
            tag += ch
            tag.trim()
            if (!temp.includes(tag) && tag != '') temp.push(tag)
        }
        return temp
    }

    let inpStyle = "w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";

    return (
        <div className="container p-3 rounded-md shadow-md mx-auto">
            <Heading style="text-center shadow-md" title='Update Document' />
            <form onSubmit={handleSubmit} id="form" className="my-2 p-3" encType="multipart/form-data">
                <div className="my-3">
                    <InputLabel label="Enter Subject Code" />
                    <input
                        type="text"
                        className={inpStyle}
                        defaultValue={prevData.subCode}
                        onChange={e => setData({ ...data, subCode: e.target.value })}
                    />
                </div>
                <div className="my-3">
                    <InputLabel label="Please provide files details too" />
                    <textarea
                        className={inpStyle}
                        onChange={handleTag}
                        defaultValue={prevData.tags}
                    >
                    </textarea>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-10">
                    <button
                        type="submit"
                        className="bg-green-300 text-green-700 hover:bg-green-400 hover:text-green-800 py-3 rounded-md"
                    >
                        Edit Files
                        </button>
                    <button type="reset" className="bg-red-300 text-red-700 hover:bg-red-400 hover:text-red-800 py-3 rounded-md" >Reset</button>
                </div>
            </form>
        </div>
    )
}

export default EditDocuments