# CrudJS_REST_API

This REST API Its intended to simulate a products response at the backend when its added, changed, located and deleted

## Installation

Install Node.js
Install mondodb(ensure the patch of the installations of mongo are in the windows path enviroment to use globally)
install the dependencys on the package.json

```terminal
    npm install mongoose
    npm install express
    npm install mongodb
    npm install nodemon --save-dev
```

## Usage

```terminal
npm start
```

Postman for REST API usage EX:
[GET] http://localhost:9000/products/
[POST] http://localhost:9000/products/5f4dd9af5f3aa83fa48c76f0     --> example Id, the DB will generate a random id when a product its created
[PATCH] http://localhost:9000/products/5f4dd9af5f3aa83fa48c76f0
[DELETE] http://localhost:9000/products/5f4dd9af5f3aa83fa48c76f0

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Autor
[Jonathan]

## Superviser
[Advantek]
