import styled from "styled-components";

export const Container = styled.div`

    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;

       th{
        text-align: left;
        padding: 1rem;
        line-height: 1.5rem;
       }

        td{
            border:0;
            padding: 1rem 2rem;
            background: #c8d6e5;
            border-radius: 0 0 0 0.25rem;

            &.deposit{
                color:var(--green);
            }

            &.withdraw{
                color:var(--red);
            }
        }
    }
`;