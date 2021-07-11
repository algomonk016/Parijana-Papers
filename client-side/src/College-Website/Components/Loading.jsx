import React from 'react'

const Loading = () => {
    return (
        <div className="border border-red-300 shadow rounded-md p-3 bg-white w-40 m-5">
            <div className="animate-pulse">
                <div className="rounded-sm bg-red-300 h-36 w-full"></div>
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-6 mt-1 bg-gray-300 rounded w-full"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading
