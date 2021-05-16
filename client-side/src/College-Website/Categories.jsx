import React from 'react'
import BranchWise from './Components/BranchWise'
import SearchFiles from './Components/SearchFiles'
import YearWise from './Components/YearWise'

const Categories = () => {
    const year = window.location.href
    const params = year.split('/')
    params.reverse()

    let isYearWise = (params[0].length<2)

    return (
        <div className="container mx-auto p-3 my-5">
            <SearchFiles />
            {isYearWise? <YearWise />:<BranchWise />}
        </div>
    )
}

export default Categories
