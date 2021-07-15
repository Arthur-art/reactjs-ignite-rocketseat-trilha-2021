import React from 'react';
import styled from 'styled-components'
import { GlobalStyle } from './styles/global';

const Title = styled.h1`
  color: black;
`;

export function App() {
  return (
    <div className="App">
      <Title>Teste</Title>
      <GlobalStyle />
    </div>
  );
}
