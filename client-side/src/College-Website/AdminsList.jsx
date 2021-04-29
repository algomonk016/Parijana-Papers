import React, { useEffect, useState } from 'react'
import Heading from './Components/Heading'
import Admins from './Components/Admins'
import axios from 'axios'
const AdminsList = () => {
    const [admins, setAdmins] = useState()
    useEffect(()=>{
        if(localStorage.getItem('admin') == null) {
            window.location.replace('/college/adminlogin')
        }
        document.title = 'Admins List'

        getAdmins()
    }, [])

    const getAdmins = async () => {
        const res = await axios.get('/college/admin')
        setAdmins(await res.data)
        // console.log(res.data)
    }

    let adminList
    if(admins != null) {
        adminList = admins.map(admin=>{
            return(
                <Admins admin={admin.name} adminId={admin.adminId} id={admin._id} permission={admin.hasPermission} />
            )
        })
    }

    return (
        <div className="w-4/5 mx-auto">
            <Heading style='shadow-md text-2xl text-center' title='Admins'/>

            <table className="w-4/5 mx-auto">
                <thead>
                    <td className="px-0"> <Heading title='Admin Name'/> </td>
                    <td className="px-0"> <Heading title='Admin Id'/> </td>
                    <td className="text-center"> <Heading title='Actions'/> </td>
                </thead>
                <tbody>
                    {adminList}
                </tbody>
            </table>
        </div>
    )
}

export default AdminsList
