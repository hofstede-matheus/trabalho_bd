FROM postgres:9.6-alpine

COPY sql/script.sql seeds/*.sql  /docker-entrypoint-initdb.d/
       
  
