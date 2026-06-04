const express = require("express");
const router = require("./routes");

const { BASE_ROUTE } = require("./config");

const app = express();

app.use(express.json());

app.use(BASE_ROUTE, router);


app.listen(3000);
