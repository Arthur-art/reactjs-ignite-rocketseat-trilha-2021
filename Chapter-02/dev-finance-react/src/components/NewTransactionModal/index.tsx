
import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './style';
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

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
                <button className="button-close-modal" onClick={handleModalClose}>
                    <img src={closeImg} alt="Fechar modal" />
                </button>
                <Container>
                    <h2>Cadastrar transação</h2>

                    <input type="text" placeholder="Titulo" />

                    <input type="number" placeholder="Valor" />

                    <TransactionTypeContainer>
                        <button>
                            <img src={incomeImg} alt="" />
                            Entrada
                        </button>
                        <button>
                            <img src={outcomeImg} alt="" />
                            Saída
                        </button>
                    </TransactionTypeContainer>

                    <input type="text" placeholder="Categoria" />

                    <button type="submit">Cadastrar</button>
                </Container>
            </Modal>
        </div>
    )
}