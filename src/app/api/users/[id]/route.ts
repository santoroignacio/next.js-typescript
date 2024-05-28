import { dbConnect } from '@/lib/dbConnect';
import { NextResponse, NextRequest } from 'next/server';
import { UserModel } from "@/models/User"

//   url: /api/users/id  --busca un usuario
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await dbConnect()
    const id = params.id
    console.log('id Nuevo:', id)
    try {
        const result = await UserModel.findById(id)
        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 400 })
    }
}

// borra un usuario
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await dbConnect()
    const id = params.id
    try {
        const result = await UserModel.findByIdAndDelete(id)
        if (!result) {
            return NextResponse.json({ message: `No se pudo borrar el usuario con id: ${id}` }, { status: 404 })
        }
        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
}

// actualiza un usuario
export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await dbConnect()
    const id = params.id
    console.log('id:', id)
    const body = await req.json()
    console.log('body:', body)
    try {
        const result = await UserModel.findByIdAndUpdate(id, {$set:{...body}}, {new:true})
        if (!result) {
            return NextResponse.json({ message: `No se pudo actualizar el usuario con id: ${id}` }, { status: 404 })
        }
        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
}








