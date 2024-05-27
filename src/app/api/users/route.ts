import {dbConnect} from '@/lib/dbConnect';
import { NextResponse, NextRequest } from 'next/server';
import {UserModel} from "@/models/User"


export const POST = async (req: Request, res:Response) =>{
    await dbConnect()
    try {
        const body = await req.json()
        const newUser = await UserModel.create(body)
        return NextResponse.json({data: newUser}, {status:200})
    } catch (error) {
        return NextResponse.json({data: null}, {status:500})
        
    }
}