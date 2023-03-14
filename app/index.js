require('dotenv').config()

const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const port = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors('*'))

app.use('/v1/', routes)

app.use('*', (req, res) => {
    res.status(404).json({ 404: "not found" })
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})