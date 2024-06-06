import z, { string } from 'zod';
import mongoose from "mongoose";

const invalid_type_error = 'Tipo de dato inválido para este campo'
//const required_error = 'This field cannot be blank'


export const zodUserSchema = z.object({
    nombreUsuario: z.string({ invalid_type_error}).min(3,'Debe contener mas de 2 caracteres').max(30,'Debe contener menos de 30 caracteres'),
    emailUsuario: z.string({ invalid_type_error }).email('Provea un email válido').min(3, 'Debe contener al menos 3 caracteres'),
    passwordUsuario : z.string({ invalid_type_error}).min(3,'Debe contener mas de 2 caracteres').max(30,'Debe contener menos de 30 caracteres'),
    ciudadUsuario: z.string({ invalid_type_error }).min(3,'Debe contener mas de 2 caracteres').max(30,'Debe contener menos de 30 caracteres')
  })

  export type IUser = z.infer<typeof zodUserSchema>;

  export const userShema = new mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true
    },
    emailUsuario: {
        type: String,
        required: true,
        unique: true
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
