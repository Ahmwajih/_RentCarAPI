const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;
const dbConnection = require('./configs/dbConnection');
dbConnection();

app.use(express.json());
require('express-async-errors');

app.use(require('./middleware/auth'))
app.use(require('./middleware/logger'));
app.use(require('./middleware/queryHandler'));

const mainRouter = require('./routes/index');
app.use('/', mainRouter);

app.use(require('./middleware/errorHandler'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
