import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from "miragejs"
createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de websistem',
          type: 'deposit',
          category: 'dev',
          valueMoney: 1100,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Freelancer de websistem',
          type: 'deposit',
          category: 'dev',
          valueMoney: 300,
          createdAt: new Date('2021-02-21 21:00:00'),
        }
      ]
    })
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
