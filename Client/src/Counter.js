import React, { useContext } from 'react';
import { GlobalContext } from './Context/GlobalState';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const Counter = (props) => {
    const{transaction}= useContext(GlobalContext);
    const amount=transaction.map(transactions=>transactions.amount);

    const income=amount.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const expense=( amount.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1).toFixed(2);

    return(




        <div className="income-expense">
            <div className="Income">
                <Card className={`income-card`} >
                
                <Typography variant="h5" component="h2">
                Income
    </Typography>
            <Typography variant="body2" component="p">
               {income}
        </Typography>
                 </Card>
            </div>
            <div className="expense">
                <Card className="expense-card">
                    <Typography variant="h5" component="h2">
                        Expense
        </Typography>
                    <Typography variant="body2" component="p">
                        {expense}
            </Typography>
                </Card>
            </div>

        </div>
    );
};

export default Counter;