import http from 'http';
import url from 'url';

http.createServer((req, res)=>{
    res.writeHead(220, {'content-abhi' : 'abhi'});
    const q = url.parse(req.url || "", true).query;
    const txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);