#!/bin/bash
set -e

project=$(cat ./env/$1/project)

mkdir -p ./lib/config
cp ./env/$1/* ./lib/config/

firebase --debug deploy --project $project
