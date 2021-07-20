import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from "miragejs"
createServer({
  models: {
    transactions: Model,
  },

  routes() {
    this.namespace = "api"

    this.get("/transactions", () => {
      return this.schema.all("transactions")
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transactions", data)
    })
  }

})




ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);
