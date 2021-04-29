import React, {} from 'react'
import axios from 'axios'
const Admins = (props) => {
    const {id, adminId} = props
    // const editUrl = '/college/editadmin?id='+id.toString();
    const handleDelete =  async ()=> {
        let del = window.confirm("Are you sure?")
        if(del==true) {
            const res = await axios.delete(`/college/admin/${id}`)
            alert('Account Deleted')
            window.location.reload()
        } else {
            alert('Beta dubaara bina mtlb mt daba dio 🤬')
            alert('Vrna aise hi pareshan karunga 😜')
        }
    }

    let toggle = e =>{
        // let setPermission = (props.permission == true?false:true)
    }
    
    let togglePermission = (props.permission==true?
            <button onClick={toggle} className="py-1 px-3 bg-orange-300 text-orange-500 rounded-md hover:bg-orange-400 text-orange-700">Restrict</button>
            :
            <button onClick={toggle} className="py-1 px-3 bg-green-300 text-green-500 rounded-md hover:bg-green-400 text-green-700">Grant</button>
        )

    return (
        <tr className="shadow-md hover:bg-gray-300">
            <td className="px-3 py-2 cursor-pointer hover:underline">{props.admin}</td>
            <td className="px-3 py-2 cursor-pointer hover:underline">{props.adminId}</td>
            <td className="grid grid-cols-2 gap-1 mt-1">
                {togglePermission}
                <button onClick={handleDelete} className="py-1 px-3 bg-red-300 text-red-500 rounded-md hover:bg-red-400 text-red-700">Delete</button>
            </td>
        </tr>
    )
}

export default Admins
