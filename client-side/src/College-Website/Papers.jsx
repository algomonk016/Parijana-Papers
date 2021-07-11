import React, { useEffect } from 'react'
import FilesContainer from './Components/FilesContainer'
import SearchFiles from './Components/SearchFiles'
import MyModal from './Components/Modal'
import MessageForStudents from './Components/MessageForStudents'

let Papers = () => {
    useEffect(() => {
        document.title = 'Question Papers - Parijana Papers'
    }, [])
    return (
        <div className="m-5 p-5">
            <MyModal />

            <MessageForStudents />

            <div className="flex justify-center my-5">
                <SearchFiles />
            </div>

            {/* files container */}
            <FilesContainer />

        </div>
    )
}

export default Papers
