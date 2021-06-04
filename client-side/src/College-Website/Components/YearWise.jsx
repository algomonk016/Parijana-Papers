import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import { Animated } from "react-animated-css";
import axios from 'axios'
import { Link } from 'react-router-dom'
import noDataFound from '../Assests/Pics/noDataFound.png'
import PDF from './PDF'

const YearWise = () => {
    const year = window.location.href
    const params = year.split('/')
    params.reverse()
    
    const [cse, setcse] = useState()
    const [ece, setece] = useState()
    const [che, setche] = useState()
    const [mee, setmee] = useState()
    const [msme, setmsme] = useState()
    const [it, setit] = useState()

    useEffect(()=>{
        document.title = `Year-${params[0]} - Parijana Papers`
        getAllBranchPapers()
    },[])


    const getAllBranchPapers = async () => {
        let axiosURL = `/college/document/get/${params[0]}`
        const res = await axios.get(axiosURL)
        setcse(await res.data.cse)
        setece(await res.data.ece)
        setche(await res.data.che)
        setmee(await res.data.mee)
        setit(await res.data.it)
        setmsme(await res.data.msme)
    }

    let csePapers=[],ecePapers=[],meePapers=[],chePapers=[],itPapers=[],msmePapers=[]

    if(cse != null) {
        csePapers = cse.map(obj=>{
            return (
                <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
            )
        })
    }

    if(msme != null) {
        msmePapers = msme.map(obj=>{
            return (
                <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
            )
        })
    }

    if(mee != null) {
        meePapers = mee.map(obj=>{
            return (
                <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
            )
        })
    }

    if(ece != null) {
        ecePapers = ece.map(obj=>{
            return (
                <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
            )
        })
    }

    if(che != null) {
        chePapers = che.map(obj=>{
            return (
                <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
            )
        })
    }

    if(it != null) {
        itPapers = it.map(obj=>{
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
                            <Heading title='CSE' />
                            <Link to={params[0] + '/cse'} className={btnStyle} >Explore</Link>
                            <div className={divStyle}>
                                { csePapers.length < 1 ? noResult : csePapers }
                            </div>
                        </div>
                    </Animated>
                    <br />
                    <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                        <div className="relative">
                            <Heading title='ECE' />
                            <Link to={params[0] + '/ece'} className={btnStyle} >Explore</Link>
                            <div className={divStyle}>
                                { ecePapers.length < 1 ? noResult : ecePapers }
                            </div>
                        </div>
                    </Animated>
                    <br />
                    <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                        <div className="relative">
                            <Heading title='MEE' />
                            <Link to={params[0] + '/mee'} className={btnStyle} >Explore</Link>
                            <div className={divStyle}>
                                { meePapers.length < 1 ? noResult : meePapers }
                            </div>
                        </div>
                    </Animated>
                    <br />
                    <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                        <div className="relative">
                            <Heading title='CHE' />
                            <Link to={params[0] + '/che'} className={btnStyle} >Explore</Link>
                            <div className={divStyle}>
                                { chePapers.length < 1 ? noResult : chePapers }
                            </div>
                        </div>
                    </Animated>
                    <br />
                    <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                        <div className="relative">
                            <Heading title='IT' />
                            <Link to={params[0] + '/it'} className={btnStyle} >Explore</Link>
                            <div className={divStyle}>
                                { itPapers.length < 1 ? noResult : itPapers }
                            </div>
                        </div>
                    </Animated>
                    <br />
                    <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                        <div className="relative">
                            <Heading title='MSME' />
                            <Link to={params[0] + '/msme'} className={btnStyle} >Explore</Link>
                            <div className={divStyle}>
                                { msmePapers.length < 1 ? noResult : msmePapers }
                            </div>
                        </div>
                    </Animated>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default YearWise
