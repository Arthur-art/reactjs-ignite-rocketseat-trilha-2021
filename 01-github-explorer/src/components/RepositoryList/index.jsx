import React from 'react'
import { RepositoryItem } from '../RepositoryItem'

export const RepositoryList = () => {

    const repository = {
        name: "React-js",
        url: "#",
        description: "Descricao do repositorio"
    }

    return (
        <section>
            <h1>Lista de repositorios do meu github</h1>
            <ul>
                <RepositoryItem dataRepository={repository}/>
            </ul>
        </section>
    )
}