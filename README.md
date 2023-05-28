# 🔔 | Notifications Service.

## 💻 | Project: Building a Notifications API.

Welcome, this project was made with the aim of creating an API with NestJs using typescript.
##### [ 🇧🇷 Leia esta página em Português | Read this page in Português](./docs/README-pt.md)

- Put some concepts into practice and use them with a microservice.
- Use of the nestjs framework.
- Use of the typescript language.
- Use of PostgreSQL database, running locally in container via Docker.
- Use of messages with Apache Kafka.

## ⚙ | API.

### ✔ | Technologies:
- Node v18.15.0
- npm v9.6.5
- NestJs v9.4.2
- Prisma v4.13.0
- kafkajs: v2.2.4,

### 📁 | A brief overview of the project:

Participation in rocketseat free Ingite Lab in 2022. Objective to create a notification microservice with nestjs, kafka and prisma.

## 📝 | API:

To access the API, just click on the links below:
- [Link LocalHost with Swagger](http://localhost:3000/swagger-ui).
- Use [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/).

Swagger view:

![preview1 img](/docs/img/swagger-ui.png)

### 🌐 | Endpoints:
The expected endpoints are working perfectly.

<details><summary>Notification Endpoints</summary>
<p>

| Verbo  | Endpoint                  | Parameter | Body             |
|--------|---------------------------|-----------|------------------|
| POST   | /notifications            | N/A   | Schema notifications |
| GET    | /notifications/count/from/{recipientId} | code   | N/A    |
| GET    | /notifications/from/{recipientId} | code        | N/A    |
| PATCH  | /notifications/{id}/read          | code        | N/A    |
| PATCH  | /notifications/{id}/unread        | code        | N/A    |
| PATCH  | /notifications/{id}/cancel        | code        | N/A    |

</p>
</details>


The schema (model) of the endpoints are used to pass the mandatory fields like in POST and PUT verbs.

All requests like GET, POST, PATCH are working.

<b>Follow the list of commits to check what was implemented and changed! I use the Conventional Commits Pattern to help and detail the context of each commit made.</b>

## 👩‍💻 My Links:

- Github: [Victor Hugo.](https://github.com/torugo99)
- LinkedIn: [Victor Hugo.](https://www.linkedin.com/in/victor-hugo99/)
- Meu Site: [Victor99dev.](http://victor99dev.website/)

### 😀 | Credits and Thanks:
- All Nestjs information, whether commands or any other information were taken from the official documentation.
- Documents: 
    - [NestJs](https://docs.nestjs.com/)
    - [Swagger](https://docs.nestjs.com/openapi/introduction)
    - [Prisma](https://www.prisma.io/docs)
    - [Docker](https://docs.docker.com/)
    - [Kafka](https://docs.nestjs.com/microservices/kafka)
- Upstash is where I ran my kafka messaging service: [link](https://upstash.com/) 
- Dbeaver is where I access my databases: [Link](https://dbeaver.io/)
