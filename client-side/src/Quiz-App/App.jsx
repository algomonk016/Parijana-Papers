import React from 'react'
import { Link } from 'react-router-dom'

const QuizApp = () => {
    const listStyle = "my-1"
    return (
        <div className="bg-gray-700 h-screen p-5">
            <div className="container p-3 w-1/2 text-purple-800 mx-auto bg-gray-200 rounded-md">
                <p className="text-4xl text-center">Quiz App</p> <br />
                <div>
                    <p className="text-2xl mb-2">Features:</p>
                    <li className={listStyle}> User friendly UI. </li>
                    <li className={listStyle}> Question navigation on the left section of the quiz, that also shows your submission. </li>
                    <li className={listStyle}> Tells score at the end with percentage and time taken.</li>
                    <li className={listStyle}> You can cross check the answers after the submission of quiz. </li>
                </div>
                <Link to="/quiz" className="flex justify-around bg-green-300 text-green-700 w-auto py-2 mt-4 rounded hover:bg-green-400 hover:text-green-900"> Start Quiz </Link>
            </div>
        </div>
    )
}

export default QuizApp
