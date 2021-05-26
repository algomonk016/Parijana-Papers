import React, { useEffect } from 'react';
import Modal from 'react-modal';
import Heading from './Heading';
import tips from '../Assests/Pics/searchingISC.gif'
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

const MyModal =()=> {
    let closeStyle = "mt-2 mr-2 px-1 w-10 h-10 bg-red-300 text-red-700 hover:bg-red-400 hover:text-red-900 rounded-full absolute right-0 top-0";
    useEffect(()=>{
        if(typeof(Storage)!='undefined') {
            if(sessionStorage.getItem('isModalOpen')===null) {
                setTimeout(openModal, 3300)
                sessionStorage.setItem('isModalOpen', true)
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

    let demo = <Animated animationIn="fadeInUp" animationOut="slideOutUp" animationInDuration={700} animationInDelay={600} isVisible={true}> <div className="container"> <img className="w-50" src={tips} alt="" srcset=""/> </div> </Animated>

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
                    <div className="flex bg-red-700 px-3 shadow-lg">
                        <Animated animationIn="fadeIn" animationOut="slideOutUp" animationInDuration={700} animationInDelay={200} isVisible={true}>
                            <Heading style="font-serif text-gray-200" title="About Searching"/>
                            <button onClick={closeModal} className={closeStyle}> &#10005; </button>
                        </Animated>
                    </div>

                    <div className="bg-orange-200 text-orange-700 p-4">
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                            <ModalMessage msg="Search for any previous year paper you want" />
                        </Animated>
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={300} isVisible={true}>
                            <ModalMessage msg="Use Subject name, ex: maths-3 or engg drawing" />
                            <ModalMessage msg="You can use shortnames also, ex: ed, co, os, thermo and so on" />
                        </Animated>
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={300} isVisible={true}>
                            <ModalMessage msg="Use Subject codes, ex: MTHS-101 or MTH-S101" />
                        </Animated>
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={300} isVisible={true}>
                            <ModalMessage msg="Use Exam Type, ex: Quiz-2 or Mid or End" />
                        </Animated>
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={300} isVisible={true}>
                            <ModalMessage msg="Use Course Years, ex: Year-1" />
                        </Animated>
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={350} isVisible={true}>
                            <ModalMessage msg="Use Semester numbers, ex: SEM-1" />
                        </Animated>
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={400} isVisible={true}>
                            <ModalMessage msg="You can use teacher names also, just spell it correctly" />
                        </Animated>
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={500} isVisible={true}>
                            <ModalMessage msg="Demo is shown below" />
                        </Animated>
                    </div>

                    {demo}
                </Modal>
            </div>
        </Animated>
    );
}

export default MyModal