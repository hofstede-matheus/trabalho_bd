#!bin/bash
RELATIONSHIPS_DIR="../sql/relationships_scripts"
TABLES_DIR="../sql/tables_scripts"
for file in $TABLES_DIR/*; do
    echo $file
done
for file in $RELATIONSHIPS_DIR/*; do
    echo $file
done
