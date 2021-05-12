import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    loading:false,
    transaction: [],
    error:null

}


//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


   //Actions
   async function getTransaction()
   {
       try{
           const res= await axios.get('/api/v1/transaction');
           console.log(res);
           dispatch({
               type:'GET_TRANSACTION',
               payload:res.data.data
           })
       }
       catch(err){
         dispatch({
               type:'TRANSACTION_ERROR',
               payload:err.response.data.error
           })
       }
   }
  async function deleteTransactions(id)
   {
     try{

        await axios.delete(`/api/v1/transaction/${id}`)
         dispatch({
             action:'DELETE_TRANSACTION',
             payload:id
         })
     }
     catch(err)
     {
         dispatch({
             action:'TRANSACTION_ERROR',
             payload:err.response.data.error
         })
     }



       
   }


  async function addTransaction(transaction)

   {

    const config={
        headers:
        {
            'Content-Type':'application/json'
        }
    }
    try{
       const res=await axios.post('/api/v1/transaction',transaction,config);
       dispatch({
        type:'ADD_TRANSACTION',
        payload:res.data.data,
    })
    
       
    }
    catch(err)
    {
        dispatch({
            action:'TRANSACTION_ERROR',
            payload:err.response.data.error
        })
    }




       
   }


    return (<GlobalContext.Provider value={{ transaction: state.transaction,error:state.error,loading:state.loading,deleteTransactions,addTransaction,getTransaction}}>

        {children}
    </GlobalContext.Provider>
    )



}

