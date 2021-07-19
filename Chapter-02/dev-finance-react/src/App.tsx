import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal"


export function App() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  const [modalTransaction, setModalTransaction] = useState(false)
  let subtitle: any;

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
    <>
      <GlobalStyle />
      <Header handleModalOpen={handleModalOpen} />
      <Dashboard />
      <NewTransactionModal
        afterOpenModal={afterOpenModal}
        handleModalClose={handleModalClose}
        modalTransaction={modalTransaction}
        customStyles={customStyles}
      />
    </>
  );
}
