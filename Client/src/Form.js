import React, { useContext, useState } from 'react';
import { GlobalContext } from './Context/GlobalState';

const Form = (props) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [option, setOption] = useState('Credit');
    const { addTransaction } = useContext(GlobalContext);
   const handleSubmit=event=>
   {
       event.preventDefault();

       const newTransaction={
           id:Math.random(),
           text:text,
           amount:option==='Credit'?+amount:+amount*-1
       }
      addTransaction(newTransaction);
   }
    
    return (

        <div className="form-element">
            <form onSubmit={handleSubmit}>
                <div className="transaction-text">
                    <label>Text</label>
                    <input type="text" value={text} name="item" placeholder="Enter the transaction detail" onChange={(event) => setText(event.target.value)} />
                </div>
                <div className="transaction-ammout">
                    <label>Amount</label>
                    <input type="number" value={amount} name="amount" placeholder="Enter the Amount" onChange={(event) => setAmount(event.target.value)} />
                </div>
                <div className="transaction-type">
                    <select value={option} onChange={(event)=>setOption(event.target.value)}>
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
                    </select>

                </div>
                <div className="submit">
                    <input type="submit"/>
                </div>
            </form>


        </div>
    );
};

export default Form;