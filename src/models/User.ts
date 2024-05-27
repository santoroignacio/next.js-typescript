import mongoose from "mongoose";
import { Schema, model } from "mongoose";


const userShema = new mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true
    },
    emailUsuario: {
        type: String,
        required: true,
        //unique: true
    },
    passwordUsuario: {
        type: String,
        required: true
    },
    ciudadUsuario: {
        type: String
    },
},
    {
        timestamps: true,
        versionKey: false
    })

//export default model('Usuario', userShema)
export  const UserModel = mongoose?.models?.User || mongoose.model("User", userShema) 
