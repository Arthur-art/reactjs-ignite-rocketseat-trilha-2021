import React, { useState } from "react"

export const Counter = () => {
    const [state, setState] = useState(0)

    const handleChange = () => {
        setState((prev) => (prev + 1))
    }

    return (
        <button onClick={handleChange}>Clique aqui - {state}</button>
    )
}