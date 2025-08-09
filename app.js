const express = require("express");
const app = express();
const dotenv = require('dotenv').config()
const bodyParser = require("body-parser");
const postRouter = require("./routes/postRouter");

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use('/', postRouter)

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));