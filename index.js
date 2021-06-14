import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
require('dotenv').config()

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to the database in mongo atlas');
});

mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
const tasks = require('./routes/tasks');
app.use('', tasks);

app.get('/', (req, res) => {
    res.status(400).send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.status(200).json({
        message: 'Tasklist exercise running here'
    })
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});