import jwt from "jsonwebtoken";
import CONFIG from "../../../config/config";
import { NextFunction, Request, Response, } from "express";

export function verifyTokenMiddleware(req: Request, res: Response, next: NextFunction) {
   try {
      const token: string | undefined = req.headers["authorization"]?.split(' ')[1];
      if (!token) {
         return res.status(401).json({ message: "Not authorized" })
      }
      const decoded: string | object = jwt.verify(token, CONFIG.JWT_ENCRYPTION)
      next()

   } catch (err) {
      return res.status(401).json({ message: "Not authorized" });

   }
}
