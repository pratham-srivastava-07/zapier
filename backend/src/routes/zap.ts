import express from "express"
import authMiddleware from "../middleware";
import zod, { any, ZodParsedType } from "zod"
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
        console.log(parsedData.error)
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

zapRouter.get("/", authMiddleware, async(req, res) => {
    //@ts-ignore
    const id = req.id
    const zaps = await prismaClient.zap.findMany({
        where: {
            userId: id
        },
        include: {
            actions: {
                include: {
                    type: true
                }
            },
            trigger: {
                include: {
                    type: true
                }
            }
        }
    })
    // console.log("Signin route");
    return res.json({zaps})
})

zapRouter.get("/:zap", authMiddleware, async(req, res) => {
    //@ts-ignore
    const id = req.id
    const zapId =  req.params.id
    const zaps = await prismaClient.zap.findFirst({
        where: {
            id: zapId,    // this will chk for specific zap with id and the specific user associated with it
            userId: id
        },
        include: {
            actions: {
                include: {
                    type: true
                }
            },
            trigger: {
                include: {
                    type: true
                }
            }
        }
    })
    // console.log("Signin route");
    return res.json({zaps})
    
})