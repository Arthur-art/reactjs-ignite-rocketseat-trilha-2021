import React, { useState, useEffect } from 'react'
import { RepositoryItem } from '../RepositoryItem'

type Repository = {
   full_name:string,
   clone_url:string
}


export const RepositoryList = () => {

    const [data, setData] = useState<Repository[]>([])
    useEffect(() => {
        fetch("https://api.github.com/users/Arthur-art/repos").then((response) => {
            return response.json()
        }).then((data) => {
            setData(data)
        })
    }, [])

    return (
        <section>
            <h1>Lista de repositorios do meu github</h1>
            <ul>
              {data.map((value)=>{
                  return <RepositoryItem name={value.full_name} url={value.clone_url}/>
              })}
            </ul>
        </section>
    )
}