import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal"
import { TransactionsProvider } from './hooks/useTransactions'


export const App = () => {

  Modal.setAppElement('#root');

  const [modalTransaction, setModalTransaction] = useState(false)

  const handleModalOpen = () => {
    setModalTransaction(true)
  }

  function afterOpenModal() {
    console.log("modal aberto")
  }

  const handleModalClose = () => {
    setModalTransaction(false)
  }
  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header handleModalOpen={handleModalOpen} />
      <Dashboard />
      <NewTransactionModal
        afterOpenModal={afterOpenModal}
        handleModalClose={handleModalClose}
        modalTransaction={modalTransaction}
      />
    </TransactionsProvider>
  );
}
