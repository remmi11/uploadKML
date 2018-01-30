DROP TABLE kmlTable;

CREATE TABLE kmlTable
(
  id serial NOT NULL,
  geom public.geometry(geometry,4326)
);

--//insert into testbert1(id,location) values(1,ST_SetSRID(ST_GeomFromGeoJSON('%s'),4326))" %(myJSON)
insert into testbert1(id,location)
values(1,ST_SetSRID(ST_GeomFromGeoJSON('{"type":"Polygon","coordinates":[[[-114.017347,51.048005],[-114.014433,51.047927],[-114.005899,51.045381],[-114.017347,51.048005]]]}'),4326))

insert into testbert1(id,location) values(1,ST_SetSRID(ST_GeomFromGeoJSON('{"type":"Polygon","coordinates":[[[-88.84231567382812,39.38101803294523],[-89.15817260742188,39.14603767446419],[-88.92059326171874,39.0351862510659],[-88.61846923828125,39.25671479372372],[-88.74755859375,39.36084706023964],[-88.84231567382812,39.38101803294523]]]},"properties":{}}'),4326))
