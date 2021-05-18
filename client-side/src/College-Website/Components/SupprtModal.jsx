import React, { useEffect } from 'react';
import Modal from 'react-modal';
import supportHands from '../Assests/Pics/supportHands.jpg'
import ModalMessage from './ModalMessage';
import {Animated} from "react-animated-css";

let bgOverlayColor = 'rgba(0,0,0,0.625)'
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
        border:'none',
    }
};

Modal.setAppElement('#root')

const SupportModal =()=> {
    let closeStyle = "z-10 mt-2 mr-2 px-1 w-10 h-10 bg-red-300 text-red-700 hover:bg-red-400 hover:text-red-900 rounded-full absolute right-0 top-0";
    useEffect(()=>{
        if(typeof(Storage)!='undefined') {
            if(sessionStorage.getItem('isSupportModalOpen')===null) {
                setTimeout(openModal, 3300)
                sessionStorage.setItem('isSupportModalOpen', true)
            }
        }
    },[])

    // var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    let demo = <Animated animationIn="fadeIn" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}> <div className="container"> <img className="w-full" src={supportHands} alt="" srcset=""/> </div> </Animated>

    return (
        <Animated animationIn="fadeIn" animationOut="slideOutUp" animationInDuration={1000} isVisible={true}>
            <div className="p-0 font-serif">
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <div className="flex bg-purple-200 px-3 shadow-lg">
                        <button onClick={closeModal} className={closeStyle}> &#10005; </button>
                    </div>
                    {demo}
                    <div className="bg-indigo-200 text-blue-700 p-4 bottom-0 left-0 w-80">
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                            <ModalMessage msg="Currently, this form supports sending a single attachment at a time" />
                            <ModalMessage msg="If you've multiple files, then it is preferred to merge them into a single pdf and then send it, or you can also mail it to " /> 
                            <a className=" ml-5 font-semibold" href="mailto:algomonk016@gmail.com"> algomonk016@gmail.com </a>
                            <ModalMessage msg="Do provide document details such as Subject Name, SUB-CODE, Branch Name,Teacher Name, Semester and Year" /> 
                        </Animated>
                    </div>
                </Modal>
            </div>
        </Animated>
    );
}

export default SupportModal