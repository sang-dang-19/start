const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world! This is ExpressJS")
})

app.use('/api', require("./routers/api.router.js"))
app.use('/pages', require("./routers/pages.router.js"))

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port:", process.env.PORT || 80)
})