SEEDS_DIR = "./seeds"
for dir in $SEEDS_DIR/*; do
psql postgres -h localhost -p 5432 -d trabalho_bd_sql -f dir
done
