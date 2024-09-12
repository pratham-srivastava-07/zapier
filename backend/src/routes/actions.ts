import express from "express"
import zod from "zod"
import authMiddleware from "../middleware"
import { Prisma } from "@prisma/client"
import { prismaClient } from "../db"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config"

export const actionRouter = express.Router()

actionRouter.get("/available", async (req, res) => {
    const availableActions = await prismaClient.availableAction.findMany({})
    
    res.status(200).json({
        availableActions
    })
})