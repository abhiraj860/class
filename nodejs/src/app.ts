import fs from 'fs';
import http from 'http';

http.createServer((req, res)=>{
    fs.readFile('../nodejs/demo1.html', (err, data)=>{
        if(err) {
            console.log(err);
        }
        res.writeHead(200, {"Abhiraj": "abdid"});
        res.write(data);
        return res.end();        
    });
}).listen(8080);