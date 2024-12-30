import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
export const connectDb=async()=>{
try {
    const conn= await mongoose.connect(process.env.MONGODB_URI);
    console.log('Data base Connected',conn.connection.host);

} 

catch (error) 
{
console.log('Error:',error)    
}

}
