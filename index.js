const express = require('express')
const PORT = 3333

var app = express()

app.use((req, res, next) => {
    //inspect here
    console.log(req.host)
})

var server = app.listen(PORT)
