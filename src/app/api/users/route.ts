import { dbConnect } from '@/lib/dbConnect';
import { NextResponse, NextRequest } from 'next/server';
import { UserModel } from "@/validations/userShemaZod"
import bcrypt from 'bcrypt';


//   url: /api/users  crea un usuario
export const POST = async (req: Request, res: Response) => {
    await dbConnect()

    const { nombreUsuario, emailUsuario, passwordUsuario, ciudadUsuario } = await req.json()
    //ver si el email ya existe
    const emailExiste = await UserModel.find({emailUsuario: emailUsuario})

    if (emailExiste.length > 0){
      return NextResponse.json('Ese email ya fue registrado anteriormente')
    }

    try { 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(passwordUsuario, salt)
        const newUser = await UserModel.create({
            nombreUsuario,
            emailUsuario,
            passwordUsuario: hashedPassword,
            ciudadUsuario
        })
        return NextResponse.json({ data: newUser }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })

    }
}
// busca todos los usuarios
export const GET = async (req: Request, res: Response) => {
    await dbConnect()
    try {
        const result = await UserModel.find()
        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
}

