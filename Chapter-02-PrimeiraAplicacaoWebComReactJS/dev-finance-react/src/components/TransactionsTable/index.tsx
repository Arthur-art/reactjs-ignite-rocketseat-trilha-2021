import React, { useState, useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./style"

interface TransactionsRequest {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

export const TransactionsTable = () => {

    const [transaction, setTransactions] = useState<TransactionsRequest[]>([])

    useEffect(() => {
        api.get("/transactions").then((response) => {
            setTransactions(response.data.transactions)
        })
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transaction ? transaction.map((value) => {
                        return <>
                            <tr key={value.id}>
                                <td>{value.title}</td>
                                <td className={value.type}>{value.type}</td>
                                <td>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(value.amount)}</td>
                                <td>{value.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR')
                                    .format(new Date(value.createdAt))}</td>
                            </tr>
                        </>
                    }) : "Carregando..."}
                </tbody>
            </table>
        </Container>
    )
}