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


export const TransactionsContext = createContext<TransactionsRequest[]>([])

export const TransactionsProvider = (props: TransactionsProvider) => {

    const [transaction, setTransactions] = useState<TransactionsRequest[]>([])

    useEffect(() => {
        api.get("/transactions").then((response) => {
            setTransactions(response.data.transactions)
        })
    }, [])

    return (
        <TransactionsContext.Provider value={transaction}>
            {props.children}
        </TransactionsContext.Provider>
    )
}