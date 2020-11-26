/*
Thema: Event logging auf dem Server
Einfacher Server, um Ereignisse (verursacht durch Client-Anfragen) zu loggen
und die Log-Files für die spätere Analyse zu verwenden.
 */

'use strict';

//Vendor Module
let express = require("express");
let bodyParser = require("body-parser");
let app     = express();
const { v4: uuidv4 } = require('uuid');

//logging package
//const morgan = require('morgan');
const winston = require('./config/Logger');
//app.use(morgan('combined', { stream: winston.stream }));

//verwendeter Browser des Clients
const useragent = require('express-useragent');
app.use(useragent.express());

//Anfrage IP-Adresse des Clients
const requestIp = require('request-ip');
app.use(requestIp.mw({ attributeName : 'clientIp' }))

//Speicherung der registrierten Benutzer
const UserRepository = require('./UserRepository');
//Validierungsregeln
const Validation = require('./ValidationService');
//Server-Konfiguration
const ServerConfig = require('./config/ServerConfig');


const port = process.env.PORT || 3000;
const server = app.listen(port);
//show on which port server runs
console.log(ServerConfig.showServerPort(port));
server.timeout = 1000 * 60 * 2; // 2 minutes



// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');
    next();
});


// necessary for posting data
// support json encoded bodies
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


//test uuid
app.get('/test1', (req, res) => {
    const id = uuidv4();
   /* let ip = req.clientIp;
    console.log(ip);*/
    winston.logger.log({
        level: 'info',
        message: `user agent: from xy`
    });
    res.status(200).send(`generated Id: ${id}`);
});


/*  1. Writing to file
    https://stackabuse.com/reading-and-writing-json-files-with-node-js/
 */
app.post('/register', (req, res) => {
    const HTTP_STATUS_NO_ACCEPTABLE = 406;
    //Daten des Posts-Requests auslesen und zusätzlich eine User-id erzeugen
    let userObj = {
        "id": uuidv4(),
        "username": req.body.user.username,
        "email": req.body.user.email,
        "password": req.body.user.password
    }

    //
    // Logging
    //
    winston.logger.log({
        level: 'info',
        message: `user agent:`
    });



    let result = Validation.validateUser(userObj);
    if (result.isNotValid) {
        winston.logger.error(result.msg);
        res.status(HTTP_STATUS_NO_ACCEPTABLE).send(result.msg);
    } else {
        //Speicherung des neuen Benutzers
        let userRepo = new UserRepository(ServerConfig.registrationFile);
        userRepo.read()
            .then((data) => {
                //log data for analysis
                console.log(userObj);
                data.push(userObj);
                return data;
            })
            .then(data => userRepo.save(data))
            .catch(error => {
                console.error(error);
            });
        res.status(201).send(`User ${userObj.username} inserted!`);
    }
});

