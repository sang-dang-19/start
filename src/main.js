const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world! This is ExpressJS");
});

app.use("/api", require("./routers/api.router.js"));
app.use("/pages", require("./routers/pages.router.js"));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };

// some test