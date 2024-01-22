const express = require("express");
const app = express();
const userRouter = require('./routes/index.js');

const port = 3000;

app.use(express.json());

app.use('./api/v1', userRouter);


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});