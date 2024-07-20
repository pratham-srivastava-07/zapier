import { JWT_SECRET } from "./config";
import jwt, { JwtPayload } from "jsonwebtoken"

export default function authMiddleware(req: any, res: any, next: any) {
    const authHeaders = req.headers.authorization

    if(!authHeaders || !authHeaders.startsWith("bearer")) {
        res.status(403).json({message: "Invalid Headers"})
    }

    const token = authHeaders.split(' ')[1];

    try{
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
        req.userId = decoded.userId;

        next();
    } catch(err) {
        res.status(403).json({error: err})
    }
}