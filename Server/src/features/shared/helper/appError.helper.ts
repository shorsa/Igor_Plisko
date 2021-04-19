export class ErrorResponse extends Error {
   httpStatus: number;
   ok?: boolean;
   message: string;
   constructor(httpStatus: number, message: string, ok?: boolean) {
      super();
      this.ok = ok;
      this.httpStatus = httpStatus;
      this.message = message;
   }
   public static error(httpStatus: number, message: string): ErrorResponse {
      return new ErrorResponse(httpStatus, message, false);
   }
}

































