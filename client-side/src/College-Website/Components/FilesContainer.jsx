import React, {useEffect, useState} from 'react'
import Heading from './Heading'
import PDF from './PDF'
import {Animated} from "react-animated-css";
import axios from 'axios'

function FilesContainer() {
    let url = '/college/document/get'

    const [mostViews, setMostViews] = useState()
    const [recentlyUploaded, setRecentlyUploaded] = useState()

    useEffect(() => {
        getDocuments()
        // console.log(recentlyUploaded)
    }, [])

    const getDocuments = async ()=> {
        const res = await axios.get(url)
        setRecentlyUploaded(await res.data.data1)
        setMostViews(await res.data.data2)
        // console.log(res.data.data1)
    }

    let recUploaded
    if(recentlyUploaded!=null) {
        recUploaded = recentlyUploaded.map(obj=> {
            return(
                <PDF id={obj._id} subCode = {obj.subCode} tags = {obj.tags} url = {obj.filePath}/>
            )
        })
    }

    let mostViewd
    if(mostViews!=null) {
        mostViewd = mostViews.map(obj=> {
            return(
                <PDF id={obj._id} subCode = {obj.subCode} tags = {obj.tags} url = {obj.filePath}/>
            )
        })
    }

    return (
        <div className="flex justify-center">
            <div className="container w-screen py-4">
                <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                    <Heading title='recently uploaded' />
                    <div className="bg-gray-200 flex rounded flex-row overflow-x-scroll pdfContainer">
                        {recUploaded}
                    </div>
                </Animated>
                <br/><br/>
                <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={200} isVisible={true}>
                    <Heading title='Most Viewed' />
                    <div className="bg-blue-100 flex flex-around flex-row overflow-x-scroll pdfContainer">
                        {mostViewd}
                    </div>
                </Animated>
            </div>
        </div>
    )
}

export default FilesContainer
