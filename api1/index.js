const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bc = require("bcryptjs");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connect = mongoose
  .connect(process.env.mongouri, {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Mondo db connected...."))
  .catch((err) => console.log(err));

const linkSchema = new mongoose.Schema({
  html: String,
  password: String,
  title: String,
  created_date: { type: Date, default: Date.now },
});

const Link = new mongoose.model("links", linkSchema);

app.post("/add", async (req, res) => {
  const { html, title, password } = req.body;
  let link = await Link.findOne({ title });
  if (link)
    res
      .status(500)
      .json({ mssg: "Title has already been taken, use a different one" });
  const salt = await bc.genSalt(10);
  const hashed = await bc.hash(password, salt);
  link = new Link({ title, html, password: hashed });
  link = await link.save();
  res.json({ link });
});

app.post("/check", async (req, res) => {
  const { title, password } = req.body;
  const link = await Link.findOne({ title });
  if (!link) return res.redirect("/failed");
  const validPassword = await bc.compare(password, link.password);
  if (!validPassword) res.redirect("/failed");
  res.json({ link });
});

app.listen("5000", () => {
  console.log("Server started at 5000");
});