import http from 'http';
import fs from 'fs';

http.createServer((req, res)=>{
    fs.readFile('./summer.html', (err, data)=>{
        if(err) {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            return res.end('404');
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    }) 
}).listen(3000);