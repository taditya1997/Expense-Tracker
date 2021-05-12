const express = require('express');
const dotenv= require('dotenv');
const colors= require('colors');
const morgan= require('morgan');
const path= require('path');
//const connectDb= require('./config/config.env'); 

const transaction = require('./routes/transaction');
const connectDb = require('./config/db');

dotenv.config({path:'./config/config.env'});

connectDb();



const app=express();


app.use(express.json());

if(process.env.NODE_ENV==='developement')
{
    app.use(morgan('dev'));
}

app.use('/api/v1/transaction',transaction)

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('Client/build'));

    app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'Client','build','index.html')))
    
    
    
    
    //app.use(morgan('dev'));
}

const PORT= process.env.PORT||5000;



app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on  Port ${PORT}`.cyan.bold))