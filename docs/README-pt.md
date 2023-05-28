# 🔔 | Notifications Service.

## 💻 | Projeto: Construindo uma API de notificações.

Seja bem vindo, esse projeto foi feito no intuito de criar uma API com NestJs utilizando o typescript.

- Colocando em prática alguns conceitos e utilizando como um microsserviço.
- Utilizando framework nestjs.
- Utilizando a linguagem typescript.
- Utilizando banco de dados PostgreSQL, sendo rodado local em um container através do Docker.
- utilizando mensageria com Apache Kafka.

## ⚙ | API.

### ✔ | Tecnologias:
- Node v18.15.0
- npm v9.6.5
- NestJs v9.4.2
- Prisma v4.13.0
- kafkajs: v2.2.4,

### 📁 | Uma breve visão do projeto:

Participação no Ingite Lab rocketseat em 2022. Objetivo criar um microsserviço de notificação com nestjs, kafka e prisma.

## 📝 | API:

Para acessar a API, basta clicar nos Links a baixo: 
- [Link LocalHost com Swagger](http://localhost:3000/swagger-ui) para utilizar a API localmente.
- Ou podendo utilizar [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

Visualização do Swagger:

![preview1 img](/docs/img/swagger-ui.png)

### 🌐 | Endpoints:
Os endpoint esperados estão funcionando perfeitamente.

<details><summary>Endpoints de Notification</summary>
<p>

| Verbo  | Endpoint                  | Parâmetro | Body             |
|--------|---------------------------|-----------|------------------|
| POST   | /notifications            | N/A   | Schema notifications |
| GET    | /notifications/count/from/{recipientId} | code   | N/A    |
| GET    | /notifications/from/{recipientId} | code        | N/A    |
| PATCH  | /notifications/{id}/read          | code        | N/A    |
| PATCH  | /notifications/{id}/unread        | code        | N/A    |
| PATCH  | /notifications/{id}/cancel        | code        | N/A    |

</p>
</details>


O schema (model) dos endpoitns, são utilizado para passar os campos exigidos, como no verbo POST.

Todas solicitações como GET, POST, PATCH estão funcionando.

<b>Segue a lista de commits para verificar o que foi implementado e alterado! Utilizo o Conventional Commits Pattern para ajudar e detalhar o contexto de cada commit efetuado.</b>

## 👩‍💻 Meus Links:

- Github: [Victor Hugo.](https://github.com/torugo99)
- LinkedIn: [Victor Hugo.](https://www.linkedin.com/in/victor-hugo99/)
- Meu Site: [Victor99dev.](http://victor99dev.website/)

### 😀 | Créditos e Agradecimentos:
- Todas as informações do Nestjs, sendo comandos ou qualquer outra informação foi retirada da documentação oficial.
- Documentações: 
    - [NestJs](https://docs.nestjs.com/)
    - [Swagger](https://docs.nestjs.com/openapi/introduction)
    - [Prisma](https://www.prisma.io/docs)
    - [Docker](https://docs.docker.com/)
    - [Kafka](https://docs.nestjs.com/microservices/kafka)
- Upstash é por onde rodei o meu serviço kafka de mensageria: [link](https://upstash.com/) 
- Dbeaver é por onde acesso meus bancos de dados: [Link](https://dbeaver.io/)
- Onde eu gerei o diagrama do banco: [Link](https://app.sqldbm.com/#)
