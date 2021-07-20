
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

export const NewTransactionModal = ({ modalTransaction, afterOpenModal, handleModalClose, }) => {

    const [type, setType] = useState("deposit")

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
                <Container action="#">
                    <h2>Cadastrar transação</h2>

                    <input type="text" placeholder="Titulo" />

                    <input type="number" placeholder="Valor" />

                    <TransactionTypeContainer>
                        <RadioBox activeColor={"green"} active={type === 'deposit'} onClick={() => setType("deposit")}>
                            <img src={incomeImg} alt="entrada-img" />
                            Entrada
                        </RadioBox>
                        <RadioBox activeColor={"red"} active={type === 'withdraw'} onClick={() => setType("withdraw")}>
                            <img src={outcomeImg} alt="saida-img" />
                            Saída
                        </RadioBox>
                    </TransactionTypeContainer>

                    <input type="text" placeholder="Categoria" />

                    <button type="submit">Cadastrar</button>
                </Container>
            </Modal>
        </div>
    )
}