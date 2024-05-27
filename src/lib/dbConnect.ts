import mongoose  from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.set("strictQuery", false)

export const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/DB_productos')
     console.log('Se conecto a la base de datos')
  } catch (error) {
    console.log('No se pudo conectar-------con la bd----------')
  }
     
};

