import React from 'react';
import Modal from 'react-modal';

const QuizModal = ({ Questions, submission }) => {

    let bgOverlayColor = 'rgba(0,0,0,0.625)'
    let closeStyle = "z-10 mt-2 mr-2 px-1 w-10 h-10 bg-red-300 text-red-700 hover:bg-red-400 hover:text-red-900 rounded-full absolute right-0 top-0";

    const customStyles = {
        overlay: {
            backgroundColor: bgOverlayColor,
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
        }
    };


    Modal.setAppElement('#root')

    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const correct = "bg-green-300 rounded px-2 py-1 my-1"
    const wrong = "bg-red-300 rounded px-2 py-1 my-1"

    return (
        <div className="">
            <div className="flex justify-center mt-4">
                <button onClick={openModal} className="bg-orange-300 text-orange-700 py-1 mx-2 px-4 rounded hover:bg-orange-400 hover:text-orange-900">Submissions</button>
                <button onClick={() => window.location.replace('/')} className="bg-purple-300 text-purple-700 py-1 px-4 rounded hover:bg-purple-400 hover:text-purple-900">Try Again</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Quiz Result"
            >

                <div className="">
                    <div className="flex px-3 shadow-lg">
                        <button onClick={closeModal} className={closeStyle}> &#10005; </button>
                    </div>

                    <div className="">
                        {
                            Questions.map((qstn, ind) => (
                                <div key={ind} className=" py-2">
                                    Q: {ind + 1} <br />
                                    <p> {qstn.questionText} </p>

                                    {
                                        qstn.answerOptions[submission[ind]].isCorrect === true ? (
                                            <p className={correct}>
                                                {qstn.answerOptions[submission[ind]].answerText}
                                            </p>
                                        ) : (
                                            <>
                                                <p className={wrong}>
                                                    {qstn.answerOptions[submission[ind]].answerText}
                                                </p>
                                                {
                                                    qstn.answerOptions.map((obj, index) => (
                                                        obj.isCorrect === true ? (
                                                            <p className={correct}>
                                                                {obj.answerText}
                                                            </p>
                                                        ) : ''
                                                    ))
                                                }
                                            </>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>

            </Modal>

        </div>
    )
}
export default QuizModal
