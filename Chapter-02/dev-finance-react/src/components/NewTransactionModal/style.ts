import styled from "styled-components"

export const Container = styled.form`

h2{
    color: var(--textTitle);
    font-size: 1.5rem;
    margin-top: 2rem;
}

input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    margin: 0.5rem;
}

button[type="submit"]{
        background: var(--black);
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        width: 100%;
        margin: 0 0 0 0.5rem;

        &:hover{
            filter: invert();
            transition: 0.30s;
        }
}

`;