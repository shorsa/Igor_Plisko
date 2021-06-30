import httpStatus from "http-status";
import { Response } from "express"


export class ErrorResponse extends Error {
   statusCode: number;
   ok?: boolean;
   message: string;
   constructor(statusCode: number, message: string, ok?: boolean) {
      super();
      this.ok = ok;
      this.statusCode = statusCode;
      this.message = message;
   }
   public static error(statusCode: number, message: string): ErrorResponse {
      return new ErrorResponse(statusCode, message, false);
   }
}


export function errorHandler(err: ErrorResponse | Error, res: Response): void {
   if (err instanceof ErrorResponse) {
      res.status(err.statusCode).json({ statusCode: err.statusCode, message: err.message });
      return;
   }
   res.status(httpStatus.BAD_REQUEST).json({ statusCode: httpStatus.BAD_REQUEST, message: err.message })

}
































