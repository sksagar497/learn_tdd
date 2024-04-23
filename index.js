const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const PORT = 3004

app.get("/", (req, res) => {
    res.send("api is good to go");
  });
  
  app.listen(PORT, () => {
    console.log(`server is running on the port ${PORT}`);
  });