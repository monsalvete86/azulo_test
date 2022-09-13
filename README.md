# How to run 
```
$ Crear la base de datos  que se va a usar
$ Configurar en el archivo flyway-9.2.1/conf/flyway.conf las variables
$ flyway.url=
$ flyway.user=root
$ flyway.password=
$ Ubicarse en el directorio flyway-9.2.1 y ejecutar flyway migrate
$ Ubicate en el directorio raiz donde se encuentra el proyecto de flyway
$ Ejecutar: git clone https://github.com/directus/directus.git
$ cd .. directus
$ Ejectutar npx create-directus-procject name_proyect
$ Ubicarse en la carpeta airportart-api y configurar el archivo .env basandose en el archivo .env.example
$ npm install
$ npm run dev # modo developer
$ npm run build # run build para production
```
# Deploy 
```
$ tsc

$ node dist/index.js
```
