import express from "express"
import { userRouter } from "./user";
import { zapRouter } from "./zap";
import { triggerRouter } from "./trigger";
import { actionRouter } from "./actions";

export const router = express.Router()

router.use("/user", userRouter);

router.use("/zap", zapRouter);

router.use("/trigger", triggerRouter);

router.use("/action", actionRouter);
