import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./style"

export const Header = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dev-finance-icon" />
                <button type="button">Nova Transação</button>
            </Content>
        </Container>
    )
}