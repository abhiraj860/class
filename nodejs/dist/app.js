"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
http_1.default.createServer((req, res) => {
    fs_1.default.readFile('../nodejs/demo1.html', (err, data) => {
        if (err) {
            console.log(err);
        }
        res.writeHead(200, { "Abhiraj": "abdid" });
        res.write(data);
        return res.end();
    });
}).listen(8080);
