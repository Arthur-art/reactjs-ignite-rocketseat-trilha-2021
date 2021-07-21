import { useContext } from 'react'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

export interface TransactionsRequest {
    id: number;
    title: string;
    type: string;
    category: string;
    valueMoney: number;
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
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export const TransactionsProvider = (props: TransactionsProvider) => {

    const [transaction, setTransactions] = useState<TransactionsRequest[]>([])

    useEffect(() => {
        api.get("/transactions").then((response) => {
            setTransactions(response.data.transactions)
        })
    }, [])

    const createTransaction = async (transactionInput: TransactionInput) => {
        const response = await api.post("/transactions", {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transactions } = response.data;
        setTransactions((prev) => ([...prev, transactions]))
    }

    return (
        <TransactionsContext.Provider value={{ transaction, createTransaction }}>
            {props.children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)
    return context;
}