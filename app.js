require("dotenv").config();

const express = require("express");

const app = express();

require("./config")(app);

const phoneRoutes = require("./routes/phone.routes");
app.use("/api", phoneRoutes);

require("./error-handling")(app);

module.exports = app;
