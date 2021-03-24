import { createLogger, transports, format, } from "winston";

const { combine, timestamp, prettyPrint } = format;

export const loggerHelper = createLogger({
   format: combine(timestamp(), prettyPrint()),
   transports: [
      new transports.Console(),
      new transports.File({ filename: "debug.log", level: "debug" }),
      new transports.File({ filename: "warm.log", level: "warm" }),
      new transports.File({ filename: "error.log", level: "error" }),

   ],
   exitOnError: false
});







