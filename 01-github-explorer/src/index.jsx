import React from "react"

const App = () => {

    const user = {
        name:{
            primary:"Arthur"
        }
    }

    return (
        <h1>Hello World{user.name.primary}</h1>
    )
}