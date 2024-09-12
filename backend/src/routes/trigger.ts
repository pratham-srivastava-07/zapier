import express from "express"
import zod from "zod"
import authMiddleware from "../middleware"
import { Prisma } from "@prisma/client"
import { prismaClient } from "../db"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config"

export const triggerRouter = express.Router()

triggerRouter.get("/available", async (req, res) => {
    const availableTriggers = await prismaClient.availableTrigger.findMany({});

   return res.status(200).json({
        availableTriggers
    })
})