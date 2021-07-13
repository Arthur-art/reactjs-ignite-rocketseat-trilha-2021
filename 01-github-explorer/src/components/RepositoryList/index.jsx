import React from 'react'
import { RepositoryItem } from '../RepositoryItem'

export const RepositoryList = ({data}) => {


    return (
        <section>
            <h1>Lista de repositorios do meu github</h1>
            <ul>
                <RepositoryItem data={data}/>
            </ul>
        </section>
    )
}