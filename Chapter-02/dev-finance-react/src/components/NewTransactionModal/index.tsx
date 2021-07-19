
import Modal from 'react-modal';
import { Container } from './style';

export const NewTransactionModal = ({
    modalTransaction,
    afterOpenModal,
    handleModalClose, }) => {
    return (
        <div>
            <Modal
                isOpen={modalTransaction}
                onAfterOpen={afterOpenModal}
                onRequestClose={handleModalClose}
                overlayClassName={"react-modal-overlay"}
                className={"react-modal-content"}
            >
                <Container>
                    <h2>Cadastrar transação</h2>

                    <input type="text" placeholder="Titulo" />

                    <input type="number" placeholder="Valor" />

                    <input type="text" placeholder="Categoria" />

                    <button type="submit">Cadastrar</button>
                </Container>
            </Modal>
        </div>
    )
}