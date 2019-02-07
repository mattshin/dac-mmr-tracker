const express = require('express')
const routes = require('./routes')
const app = routes(express())
const port = 80

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})