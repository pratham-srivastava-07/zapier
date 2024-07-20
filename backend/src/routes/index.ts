import express from "express"
import { userRouter } from "./user";
import { zapRouter } from "./zap";

export const router = express.Router()

router.use("/user", userRouter);

router.use("/zap", zapRouter);
