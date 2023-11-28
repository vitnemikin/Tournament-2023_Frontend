const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const app = express();
const port = 3000;
const db = new sqlite3.Database("users.db");
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    name          text not null,
    lastname      text not null, 
    id            integer primary key autoincrement, 
    email         text unique not null, 
    login         text unique not null, 
    password      text unique not null
  )
`);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/auth/registration", (req, res) => {
  const userData = req.body;
  console.log(userData);

  db.run(
    "INSERT INTO Users (name, lastname, email, login, password) VALUES (?, ?, ?, ?, ?)",
    [
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.login,
      userData.password,
    ],
    function (err) {
      if (err) {
        return res
          .status(500)
          .json({ error: "Ошибка при регистрации пользователя" });
      }

      console.log("Данные пользователя: ", userData);

      res.json({ username: userData.login });
    }
  );
});

app.post("/auth/login", (req, res) => {
  const { login, password } = req.body;

  const query = "SELECT * FROM Users WHERE login = ? AND password = ?";

  db.get(query, [login, password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: "Ошибка при выполнении запроса" });
    }

    if (row) {
      console.log(JSON.stringify(row));
      res.send({ user: row });
    } else {
      res.status(401).json({ error: "Неверные данные учетной записи" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
