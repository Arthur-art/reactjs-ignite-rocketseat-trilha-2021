import { useContext } from "react"
import { Container } from "./style"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { TransactionsContext } from "../../TransactionsContext"


export const Summary = () => {

    const { transaction } = useContext(TransactionsContext)

    const summary = transaction.reduce((acumulator, transactions) => {

        if (transactions.type === "deposit") {
            acumulator.deposits += transactions.valueMoney
            acumulator.total += transactions.valueMoney
        } else {
            acumulator.withdraw += transactions.valueMoney
            acumulator.total += transactions.valueMoney
        }

        return acumulator;

    }, {
        deposits: 0,
        withdraw: 0,
        total: 0
    })

    function formatValuesCurrency(value: number) {
        return Intl.NumberFormat("pt-BR", {
            style: 'currency',
            currency: 'BRL'
        }).format(value)
    }

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="income-img" />
                </header>
                <strong>{formatValuesCurrency(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="income-img" />
                </header>
                <strong>{formatValuesCurrency(summary.withdraw)}</strong>
            </div>
            <div className="total">
                <header>
                    <p>Total</p>
                </header>
                <strong>{formatValuesCurrency(summary.total)}</strong>
            </div>
        </Container>
    )
}