//Logger-Modul winston
const winston = require('winston');

//Server-Konfiguration
const ServerConfig = require('./ServerConfig');

let options = {
    fileInfo: {
        level: 'info',
        filename: `${ServerConfig.rootPath}/logs/combined.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    fileError: {
        level: 'error',
        filename: `${ServerConfig.rootPath}/logs/error.log`,
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

// instantiate a new Winston Logger with the settings defined above
let logger = winston.createLogger({
    defaultMeta: { service: 'registration-service' },
    format: winston.format.combine(
        winston.format.label({ label: 'Any label you like!' }),
        winston.format.timestamp(),
        winston.format.logstash()
    ),
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.File(options.fileInfo),
        new winston.transports.File(options.fileError)
    ],
    exitOnError: false // do not exit on handled exceptions
});


// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function(message, encoding) {
        // use the 'info' log level so the output will be picked up by both transports (file and console)
        logger.info(message);
    },
};

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT brackets!
 */
module.exports = {
   logger
}
