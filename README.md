<div align="center">
  <h2 ="center">PERN URL Shortner</h2>
</div>

![PERN-url-shortner demo](https://github.com/CharakaJith/PERN-url-shortner/blob/main/animation/demo.gif)

## MINI URL is a web application developed with PostgreSQL, Express, React, and Node.js, aimed at shortening lengthy URLs.

### Built With

- [![PostgreSQL][PSQL]][PSQL-url]
- [![Express][Express.js]][Express.js-url]
- [![React][React.js]][React-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![Node][Node.js]][Node-url]

## Getting Started

### Prerequisites

- node.js: [Node.js download page](https://nodejs.org/en/download)
- postgreSQL: [PostgreSQL download page](https://www.postgresql.org/download/)

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
   ii. Create database tables
   ```bash
   npm run migrate:up
   ```
   iii. Create an `.env` file
   ```bash
   touch .env
   ```
4. Set up the client
   
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

## Contact
Email: [charaka.info@gmail.com](mailto:charaka.info@gmail.com) | LinkedIn: [Charaka Jith Gunasinghe](https://www.linkedin.com/in/charaka-gunasinghe-6742861b9/)

<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Node.js]: https://img.shields.io/badge/Node.js-12A952?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[PSQL]: https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white
[PSQL-url]: https://www.postgresql.org/
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express.js-url]: https://expressjs.com/
