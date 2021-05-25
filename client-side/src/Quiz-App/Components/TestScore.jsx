import React from 'react'
import QuizModal from './QuizModal'
const TestScore = ({ Questions, score, count, submission }) => {
    return (
        <>  
            <p className="text-3xl text-center my-5 mr-10">Quiz Result</p>
            <div className="container mx-auto w-3/4 bg-gray-300 rounded-md p-5 text-center mt-5">
                <table className="mx-auto text-left">
                    <tbody className>
                        <tr>
                            <td>The Score is: </td>
                            <td className="px-3">{score}</td>
                        </tr>
                        <tr>
                            <td>Percentage: </td>
                            <td className="px-3">{(score / Questions.length) * 100}%</td>
                        </tr>
                        <tr>
                            <td>Time taken: </td>
                            <td className="px-3">{Math.floor(count / 60)}min : {count % 60}s</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <QuizModal Questions={Questions} submission = {submission} />
        </>
    )
}

export default TestScore
