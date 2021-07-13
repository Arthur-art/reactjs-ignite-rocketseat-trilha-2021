import React from 'react'

export const RepositoryItem = ({dataRepository}) => {
    const {name, url, description} = dataRepository;

    return (
        <li>
            <strong>{name ? name : "Carregando..."}</strong>
            <p>{description}</p>
            <a href={url}>Acessar repositorio no github</a>
        </li>
    )
}