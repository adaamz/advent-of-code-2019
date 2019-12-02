#!/usr/bin/env bash

for d in */; do
    cd $d
    echo "Testing " $d
    npm test
done
