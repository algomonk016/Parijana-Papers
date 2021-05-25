import React, { useEffect, useState } from 'react'
import TestScore from './Components/TestScore';

const Quiz = () => {
    const Questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(0);
    const [submission, setSubmission] = useState([])
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    let interval
    useEffect(() => {
        interval = setInterval(tick, 1000)
        return ()=> {
            clearInterval(interval)
        }
    }, [count])

    const setInitialSubmission = () =>{
        for(let i=0; i<Questions.length; i++) {
            let newArr = submission
            newArr[i] = "not attended";
            setSubmission(newArr)
        }
    }
    
    useEffect(()=>{
        setInitialSubmission()
    }, [])

    const handleSelect = (isCorrect, currentQuestion ,ansInd) => {
        if (isCorrect) setScore(score + 1)
        let newArr = submission
        newArr[currentQuestion] = ansInd - 1;
        setSubmission(newArr)
        goNext()
    }

    const goNext = () => {
        setCurrentQuestion((currentQuestion + 1) % Questions.length)
    }

    const goPrev = () => {
        if (currentQuestion === 0) setCurrentQuestion(Questions.length - 1)
        else setCurrentQuestion(currentQuestion - 1)
    }

    const handleSubmit = () => {
        let newArr = submission
        newArr.map((obj, ind) => {
            if(!Number.isInteger(obj)) newArr[ind] = 0;
            ind++;
        })

        setSubmission(newArr)
        // console.log(submission)
        setShowScore(true);
        clearInterval(interval)
    }

    const optionStyle = "block text-left px-4 w-full border my-2 py-2 rounded hover:bg-gray-200"

    return (
        <div className="container">
            {
                showScore ? (
                    <TestScore Questions = {Questions} score={score} count = {count} submission={submission} />
                ) : (
                    <div className="bg-gray-200 h-screen w-screen">
                        {/* upper, contains timer */}
                        <div className="absolute right-0 top-0 mr-5 mt-2">
                            {Math.floor(count/60)} min : {count%60} s
                        </div>

                        <p className="text-center text-4xl"> Quiz  App </p>
                        
                        <div className="flex justify-around p-5 overflow-y-auto overflow-x-hidden pt-10">
                        
                            {/* left side, contains submissions navigation */}
                            <div className="w-64 p-2 bg-gray-100 shadow-md rounded">
                                <p className="text-center mb-4 text-xl">Your Submissions</p>
                                {
                                    submission.map((obj, ind)=>(
                                        <button onClick={()=> setCurrentQuestion(ind)} className="my-1 block ml-3 border-b-2 border-t-2 border-gray-400 px-2 py-1 rounded my-2 hover:bg-gray-200 w-5/6 text-left">
                                            Q{ind+1}: {Number.isInteger(obj)? `${Questions[ind++].answerOptions[obj].answerText}`: obj}
                                        </button>
                                    )) 
                                }
                            </div>

                            {/* middle, contains questions */}
                            <div className="shadow-md bg-gray-100 rounded mx-2 ml-4 w-2/3 pb-3">
                                {/* question */}
                                <div className="container">
                                    <div className="flex justify-between px-3 py-1">
                                        <span>Question: {currentQuestion + 1}</span>
                                        <span>Total Questions: {Questions.length}</span>
                                    </div>

                                    <p className="px-3 text-lg mt-1">{Questions[currentQuestion].questionText}</p>
                                </div>

                                {/* options */}
                                <div className="px-2 mt-3">
                                    {
                                        Questions[currentQuestion].answerOptions.map((answerOption, ansInd) => (
                                            <button 
                                                key = {ansInd++} 
                                                className= { 
                                                    ansInd === submission[currentQuestion] ? 
                                                    optionStyle + " bg-blue-400" : optionStyle
                                                } 
                                                onClick={() => handleSelect(answerOption.isCorrect, currentQuestion ,ansInd)}>
                                                {answerOption.answerText}
                                            </button>
                                        ))
                                    }
                                </div>

                                {/* prev and next button */}
                                <div className="flex px-3 justify-between mt-4">
                                    <button onClick={goPrev} className="bg-orange-300 text-lg text-orange-700 py-1 px-4 rounded hover:bg-orange-400 hover:text-orange-900">Previous</button>
                                    <button onClick={goNext} className="bg-purple-300 text-lg text-purple-700 py-1 px-4 rounded hover:bg-purple-400 hover:text-purple-900">Next</button>
                                </div>

                            </div>
                        </div>

                        {/* submit button */}
                        <button onClick={handleSubmit} className="bg-green-300 text-lg absolute w-40 right-0 mx-20 text-green-700 py-1 px-2 rounded hover:bg-green-400 hover:text-green-900">Submit</button>
                    </div>
                )
            }
        </div>
    )
}

export default Quiz