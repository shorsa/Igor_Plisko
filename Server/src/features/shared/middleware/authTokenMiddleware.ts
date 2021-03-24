import jwt from "jsonwebtoken";
import CONFIG from "../../../config/config";
import { Request, Response } from "express";
import { ErrorResponse } from "../helper/app_error";
import httpStatus from "http-status";


export function verifyTokenMiddleware(req: Request, res: Response, next: any) {
   try {
      const token = req.headers["authorization"]?.split(' ')[1];
      if (!token) {
         return res.status(401).json({ message: "Not authorized" })
      }
      const decoded = jwt.verify(token, CONFIG.JWT_ENCRYPTION)
      next()

   } catch (err) {
      return res.status(401).json({ message: "Not authorized" });

   }
}
