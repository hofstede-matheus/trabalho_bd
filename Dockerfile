FROM postgres:9.6-alpine

COPY sql/script.sql /docker-entrypoint-initdb.d/