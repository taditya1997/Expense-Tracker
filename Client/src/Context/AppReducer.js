export default (state,action)=>
{
    switch(action.type)
    { 
        
        case 'GET_TRANSACTION':
            return{
                ...state,
                loading:false,
                transaction:action.payload
            }
        
        case 'DELETE_TRANSACTION':

           return{
               ...state,transaction:state.transaction.filter(transactions=>transactions._id!==action.payload)
            }

        case 'ADD_TRANSACTION':
            return{
                ...state,transaction:[...state.transaction,action.payload]
            }
        case 'TRANSACTION_ERROR':
            return{
                ...state,
                error:action.payload
            }

        default:
            return state;
    }
}