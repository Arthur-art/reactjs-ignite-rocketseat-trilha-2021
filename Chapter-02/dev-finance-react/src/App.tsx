import React from 'react';
import styled from 'styled-components'
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';


export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}
