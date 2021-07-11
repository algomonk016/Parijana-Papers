import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import PDF from './PDF'
import { Animated } from "react-animated-css";
import axios from 'axios'
import { Link } from 'react-router-dom'
import noDataFound from '../Assests/Pics/noDataFound.png'
import Spinner from './Spinner';

function FilesContainer() {
    let url = '/college/document/get'

    const [year1, setyear1] = useState()
    const [year2, setyear2] = useState()
    const [year3, setyear3] = useState()
    const [year4, setyear4] = useState()
    const [gotResult, setGotResult] = useState(false)
    useEffect(() => {
        getDocuments().then(()=>{
            console.log('Done')
        })
    }, [])

    const getDocuments = async () => {
        const res = await axios.get(url)
        setyear1(await res.data.year1)
        setyear2(await res.data.year2)
        setyear3(await res.data.year3)
        setyear4(await res.data.year4)
        setGotResult(true)
    }

    let firstYearPapers = []
    if (year1 != null) {
        firstYearPapers = year1.map(obj => {
            return (
                <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
            )
        })
    }

    let secondYearPapers = []
    if (year2 != null) {
        secondYearPapers = year2.map(obj => {
            return (
                <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
            )
        })
    }

    let thirdYearPapers = []
    if (year3 != null) {
        thirdYearPapers = year3.map(obj => {
            return (
                <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
            )
        })
    }

    let fourthYearPapers = []
    if (year4 != null) {
        fourthYearPapers = year4.map(obj => {
            return (
                <PDF key={obj._id} id={obj._id} subCode={obj.subCode} tags={obj.tags} viewLink={obj.viewLink} downloadLink={obj.downloadLink} />
            )
        })
    }

    let btnStyle = 'absolute top-0 right-0 text-xs text-purple-800 font-semibold hover:bg-gray-100 p-2 rounded-lg shadow hover:shadow-md'
    let divStyle = 'min-h-full bg-gray-100 flex rounded flex-row overflow-x-scroll pdfContainer'
    // spinner's condition here
    let noResult = ( gotResult === true ? <img src = {noDataFound} className="w-64" /> : <Spinner />)

    return (
        <div className="flex justify-center ">
            <div className="py-0 w-11/12">
                <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={0} isVisible={true}>
                    <div className="relative h-56 pb-5 my-4">
                        <Heading title='1st year' />
                        <Link to='/college/papers/year/1' className={btnStyle} >Explore</Link>
                        <div className={divStyle}>
                            { firstYearPapers < 1 ? noResult : firstYearPapers }
                        </div>
                    </div>
                </Animated>
                <br />
                <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={0} isVisible={true}>
                    <div className="relative h-56 pb-5 my-4">
                        <Heading title='2nd year' />
                        <Link to='/college/papers/year/2' className={btnStyle} >Explore</Link>
                        <div className={divStyle}>
                            { secondYearPapers < 1 ? noResult : secondYearPapers }
                        </div>
                    </div>
                </Animated>
                <br />
                <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={0} isVisible={true}>
                    <div className="relative h-56 pb-5 my-4">
                        <Heading title='3rd year' />
                        <Link to='/college/papers/year/3' className={btnStyle} >Explore</Link>
                        <div className={divStyle}>
                            { thirdYearPapers.length < 1 ? noResult : thirdYearPapers }
                        </div>
                    </div>
                </Animated>
                <br />
                <Animated animationIn="slideInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={0} isVisible={true}>
                    <div className="relative h-56 pb-5 my-4">
                        <Heading title='4th year' />
                        <Link to='/college/papers/year/4' className={btnStyle} >Explore</Link>
                        <div className={divStyle}>
                            { fourthYearPapers.length < 1 ? noResult : fourthYearPapers  }
                        </div>
                    </div>
                </Animated>
                <br />
            </div>
        </div>
    )
}

export default FilesContainer
