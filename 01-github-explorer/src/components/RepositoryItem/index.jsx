import React from 'react'
import { Counter } from '../Counter';

export const RepositoryItem = ({ data }) => {

    const dataProps = []
    for (let i in data) {
        dataProps.push(data[i])
    }

    return (
        <>
            <div>
                {data ?
                    dataProps.map((value, i) => {
                        return <li key={i}>
                            <strong>{value.full_name} {"=>"} </strong>
                            <a href={value.clone_url}>Acessar repositorio no github</a>
                        </li>
                    })
               : "Carregando..." }

            </div>
        </>

    )
}