import React, { useEffect } from 'react';
import Modal from 'react-modal';
import Heading from './Heading';
import tips from '../Assests/Pics/searchingISC.gif'
import ModalMessage from './ModalMessage';
import {Animated} from "react-animated-css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const MyModal =()=> {
    let closeStyle = "mt-1 mr-1 px-1 w-10 h-10 bg-red-300 text-red-500 hover:bg-red-400 hover:text-red-700 rounded-full absolute right-0 top-0";
    useEffect(()=>{
        if(localStorage.getItem('ModalOpened') != 1) {
            setTimeout(openModal, 3300)
            console.log(`modalOpened ${localStorage.getItem('ModalOpened')}`)
            localStorage.setItem('ModalOpened', 1)
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
                    <div className="flex bg-gray-700 px-3 shadow-lg">
                        <Animated animationIn="fadeIn" animationOut="slideOutUp" animationInDuration={700} animationInDelay={200} isVisible={true}>
                            <Heading style="font-serif text-gray-200" title="About Searching"/>
                            <button onClick={closeModal} className={closeStyle}> &#10005; </button>
                        </Animated>
                    </div>

                    <div className="bg-gray-200 text-gray-600 p-3">
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={100} isVisible={true}>
                            <ModalMessage msg="Search for any previous year paper you want" />
                        </Animated>
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={200} isVisible={true}>
                            <ModalMessage msg="The result will be shown once you completed the keyword" />
                        </Animated>
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={250} isVisible={true}>
                            <p className="text-lg m-2 font-serif">For more accurate search results</p>
                        </Animated>
                        <Animated animationIn="fadeInDown" animationOut="slideOutUp" animationInDuration={700} animationInDelay={300} isVisible={true}>
                            <ModalMessage msg="Use Subject codes, ex: MTHS-101 or MTH-S-101" />
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