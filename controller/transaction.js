
//@desc Get Transaction
//@route Get /api/v1/transactions
//@access Public
const Transaction= require('../models/Transaction');

exports.getTransaction= async (req,res,next)=>{


    try{
        const transaction= await Transaction.find();
        return res.status(200).json({
            succes:true,
            count:transaction.length,
            data:transaction
        })
    }
    catch(error)
    {
        return res.status(500).json({
            succes:false,
            error:'Server Error'
        });
    }



}


//@desc Add Transaction
//@route Post /api/v1/transactions
//@access Public


exports.addTransaction=async (req,res,next)=>{


    try{
        const{text,amount}=req.body;
        const transaction= await Transaction.create(req.body);

        return res.status(201).json({
            succes:true,
            data:transaction
        })
        
    }
    catch(error)
    {

        if(error.name==='ValidationError')
        {
            const message= Object.values(error.errors).map(val=>val.message);

            return res.status(400).json({
                succes:false,
                error:message,
            })
        }
        else{
            return res.status(500).json({
                success:false,
                error:'Server Error'
            })
        }
        //return res.status(500).send(error)
    }
  




    //res.send('Post Transaction/')
    }


    
//@desc Delete Transaction
//@route Delete /api/v1/transactions/:id
//@access Public


exports.deleteTransaction= async(req,res,next)=>{

try{
    const transaction= await Transaction.findById(req.params.id);

    if(!transaction)
    {
        return res.status(404).json({
            success:false,
            error:"No Transaction found"
        })
    }

    await transaction.remove();

    res.status(200).json({
        success:true,
        data:{}
    })
}
catch(error)
{
    return res.status(500).json({
        success:false,
        error:"Server Error"
    })
}

    //res.send('Delete Transaction/')
    }