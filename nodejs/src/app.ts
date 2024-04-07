import url from 'url';
import fs from 'fs';
import http from 'http';

http.createServer((req, res)=>{
    const qdata = url.parse(req.url || "" , true);
    const path = qdata.pathname;
    const createPath = '.' + path + '.html'; 
    fs.readFile(createPath, (err, file)=>{
        if(err) {
            res.writeHead(404, {'Content-type': 'text/html'});
            res.write('404 page');
            return res.end();
        }
        res.writeHead(200, {'Content-type' : 'text/html'});
        return res.end(file);
    })
}).listen(3000);