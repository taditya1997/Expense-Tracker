import React, {useContext} from 'react';
import {GlobalContext} from './Context/GlobalState';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const TransactionItem = ({transaction}) => {

    const {deleteTransactions}= useContext(GlobalContext);
    const sign=transaction.amount>0?"+":"-";
    return (
        
        <li className="history-list">
        <button className="cancel" onClick={()=>deleteTransactions(transaction._id)}>x</button>
        <Card className={transaction.amount>0?'transaction-credit':'transaction-debit'}>
            <Typography className='list-item' color="textSecondary" >
                {transaction.text}
            </Typography>
            <Typography className='list-item' color="textSecondary" >
                {sign}{Math.abs(transaction.amount)}
            </Typography>
           
        </Card>

    </li>

    );
};

export default TransactionItem;