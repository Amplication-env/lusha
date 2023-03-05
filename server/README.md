# ${{ values.name }}

This is the basic boilerplate of NestJs App - with lusha bootstrap, Good Luck!

To start the app, run:

```sh
npm install
npm start
```

### App folder - business logic:

In the app folder we have the business logic of our app, and adapters to our web-server framework. <br />
We have 2 folders: 
<ol>
  <li>Entities</li>
  <li>Use cases</li>
</ol>

These folders are related to the **_business logic only_**!
In these folders we shouldn't use any decorator of NestJs.       |
| -------------------- | ---------------------------------------- | ---------------------------------------------------------- |
| DEBUG_MODE           | Debug level                              | 1                                                          |
| DB_URL               | Local database connection URL            | db-provider://admin:admin@localhost:${DB_PORT}/\${DB_NAME} |
| DB_PORT              | Local database port                      |                                                            |
| DB_USER              | Local database username                  | admin                                                      |
| DB_PASSWORD          | Local database password                  | admin                                                      |
| COMPOSE_PROJECT_NAME | Docker Compose project name              | amp\_{applicationId}                                       |
| SERVER_PORT          | The port that the server is listening to | 3000                                                       |
| JWT_SECRET_KEY       | JWT secret                               | Change_ME!!!                                               |
| JWT_EXPIRATION       | JWT expiration in days                   | 2d                                                         |

\*db-provider - the prisma DB provider (for example: for postgres is postgresql and for MySQL is mysql)

## Getting Started - Local Development

### Prerequisites

Make sure you have Node.js 16.x, npm, and Docker installed.

### Install dependencies

In the `server` subdirectory, run:

```console
cd server
npm install
```

### Generate Prisma client

```console
npm run prisma:generate
```

### Start database using Docker

```console
npm run docker:db
```

### Initialize the database

```console
npm run db:init
```

### Start the server

```console
npm start
```

## Getting Started - Docker Compose

In the `server` subdirectory, run:

```console
npm run compose:up
```

## Learn more

You can learn more in the [Amplication documentation](https://docs.amplication.com/guides/getting-started).
