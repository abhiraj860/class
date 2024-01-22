const express = require('express');
import { JWT_SECRET, PORT } from './config.js'; 

const cors = require('cors');
const app = express();


const mainRouter = require('./routes/index.js');

app.use(cors());
app.use(express.json());

app.use('./api/v1', mainRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});