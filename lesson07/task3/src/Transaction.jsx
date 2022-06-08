import React from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM');
const formatTime = date => moment(date).format('hh:mm');

const Transaction = ({ time, date, from, to, rate, amount }) => (
  <li className="transaction">
    <span className="transaction__date">{formatDate(time)}</span>
    {/* <span className="transaction__time">{formatTime(date)}</span> */}
    <span className="transaction__assets">
      {from} → {to}
    </span>
    <span className="transaction__rate">{rate}</span>
    <span className="transaction__amount">
      {new Intl.NumberFormat('en-GB', { maximumSignificantDigits: 3 }).format(amount)}
    </span>
  </li>
);

export default Transaction;
