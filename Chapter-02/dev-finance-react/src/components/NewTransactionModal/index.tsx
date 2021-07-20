
import { useState, useEffect, FormEvent } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

export const NewTransactionModal = ({ modalTransaction, afterOpenModal, handleModalClose, }) => {

    const [type, setType] = useState("deposit");

    const [title, setTitle] = useState("")
    const [valueMoney, setValueMoney] = useState(0)
    const [category, setCategory] = useState("")


    const handleCreateNewTransaction = (event: FormEvent) => {
        event.preventDefault()
        console.log(
            title,
            valueMoney,
            category
        )
    }

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
                <Container onSubmit={handleCreateNewTransaction}>
                    <h2>Cadastrar transação</h2>

                    <input onChange={(event) => setTitle(event.target.value)} value={title} type="text" placeholder="Titulo" />

                    <input onChange={(event) => setValueMoney(Number(event.target.value))} value={valueMoney} type="number" placeholder="Valor" />

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

                    <input onChange={(event) => setCategory(event.target.value)} value={category} type="text" placeholder="Categoria" />

                    <button type="submit">Cadastrar</button>
                </Container>
            </Modal>
        </div>
    )
}