<div align="center">
  <h2 ="center">PERN URL Shortner</h2>
</div>

![PERN-url-shortner demo](https://github.com/CharakaJith/PERN-url-shortner/blob/main/animation/demo.gif)

## MINI URL is a web application developed with PostgreSQL, Express, React, and Node.js, aimed at shortening lengthy URLs.

### Built With

- [![React][React.js]][React-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]

## Getting Started

### Prerequisites

- node.js
  ```bash
  [node-url]
  ```
- postgreSQL
  ```bash
  [psql-url]
  ```

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/CharakaJith/PERN-url-shortner.git
   ```
2. Set up the server
   i. Install NPM packages
   ```bash
   npm install
   ```
   ii. Create an `.env` file
   ```bash
   touch .env
   ```
3. Set up the client
   i. Navigate to the client folder
   ```bash
   cd client
   ```
   ii. Install NPM packages
   ```bash
   npm install
   ```
   iii. Create an `.env` file
   ```bash
   touch .env
   ```

### `.env` files setup

1. Enter following contetnt in the `.env` file in the server

   ```bash
   # environment variables
   NODE_ENV=dev
   PORT=8000

   # database configurations
   PG_USER= <USER_NAME>
   PG_PASSWORD= <USER_PASSWORD>
   PG_HOST= <DATABASE_HOST>
   PG_DATABASE= <DATABASE_NAME>
   PG_MAXCONN=150
   ```

2. Enter following contetnt in the `.env` file in the client
   ```bash
   REACT_APP_API_BASE_URL = http://localhost:8000
   ```

### Start the project

1. Start development the server
   ```bash
   npm run dev
   ```
2. Start the client
   i. Navigate to the client folder
   ```bash
   cd client
   ```
   ii. Start the development client
   ```bash
   npm run start
   ```

<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[node-url]: https://nodejs.org/en/download
[psql-url]: https://www.postgresql.org/download/
