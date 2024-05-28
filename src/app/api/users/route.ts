import {dbConnect} from '@/lib/dbConnect';
import { NextResponse, NextRequest } from 'next/server';
import {UserModel} from "@/models/User"

//   url: /api/users  crea un usuario
export const POST = async (req: Request, res:Response) =>{
    await dbConnect()
    try {
        const body = await req.json()
        const newUser = await UserModel.create(body)
        return NextResponse.json({data: newUser}, {status:201})
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
        
    }
}
// busca todos los usuarios
export const GET = async(req: Request, res: Response)=>{
    await dbConnect()
    try {
        const result = await UserModel.find()
        return NextResponse.json({data: result}, {status:200})
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
    }
}