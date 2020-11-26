//Logger-Modul winston
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label } = format;

//Server-Konfiguration
const ServerConfig = require('./ServerConfig');


// instantiate a new Winston Logger with the settings defined above
let logger = createLogger({
    level: 'info',
    defaultMeta: { service: 'registration-service' },
    format: combine(
        label({ label: 'Any label you like!' }),
        timestamp(),
        format.logstash()
    ),
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new transports.File({ filename: `${ServerConfig.rootPath}/logs/error.log`, level: 'error' }),
        new transports.File({ filename: `${ServerConfig.rootPath}/logs/combined.log` }),
        new transports.Console()
    ],
    exitOnError: false // do not exit on handled exceptions
});

/*const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'registration-service' },
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.File({ filename: `${rootPath}/logs/error.log`, level: 'error' }),
        new winston.transports.File({ filename: `${rootPath}/logs/combined.log` }),
    ],
});*/



/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT brackets!
 */
module.exports = {
   logger
}
