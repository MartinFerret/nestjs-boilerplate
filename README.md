# 🔔 NestJS Boilerplate

This boilerplate has been made in order to be usable quickly with many useful dependencies.

## 📣 Starter-kit including :

- Docker-compose (Mysql, Adminer & Redis containers)
- Pino logger avec correlation ID (https://www.npmjs.com/package/nestjs-pino)
- OpenAPI Swagger (https://www.npmjs.com/package/@nestjs/swagger)
- Terminus (https://www.npmjs.com/package/@nestjs/terminus)
- Auth with JWT (https://www.npmjs.com/package/@nestjs/jwt)
- Cache manager (https://www.npmjs.com/package/@nestjs/cache-manager)
- ESLint, Prettier & Husky as quality tools

---

## 💡 Clone this repository :

`git clone git@github.com:MartinFerret/nestjs-boilerplate.git`

---

## 💥 Install dependencies

`npm install`

---

## Run docker containers

`docker-compose up --build`

---

## 🖋️ Create a .env file to store your env variables (example)

```
DATABASE_USERNAME=username
DATABASE_PASSWORD=password
DATABASE_NAME=db_name
DATABASE_PORT=db_port
DATABASE_HOST=db_host

API_VERSION=1.0

REDIS_HOST=redis_host
REDIS_PORT=redis_port

JWT_PASSPHRASE=jwt_passphrase
```
---

## 🔑 Run the application

`npm run start:dev`

---

<details close>

<summary> 🚀 Now, you must be like... 🚀</summary>


![Alt Text](https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif)

</details>
