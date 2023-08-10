#! /bin/bash

if ! command -v npm &> /dev/null
then
    echo "npm n'est pas installé. Veuillez l'installer avant de continuer."
    exit 1
fi

if ! command -v docker &> /dev/null
then
    echo "docker n'est pas installé. Veuillez l'installer avant de continuer."
    exit 1
fi

if ! command -v docker-compose &> /dev/null
then
    echo "docker-compose n'est pas installé. Veuillez l'installer avant de continuer."
    exit 1
fi

cd app
npm install
cd ..
docker-compose up --build