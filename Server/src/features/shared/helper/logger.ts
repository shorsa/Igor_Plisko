import { createLogger, transports, format } from "winston";

const { combine, timestamp, prettyPrint } = format;



export const logger = createLogger({
   format: combine(timestamp(), prettyPrint()),
   transports: [
      new transports.Console(),
      new transports.File({ filename: "debug.log", level: "debug" }),
      new transports.File({ filename: "warm.log", level: "warm" }),
      new transports.File({ filename: "error.log", level: "error" }),
      new transports.
   ]

});




//? prettyPrint» —  позволяет выводить  объекты любого типа в виде таблиц для просмотра во время отладки.


/**
*? ERROR — приложение в критическом положении, требуется внимание человека для продолжения.Появляется довольно
 редко, но метко.Я использую его для очень низкоуровневых вещей или для необработанных исключений
*? WARN — произошло что - то необычное, выбивающееся из обычного сценария, но приложение умное
 и восстановило свою работу само.Я использую этот уровень в обрабочиках ошибок.
*? DEBUG- — что сейчас происходит, более подробно


// const levels = {
//    error: 0,
//    warn: 1,
//    info: 2,
//    http: 3,
//    verbose: 4,
//    debug: 5,
//    silly: 6
// };



// const {
//    createLogger,
//    transports,
//    format
// } = require('winston')


// export const logger = winston.createLogger({
//    transports: [
//       new winston.transports.Console({
//          level: 'info',


//       }),
//       new winston.transports.File({ filename: 'combined.log' })
//    ]
// });


// export const logger = createLogger({
//    transports: [
//       new transports.Console({
//          level: 'debug'

//       })
//    ]
// })





