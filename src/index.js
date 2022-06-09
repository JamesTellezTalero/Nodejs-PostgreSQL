const express = require('express');
const app = express();

const port = 8000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use(require('./routes/index'));

app.listen(port);
console.log(`Listen on port ${port}`);