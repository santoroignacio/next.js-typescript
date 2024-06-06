import { dbConnect } from '@/lib/dbConnect';
import { NextResponse, NextRequest } from 'next/server';
import { UserModel } from "@/validations/userShemaZod"
import bcrypt from 'bcrypt';

export const POST = async(req: Request, res: Response)=>{
    await dbConnect()
    const { emailUsuario, passwordUsuario } = await req.json()
    //ver si el email ya existe
    const emailExiste = await UserModel.find({emailUsuario: emailUsuario})
    if (emailExiste.length === 0){
        return NextResponse.json('Ese email aún no fue registrado')
      }

      //verificar si la contraseña es la correcta, desencriptar
    try {
        const passwordCorrecto = await bcrypt.compare(passwordUsuario,emailExiste[0].passwordUsuario)
        if (!passwordCorrecto){
            return NextResponse.json('La contraseña es Incorrecta*********Mal logueado*********')
        }
        return NextResponse.json('La contraseña es correcta--------Bien logueado------')
    } catch (error) {
        return NextResponse.json('Tampoco se pudo')
    }
}