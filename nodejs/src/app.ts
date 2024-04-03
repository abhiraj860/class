import http from 'http';

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write("Hi there");
        res.end();
    }
    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2,3,4]));
        res.end();
    }
});


server.listen(3000);

console.log('listening on port 3000...');