var request = require("request");


//-------------------index.js basketball-stats ----------------------------//

const BASE_API_PATH = "/api/v1";
var GTAPI = {};

module.exports = GTAPI;

const initialData = [{
    "dni": "49034385H",
    "firstName": "Antonio",
    "lastName": "López Soult"
},
{
    "dni": "49034385I",
    "firstName": "María",
    "lastName": "López Soult"
},
{
    "dni": "49034385J",
    "firstName": "Pedro",
    "lastName": "López Soult"
},
{
    "dni": "49034385K",
    "firstName": "Juan",
    "lastName": "López Soult"
},
{
    "dni": "49034385L",
    "firstName": "Carlos",
    "lastName": "López Soult"
}];

GTAPI.register = function(app, dbGTC) {

    app.get(BASE_API_PATH + "/loadInitialData", (req, res) => {

        dbGTC.insert(initialData, function(err, newDoc) {
            if (err) {
                console.error("Error accesing DB");
                res.sendStatus(500);
                return;
            }
            else {
                res.sendStatus(201);
                console.log("INSERTED " + initialData.length);
            }


        });
    });

    app.get(BASE_API_PATH + '/resources', (req, res) => {
       
        dbGTC.find().toArray((err, data) => {
            if (err) {
                console.error("Error accesing to DB");
                res.sendStatus(500);
                return;
            }
            else {
                res.status(200).send(data);

            }
        });    
    });

    app.get(BASE_API_PATH + '/resources/:dni', (req, res) => {
        
        dbGTC.find({ "dni": req.params.dni }).toArray((err, data) => {
            if (err) {
                console.error("Error accesing to DB");
                res.sendStatus(500);
                return;
            }
            else {
                res.status(200).send(data);
            }
        });        
    });

    app.post(BASE_API_PATH + '/resources', (req, res) => {
        
        dbGTC.insert(basketballstat, function(err, newDoc) {
            if (err) {
                console.error("Error accesing DB");
                res.sendStatus(500);
                return;
            }
            else {
                res.sendStatus(201);
                console.log("INSERTED 1");
            }
    
        });
    });

    app.put(BASE_API_PATH + '/resources/:dni', (req, res) => {
        dbGTC.update({ "dni": req.params.dni }, data, (err, numUpdated) => {
            if (err) {
                console.error("Error accesing DB");
                res.sendStatus(500);
                return;

            }
            else if (numUpdated.result.n == 0) {
                res.sendStatus(404);
                return;
            }
            else {
                console.log("UPDATED " + numUpdated.result.n);
                res.sendStatus(200);
            }
        });
    });

    app.delete(BASE_API_PATH + '/resources/:dni', (req, res) => {
        
        dbGTC.remove({ "dni": req.params.dni }, function(err, numRemoved) {
            if (err) {
                console.error("Error accesing DB");
                res.sendStatus(500);
                return;
            }
            else if (numRemoved.result.n == 0) {
                res.sendStatus(404);
                return;
            }
            else {
                console.log("DELETED " + numRemoved.result.n);
                res.sendStatus(200);
            }
        });
    });

};

