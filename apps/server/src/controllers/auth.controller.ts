import {prisma} from "@repo/db";
import { signupSchema, signinSchema } from "@repo/schemas" 
import { hashPassword, verifyPassword } from "@repo/services"
import type { FastifyReply, FastifyRequest } from "fastify";

export async function signup(req:FastifyRequest,res:FastifyReply){
    const data = signupSchema.parse(req.body)

    const user = await prisma.user.create({
        data:{
            email:data.email,
            password:await hashPassword(data.password),
            wallet:{
                create:{}
            }
        }
    })
    res.code(200).send({message:"user's id created"})
}

export async function signin(req:FastifyRequest,res:FastifyReply){
    const data =signinSchema.parse(req.body)

    const user = await prisma.user.findUnique({
        where:{email:data.email}
    })

    if(!user){
        return res.code(401).send({message:"user dosen't exist"})
    }
    const valid = await verifyPassword(data.password,user.password)
    if(!valid){
        return res.code(403).send({message:"invalid credentials"})
    }
}

