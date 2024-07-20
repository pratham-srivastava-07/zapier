import express from "express"
import zod from "zod"
import authMiddleware from "../middleware"
import { Prisma } from "@prisma/client"
import { prismClient } from "../db"

export const userRouter = express.Router()


const signUpBody = zod.object({
    email: zod.string().email(),
    username: zod.string().min(5),
    password: zod.string().min(6)
})

userRouter.post("/signup", authMiddleware, async (req, res) => {
    const parsedData =  signUpBody.safeParse(req.body)

    if(!parsedData.success) {
       return res.status(411).json({message: "Signup failed/ Invalid credentials"})
    }  

    const existingUser = await prismClient.user.findFirst({
        where: {
            email: parsedData.data.email
        }
    })
    if(existingUser) {
        return res.status(403).json({message: "User already exists"})
    }

    const newUser = await prismClient.user.create({
        data: {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        }
    })
})