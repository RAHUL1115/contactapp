require('dotenv').config();

const db = require('./db/models');
const express = require('express');
const cors = require('cors');
const routes = require('./api/v1/routes');
const cookieParser = require('cookie-parser');
const errorHandler = require('./api/v1/middleware/errorhandler');

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors('*'));

app.use('/v1/', routes);

app.use(errorHandler);

app.use('*', (req, res) => {
    res.status(404).json({ 404: "not found" })
});

(()=>{
    try {
        app.listen(port, () => {
            console.log(`app listening on port ${port}`);
        })
    } catch (error) {
        console.error(error);
    }
})()

