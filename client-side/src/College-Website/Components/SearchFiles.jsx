import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PDF from './PDF'
import Heading from './Heading'
import { Animated } from "react-animated-css";
import searching from '../Assests/Pics/search.PNG'

let SearchFiles =()=> {
    let inpStyle = "w-10/12 bg-white rounded border shadow-md rounded-md border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";
    const url = '/college/document'

    const [papers, setPapers] = useState([])
    const [inpData, setInpData] = useState('')

    useEffect(() => {
        getPapers()
    }, [inpData])

    const getPapers = async () => {
        const srchUrl = url + '/search'

        const year = window.location.href
        let params = year.split('/')
        params.reverse()

        let newInpData = inpData.trim()

        if(params[0].length === 1) {
            newInpData += ` year-${params[0]}`
        } else if(params[0].length === 3) {
            newInpData += ` year-${params[1]} branch-${params[0]}`
        }

        if (newInpData) {
            let tags = newInpData.toLowerCase().split(' ')
            const res = await axios.post(srchUrl, tags)
            setPapers(res.data)
        }
    }

    let papersList
    if (papers.length > 0) {
        let teacher=''
        papersList = papers.map(obj => {
            if(obj.teacherName === teacher){
                return (
                    <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
                )
            } else{
                teacher = obj.teacherName
                return(
                    <>
                        <Heading style="container" title={teacher}/> <br />
                        <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
                    </>
                )
            }
        })
    } else {
        papersList =
            <Animated animationIn="fadeIn" animationInDuration={700} isVisible={true}>
                <div className="flex">
                    <img src={searching} className="w-64 flex-shrink" />
                </div>
            </Animated>
    }

    return (
        <div className="container">
            <Animated animationIn="slideInDown" animationOut="slideOutUp" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <div className="flex justify-center">
                    <input type="text" onChange={e => setInpData(e.target.value)} className={inpStyle} placeholder="Search here, ex: MTH-S101 Quiz-2 Sem-1" />
                    {/* <button onClick={getPapers} className="w-1/6 border ml-5 shadow-md hover:bg-purple-400 hover:text-purple-800 hover:shadow:lg rounded-md bg-purple-300 text-purple-700">Search</button> */}
                </div>
            </Animated>

            {
                inpData.length <= 0 ? <></> :
                    <div className="pdfContainer mt-5">
                        <Animated animationIn="fadeIn" animationOut="slideOutUp" animationInDuration={800} isVisible={true}>
                            <Heading title="Search Results" />
                            <div className="shadow-md py-3 md:pl-5 bg-blue-100 flex flex-row flex-wrap relative searchResults">
                                {papersList}
                            </div>
                        </Animated>
                    </div>
            }

        </div>
    )
}

export default SearchFiles
