import express from "express"
import { PrismaClient } from "@prisma/client";
const app = express()

const  prisma = new PrismaClient()

app.use(express.json())


app.post("/hooks/catch/:userId/:zapId", async(req, res) => {
    const userId = req.params.userId;
    const zapId = req.params.zapId
    const body = req.body;

    await prisma.$transaction(async tx => {
        const run = await prisma.zapRun.create({
            data: {
                zapId: zapId,
                metadata: body
            }
        })
        await prisma.zapRunOutbox.create({
            data: {
                zapRunId: run.id
            }
        })
    })
    res.json({
        message: "Webhook received"
    })
})

app.listen(3000)