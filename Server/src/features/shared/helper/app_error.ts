
import * as httpStatus from "http-status";



export class ErrorResponse extends Error {
   httpCode: number;
   ok?: boolean;
   messageError: string;
   constructor(httpCode: number, messageError: string, ok?: boolean) {
      super();
      this.ok = ok;
      this.httpCode = httpCode;
      this.messageError = messageError;
   }
   public static error(httpCode: number, message: string): ErrorResponse {
      return new ErrorResponse(httpCode, message, false);
   }
}

































