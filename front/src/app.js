const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const app = express();

const PORT = 4000; //나중에 바꿀 것

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(morgan(`dev`));
app.use(cors());

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`${PORT} CaratTalk Server Start`);
});
