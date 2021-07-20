import { Container } from "./style"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

export const Summary = () => {
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