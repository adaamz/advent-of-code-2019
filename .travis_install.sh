#!/usr/bin/env bash

for d in */; do
    cd $d
    echo "Installing " $d
    npm install
done
