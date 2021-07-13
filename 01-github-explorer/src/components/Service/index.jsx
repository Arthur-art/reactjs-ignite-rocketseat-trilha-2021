import React, { useEffect, useState } from "react"
import { RepositoryList } from "../RepositoryList"

export const Service = () => {
    const [data, setData]=useState()
    useEffect(() => {
        fetch("https://api.github.com/users/Arthur-art/repos").then((response) => {
            return response.json()
        }).then((data) => {
           setData(data)
        })
    }, [])

    return (
        <>
            <RepositoryList data={data} />
        </>
    )
}