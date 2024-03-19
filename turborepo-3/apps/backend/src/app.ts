import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import {BACKEND_URL} from "@repo/common/config"

const app: Express = express();
const PORT = 3000;
console.log(BACKEND_URL);
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response)=> {
    res.json({
        message: "Server healty"
    });
});

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})


