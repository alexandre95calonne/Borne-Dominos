const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors')


const connectDB = require('./database/connection');

const app = express();

const PORT = 3002
dotenv.config({path: 'config.env'})

app.use(morgan('tiny'));

app.use(cors());

//MOngoDB connection
connectDB()

app.use(bodyparser.urlencoded({extended: true}))

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'ok'
    })
});

app.use('/', require('./routes/router'))

app.listen(3002, () => {
    console.log(`Server actually running on port http://localhost:${PORT}`)
})