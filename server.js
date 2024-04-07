const express = require('express');
require("./database/db");
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


app.use('/user', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});