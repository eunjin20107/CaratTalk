const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const PORT = 4000; //나중에 바꿀 것
const app = express();

app.set("view engine", "pug");
app.set(express.static(path.join(__dirname, "/assets")));
app.use(morgan(`dev`));
app.use(cors());

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`${PORT} CaratTalk Server Start`);
});
