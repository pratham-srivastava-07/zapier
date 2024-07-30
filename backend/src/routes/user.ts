import express from "express"
import zod from "zod"
import authMiddleware from "../middleware"
import { Prisma } from "@prisma/client"
import { prismaClient } from "../db"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config"

export const userRouter = express.Router()


const signUpBody = zod.object({
    email: zod.string().email().min(5),
    password: zod.string().min(6),
    name: zod.string().min(3)
})

userRouter.post("/signup", async (req, res) => {
    const body = req.body
    const parsedData =  signUpBody.safeParse(body)

    if(!parsedData.success) {
        // console.log(parsedData.error)
       return res.status(411).json({message: "Signup failed/ Invalid credentials"})
    }  

    const existingUser = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.email
        }
    })
    if(existingUser) {
        return res.status(403).json({message: "User already exists"})
    }

    const newUser = await prismaClient.user.create({
        data: {
            email: parsedData.data.email,
            password: parsedData.data.password,
            name: parsedData.data.name
        }
    })
    return res.status(200).json({
        message: "Please verify by checking email"
    })
})

const signInBody = zod.object({
    username: zod.string().min(5),
    password: zod.string().min(6)
})

userRouter.post("/signin", async(req, res) => {
    const body = req.body
    const parsedData = signInBody.safeParse(body)

    if(!parsedData.success) {
        return res.status(411).json({
            message: "Invalid credentials"
        })
    }

    const existingUser = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username
        }
    })

    if(!existingUser) {
        return res.status(403).json({message: "Sorry Invalid redentials"})
    }
    const token = jwt.sign({
        id: existingUser.id
    }, JWT_SECRET)

    res.status(200).json({
        token: token
    })
})

userRouter.get("/data", authMiddleware, async (req, res) => {
    //@ts-ignore
    const id = req.id
    const user = await prismaClient.user.findFirst({
        where: {
            id
        },
        select:  {
            email: true,
            name: true
        }
    })

    res.status(200).json({
        user
    })
})