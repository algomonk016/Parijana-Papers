import React, { useEffect} from 'react'
import FilesContainer from './Components/FilesContainer'
import SearchFiles from './Components/SearchFiles'
import MyModal from './Components/Modal'

function Papers() {
    useEffect(()=>{
        document.title = 'Question Papers'
    }, [])
    return (
        <div className="mb-5 pb-5">
            <MyModal />
            
            <div className="flex justify-center my-5">
                <SearchFiles />
            </div>

            {/* files container */}    
            <FilesContainer />
            
        </div>
    )
}

export default Papers
