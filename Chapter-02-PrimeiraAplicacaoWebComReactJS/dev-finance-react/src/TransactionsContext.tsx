import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface TransactionsRequest {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

interface TransactionsProvider {
    children: ReactNode;
}

interface TransactionInput {
    title: string;
    valueMoney: number;
    category: string;
    type: string;
}

interface TransactionContextData {
    transaction: TransactionsRequest[];
    createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export const TransactionsProvider = (props: TransactionsProvider) => {

    const [transaction, setTransactions] = useState<TransactionsRequest[]>([])

    useEffect(() => {
        api.get("/transactions").then((response) => {
            setTransactions(response.data.transactions)
        })
    }, [])

    const createTransaction = (transaction: TransactionInput) => {
        api.post("/transactions", transaction);
    }

    return (
        <TransactionsContext.Provider value={{ transaction, createTransaction }}>
            {props.children}
        </TransactionsContext.Provider>
    )
}