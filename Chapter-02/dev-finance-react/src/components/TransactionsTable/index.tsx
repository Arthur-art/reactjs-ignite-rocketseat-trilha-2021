import React, { useState, useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./style"

export const TransactionsTable = () => {

    useEffect(() => {
        api.get("/transactions").then((response) => {
            console.log(response.data)
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
                    <tr>
                        <td>AgendamentoLBC</td>
                        <td className="deposit"> + R$1.500</td>
                        <td>Freela-Site</td>
                        <td>19/07/2021</td>
                    </tr>
                    <tr>
                        <td>Games</td>
                        <td className="withdraw"> - R$400</td>
                        <td>Hoob</td>
                        <td>19/07/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}