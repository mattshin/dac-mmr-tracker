const express = require('express')
const app = express()
const port = 80

app.get('/health', (_, res) => {
   res.send('HEALTH CHECK OK!') 
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})