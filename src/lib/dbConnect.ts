import mongoose  from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.set("strictQuery", false)

export const dbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL_COMPASS_MONGOOSE}`)
     console.log('Se conecto a la base de datos')
  } catch (error) {
    console.log('No se pudo conectar-------con la bd----------')
  }
     
};

