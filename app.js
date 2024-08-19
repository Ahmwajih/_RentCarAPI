const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.use(require('./middleware/errorHandler'));
app.use(express.json());
require('express-async-errors');

const userRouter = require('./routes/users');
app.use('/', userRouter);


const dbConnection = require('./configs/dbConnection');
dbConnection();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
