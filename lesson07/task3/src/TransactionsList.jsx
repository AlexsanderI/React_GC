// check corect worck of project
// put arrey with 'transactions' into index.jsx
// make component transactions
// make function for rendering list of transactions
// change format by date and time
// change format number for amount

import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => (
  <ul className="transactions">
    {transactions.map(transaction => (
      <Transaction key={transaction.id} {...transaction} />
    ))}
  </ul>
);

export default TransactionsList;
