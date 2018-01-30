// var ogr2ogr = require('ogr2ogr')
// var pg = require('pg');
// //var conString = "postgres://jcfcqrso:ExNoFtbZT7_BNnmb5XFIwDIDwJHOVDK0@host=nutty-blueberry.db.elephantsql.com:5432/postgres"; //TODO: point to RDS instance
// var fs = require('fs');

// var databaseServer = "nutty-blueberry.db.elephantsql.com";
// var databaseName = "postgres";
// var databaseUser = "jcfcqrso";
// var databasePW = "ExNoFtbZT7_BNnmb5XFIwDIDwJHOVDK0";

// var connString = "PG: host=%s dbname=%s user=%s password=%s" %(databaseServer,databaseName,databaseUser,databasePW)
 
// var shapefile = ogr2ogr('map.kml')
//                     .format('ESRI Shapefile')
//                     .skipfailures()
//                     .stream()
// shapefile.pipe(fs.createWriteStream('shapefile.zip'))

// var uploadKML = ogr2ogr('map.kml')
//                 .format('PostgreSQL/PostGIS')
//                 .skipfailures()
//                 .destination(connString)
// uploadKML.pipe(fs.createWriteStream())