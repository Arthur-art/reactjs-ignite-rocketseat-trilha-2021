import React,{ useState } from "react"
import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./style"
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const Header = () => {
    const [modalTransaction, setModalTransaction] = useState(false)
    let subtitle:any;

    const handleModalOpen = () => {
        setModalTransaction(true)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }

    const handleModalClose = () => {
        setModalTransaction(false)
    }

    return (
        <>
            <div>
                <Modal
                    isOpen={modalTransaction}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={handleModalClose}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h1>Modal</h1>
                    <button onClick={handleModalClose}>close</button>
                    
                </Modal>
            </div>
            <Container>
                <Content>
                    <img src={logoImg} alt="dev-finance-icon" />
                    <button onClick={handleModalOpen} type="button">Nova Transação</button>
                </Content>
            </Container>
        </>
    )
}