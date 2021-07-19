import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from "miragejs"
createServer({
  routes() {
    this.namespace = "api"

    this.get("/transactions", () => {
      return [
        {
          response: "Resposta da api"
        }
      ]
    })
  }
})




ReactDOM.render(
  <>
    <App  />
  </>,
  document.getElementById('root')
);
