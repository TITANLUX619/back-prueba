'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const path = require("path");

const app = express();
const port = process.env.PORT || 8081;
const dbURL =  "mongodb://guadaltech:guadaltech1@ds151513.mlab.com:51513/guadaltech";


app.use(bodyParser.urlencoded({ extended: false }));
app.unsubscribe(bodyParser.json);

MongoClient.connect(dbURL, { useNewUrlParser: true }, (err, mlabs) => {

    if (err) {
        console.error("Error accesing DB");
        process.exit(1);
    }

    console.log("Connected to Guadaltech DB");
    const dbGT= mlabs.db("guadaltech");
    const dbGTC = dbGT.collection("guadaltech");
    const GTAPI = require("./api/v1");
    GTAPI.register(app, dbGTC);

    app.listen(port, () => {
        console.log("Server ready on port" + port + "!");
    }).on("error", (e) => {
        console.log("Server NOT READY:" + e);
    });
    
});
