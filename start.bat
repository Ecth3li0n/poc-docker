@echo off
SETLOCAL

:: Vérification de l'installation de npm
WHERE npm >nul 2>&1
IF ERRORLEVEL 1 (
    echo npm n'est pas installé. Veuillez l'installer avant de continuer.
    exit /b 1
)

:: Vérification de l'installation de docker
WHERE docker >nul 2>&1
IF ERRORLEVEL 1 (
    echo docker n'est pas installé. Veuillez l'installer avant de continuer.
    exit /b 1
)

:: Vérification de l'installation de docker-compose
WHERE docker-compose >nul 2>&1
IF ERRORLEVEL 1 (
    echo docker-compose n'est pas installé. Veuillez l'installer avant de continuer.
    exit /b 1
)

cd app
npm install
cd ..
docker-compose up --build

ENDLOCAL
