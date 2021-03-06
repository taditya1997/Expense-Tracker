const express = require('express');
const router= express.Router();
const {getTransaction,addTransaction,deleteTransaction} = require('../controller/transaction');

router
.route('/')
.get(getTransaction)
.post(addTransaction);

router
.route('/:id')
.delete(deleteTransaction);

// router.get('/',(req,res)=>{
//     res.send("hello");
// })

module.exports=router;