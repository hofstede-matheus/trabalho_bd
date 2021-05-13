#!bin/bash
SEEDS_DIR="./seeds"
for seed in $SEEDS_DIR/*; do
    docker cp $seed trabalho_bd_database_1:seeds
    docker exec trabalho_bd_database_1 psql -U postgres -h localhost -p 5432 -d trabalho_bd_sql -f $seed
done;