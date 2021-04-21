import React, { useContext } from 'react';
import './App.css';
import { GlobalContext } from './Context/GlobalState';

const Balance = (props) => {
    const { transaction } = useContext(GlobalContext);
    console.log(transaction);
    const amounts = transaction.map(transactions => transactions.amount);
    const total = amounts.reduce((element, item) => (element += item), 0).toFixed(2);
    return (
        <div className="balance">
            <h3>Your Balance</h3>
            <h1 className="current-balance">{total}</h1>
        </div>
    );
};

export default Balance;