
import Modal from 'react-modal';

export const NewTransactionModal = ({
    modalTransaction,
    afterOpenModal,
    handleModalClose,
    customStyles }) => {
    return (
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
    )
}