export class ErrorResponse extends Error {
   httpStatus: number;
   ok?: boolean;
   messageError: string;
   constructor(httpStatus: number, messageError: string, ok?: boolean) {
      super();
      this.ok = ok;
      this.httpStatus = httpStatus;
      this.messageError = messageError;
   }
   public static error(httpStatus: number, message: string): ErrorResponse {
      return new ErrorResponse(httpStatus, message, false);
   }
}

































