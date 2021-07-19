import React, { useState, useEffect } from "react"
import { Container } from "./style"

export const TransactionsTable = () => {

    useEffect(()=>{
        fetch("http://localhost:3000/api/transactions").then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data)
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