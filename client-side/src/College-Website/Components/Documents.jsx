import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Documents = (props) => {
    const axiosUrl = '/college/document'
    const {id, subCode, tags, dateAdded, url, driveId, uploadedBy, views } = props 
    const editUrl = '/college/editDocuments?id='+id.toString();
    // console.log(tags)
    const handleClick = () => {
        window.open(url)
    }

    const handleDelete = async() => {
        let del = window.confirm("Are you sure?")
        const delUrl = `${axiosUrl}/${id}`
        if(del==true) {
            console.log(id)
            const res = await axios.delete(delUrl)
            console.log(res)
            window.location.reload()
        } else {
            alert('Beta dubaara bina mtlb mt daba dio 🤬')
            alert('Vrna aise hi pareshan karunga 😜')
        }
    }

    return (
        <tr className="shadow-md hover:bg-gray-300">
            <td onClick={handleClick} className="px-3 py-2 cursor-pointer hover:underline">{subCode}</td>
            <td className="px-3 py-2">{tags.toString()}</td>
            <td className="px-3 py-2">{uploadedBy}</td>
            <td className="px-3 py-2">{dateAdded}</td>
            <td className="px-3 py-2">{views}</td>
            <td className="grid grid-cols-2 gap-1 mt-1">
                <Link 
                    to={editUrl}
                    className="py-1 text-center px-3 bg-orange-300 text-orange-500 rounded-md hover:bg-orange-400 text-orange-700"
                > Edit </Link>
                <button onClick={handleDelete} className="py-1 px-3 bg-red-300 text-red-500 rounded-md hover:bg-red-400 text-red-700">Delete</button>
            </td>
        </tr>
    )
}

export default Documents