const promise = require('bluebird'); 
var tj = require('togeojson');
var fs = require('fs');

// node doesn't have xml parsing or a dom. use xmldom
var DOMParser = require('xmldom').DOMParser;

const initOptions = {
    promiseLib: promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);

// Database connection details
// Swap out with own db credentials
// create table with setup.sql
const cn = {
    host: 'nutty-blueberry.db.elephantsql.com', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'postgres',
    user: 'jcfcqrso',
    password: 'ExNoFtbZT7_BNnmb5XFIwDIDwJHOVDK0'
};

const db = pgp(cn); // database instance;

// convert kml to geojson
var kml = new DOMParser().parseFromString(fs.readFileSync('map.kml', 'utf8'));
var converted = tj.kml(kml);
var convertedWithStyles = tj.kml(kml, { styles: true });
var myJSON = JSON.stringify(convertedWithStyles);

//extract geometries from feature collection
var myGeometries = myJSON.slice(69, -2);

// prepare and execute insert query
var myQuery = "INSERT INTO kmlTable(id,geom) values(1,ST_SetSRID(ST_GeomFromGeoJSON(" + "'" +  myGeometries + "'"+ "),4326))"
db.any(myQuery)
    .then(data => {
        console.log('DATA:', data); // print data;
    })
    .catch(error => {
        console.log('ERROR:', error); // print the error;
    })
    .finally(db.$pool.end);

