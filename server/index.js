const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')

// COMP 74C
const app = express()

// COMP 76F
app.use(bodyParser.json())
app.use(cors())

// COMP 74D-1
// COMP 76C
app.get('/api/getHello', (req, res) => {
    res.send('hello')
})

// COMP 74D-3
app.post('/api/getGreeting', (req, res) => {
    console.log(req)
    res.send(`You said ${req.body.text}, so I say yoyoyo.`)
    // res.send(req.params.yo)
})

const PORT = 9001

app.listen(PORT, console.log(`listening on port: ${PORT}`))