"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(require("url"));
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
http_1.default.createServer((req, res) => {
    const qdata = url_1.default.parse(req.url || "", true);
    const path = qdata.pathname;
    const createPath = '.' + path + '.html';
    fs_1.default.readFile(createPath, (err, file) => {
        if (err) {
            res.writeHead(404, { 'Content-type': 'text/html' });
            res.write('404 page');
            return res.end();
        }
        res.writeHead(200, { 'Content-type': 'text/html' });
        return res.end(file);
    });
}).listen(3000);
