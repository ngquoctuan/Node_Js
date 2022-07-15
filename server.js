const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello Sugar Venom')
})

app.get('/about', (req, res) => {
    res.send(`I'm Sugar Venom`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

