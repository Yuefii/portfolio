<p align="center">
  <img src="public/github_banner.png" alt="github_banner">
</p>

<div align="center">

![Next.js Badge](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat-square)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square)
![Vercel Badge](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat-square)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square)
![PostgreSQL Badge](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=flat-square)
![Firebase Badge](https://img.shields.io/badge/Firebase-DD2C00?logo=firebase&logoColor=fff&style=flat-square)
![Docker Badge](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat-square)

</div>

## Installation

To run the Project in your local machine, follow these steps: Clone the repository to your machine and install the needed dependencies. We use `bun` to manage our packages, so please make sure it is installed in your local machine.

```bash
git clone https://github.com/Yuefii/portfolio.git

cd portfolio

bun install
```

To store secret configurations and environment variables, you need to create a `.env` file based on the `env.example` file and adjust the values of the environment variables according to your project needs.

```bash
cp env.example .env
```

Start up a docker container running Postgresql. A `docker-compose` file is provided to make this easier.

```bash
# inside docker/compose

docker compose up -d

# or with cmake

make db_up
```

Start up a firebase-emulator running firebase storage.

```bash
# initialize firebase
firebase init

firebase emulator:start
```

```bash
# for development
bun dev

# for production
bun build
bun start
```
