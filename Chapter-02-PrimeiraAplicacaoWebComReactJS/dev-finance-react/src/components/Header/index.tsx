import React,{ useState } from "react"
import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./style"



export const Header = ({handleModalOpen}) => {
    
    return (
        <>
            <Container>
                <Content>
                    <img src={logoImg} alt="dev-finance-icon" />
                    <button onClick={handleModalOpen} type="button">Nova Transação</button>
                </Content>
            </Container>
        </>
    )
}