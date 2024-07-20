import express from "express"
import authMiddleware from "../middleware";

export const zapRouter = express.Router();

zapRouter.post("/" , authMiddleware, (req, res)=> {
    console.log("create a zap");
    
})

zapRouter.get("/", authMiddleware, (req, res) => {
    console.log("Signin route");
    
})

zapRouter.get("/:zap", authMiddleware, (req, res) => {
    console.log(
        "zapId/zapNumber route"
    );
    
})