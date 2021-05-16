import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import { Animated } from "react-animated-css";
import axios from 'axios'
import { Link } from 'react-router-dom'
import noDataFound from '../Assests/Pics/noDataFound.png'
import PDF from './PDF'

const BranchWise = () => {
    const year = window.location.href
    const params = year.split('/')
    params.reverse()

    const [odd, setodd] = useState()
    const [even, seteven] = useState()

    useEffect(()=> {
        document.title = `${params[0].toUpperCase()} Year-${params[1]} - Parijana Papers`
        getBothSemPapers()
    }, [])

    const getBothSemPapers = async () => {
        let axiosURL = `/college/document/get/${params[1]}/${params[0]}`
        const res = await axios.get(axiosURL)
        setodd(await res.data.odd)
        seteven(await res.data.even)
    }

    let oddPapers=[], evenPapers=[]

    if(odd != null) {
        oddPapers = odd.map(obj => {
            return (
                <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
            )
        })
    }

    if(even != null) {
        evenPapers = even.map(obj => {
            return (
                <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
            )
        })
    }

    let btnStyle = 'absolute top-0 right-0 text-xs text-purple-800 font-semibold hover:bg-gray-100 p-2 rounded-lg shadow hover:shadow-md'
    let divStyle = 'bg-gray-200 flex rounded flex-row overflow-x-scroll pdfContainer'
    let noResult = <img src = {noDataFound} className="w-64" />

    return (
        <div className="container mx-auto p-3 my-5">
            <div className="flex justify-center mt-5">
                <div className="container w-screen py-0">
                    <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                        <div className="relative">
                            <Heading title='Odd Sem' />
                            {/* <Link to={params[0] + '/cse'} className={btnStyle} >Show More</Link> */}
                            <div className={divStyle}>
                                { oddPapers.length < 1 ? noResult : oddPapers }
                            </div>
                        </div>
                    </Animated>
                    <br />
                    <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                        <div className="relative">
                            <Heading title='even sem' />
                            {/* <Link to={params[0] + '/ece'} className={btnStyle} >Show More</Link> */}
                            <div className={divStyle}>
                                { evenPapers.length < 1 ? noResult : evenPapers }
                            </div>
                        </div>
                    </Animated>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default BranchWise
