import React, {useContext, useEffect} from 'react';
import {GlobalContext} from './Context/GlobalState';
import TransactionItem from './TransactionItem.js';

const History = (props) => 
{
const {transaction,getTransaction}=useContext(GlobalContext);
useEffect(()=>{
    getTransaction();
},[transaction])


    return (

        <div className="history">
            <ul className="history-ul">

            {transaction.map((element)=>( <TransactionItem transaction={element}/>))}
                
                
            </ul>
        </div>
    );
};

export default History;