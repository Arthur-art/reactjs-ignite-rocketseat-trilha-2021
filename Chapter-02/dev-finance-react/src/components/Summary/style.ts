import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: -10rem;

    div{
        background: var(--blackLight);
        padding: 2rem;
        border-radius: 0.25rem;
        width: 20rem;
        height: 9rem;
       
        header{
            display: flex;
        align-items: center;
        justify-content: space-around;

        }

        strong{
            margin-top: 0.5rem;
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 3rem ;
            display: block;
        }

        &.total{
            background: var(--green);
        }
    }
`