const cors = require('cors');
const express = require("express");
const loadDB = require("./db/database.js");
const CONSTANTS = require("./utils/constant.js");
const listRoutes = require("./routes/list.route.js");
const app = express();
app.use(cors({ origin:  CONSTANTS.CORS_ALLOW_ORIGIN_URL}));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(CONSTANTS.LIST_ENDPOINT, listRoutes);

app.get("/", (req, res) => {
  res.send("checking");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

loadDB();
