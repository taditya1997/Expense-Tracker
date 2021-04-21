import React, {useContext} from 'react';
import {GlobalContext} from './Context/GlobalState';
import TransactionItem from './TransactionItem.js';

const History = (props) => 
{
const {transaction}=useContext(GlobalContext);



    return (

        <div className="history">
            <ul className="history-ul">

            {transaction.map((element)=>( <TransactionItem transaction={element}/>))}
                
                
            </ul>
        </div>
    );
};

export default History;