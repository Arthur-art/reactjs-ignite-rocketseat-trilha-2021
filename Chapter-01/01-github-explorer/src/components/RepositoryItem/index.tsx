import React from 'react'

type RepositoryItemProps = {
    name:string,
    url:string
}

export const RepositoryItem = (props: RepositoryItemProps) => {
    return (
        <li>
            <strong>{props.name}</strong>
            <a href={props.url}>Acessar Repository</a>
        </li>
    )
}