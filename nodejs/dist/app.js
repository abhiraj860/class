"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
http_1.default.createServer((req, res) => {
    fs_1.default.readFile('./summer.html', (err, data) => {
        if (err) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end('404');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(3000);
