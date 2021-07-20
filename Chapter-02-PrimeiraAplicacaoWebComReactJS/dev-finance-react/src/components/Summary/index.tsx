import { useContext } from "react"
import { Container } from "./style"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { TransactionsContext } from "../../TransactionsContext"


export const Summary = () => {
    const data = useContext(TransactionsContext)
    console.log(data)

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="income-img" />
                </header>
                <strong> + R$10000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="income-img" />
                </header>
                <strong> - R$1000,00</strong>
            </div>
            <div className="total">
                <header>
                    <p>Total</p>
                </header>
                <strong>R$9000,00</strong>
            </div>
        </Container>
    )
}