const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

app.use(express.json());
app.use(require("./routes/toDo.route"));

mongoose
  .connect(
    "mongodb+srv://mturlaev:1221@cluster0.gt26rfa.mongodb.net/fullStack?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => {
  console.log("сервер запущен");
});
