const express = require('express');
const cors = require('cors');

//routes
const taskRoute = require('./taskList');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/list', taskRoute);

//listen to the server at this port
app.listen(8080, () => {
    console.log('======= The Server is working =======');
})