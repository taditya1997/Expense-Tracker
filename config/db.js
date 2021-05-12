const mongoose= require('mongoose');
const connectDb= async()=>
{
    try{
        const connection=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true

        })
        console.log(`MongoDB Conected: ${connection.connection.host}`.yellow.underline.bold);
    }
    catch(error)
    {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

module.exports= connectDb;