import express from "express"
import authMiddleware from "../middleware";
import zod, { any } from "zod"
import { prismaClient } from "../db";
// import authMiddleware from "../middleware";

export const zapRouter = express.Router();

const zapCreateBody = zod.object({
    triggerId: zod.string(),
    metaData: zod.any().optional(),
    actions: zod.array(zod.object({
        actionId: zod.string(),
        actionMetaData: zod.any().optional()
    }))
})

zapRouter.post("/", authMiddleware, async (req, res) => {
    // @ts-ignore
    const id: string = req.id;
    const body = req.body;
    const parsedData = zapCreateBody.safeParse(body);
    
    if (!parsedData.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }   

    const zapId = await prismaClient.$transaction(async tx => {
        const zap = await prismaClient.zap.create({
            data: {
                userId: parseInt(id),
                triggerId: "",
                actions: {
                    create: parsedData.data.actions.map((x, index) => ({
                        actionId: x.actionId,
                        sortingOrder: index
                    }))
                }
            }
        })

        const trigger = await tx.trigger.create({
            data: {
                triggerId: parsedData.data.triggerId,
                zapId: zap.id
            }
        });

        await tx.zap.update({
            where: {
                id: zap.id
            },
            data: {
                triggerId: trigger.id
            }
        })

        return zap.id;

    })
    return res.json({
        zapId
    })
})

zapRouter.get("/", authMiddleware, (req, res) => {
    console.log("Signin route");
    
})

zapRouter.get("/:zap", authMiddleware, (req, res) => {
    console.log(
        "zapId/zapNumber route"
    );
    
})