"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const url_1 = __importDefault(require("url"));
http_1.default.createServer((req, res) => {
    res.writeHead(220, { 'content-abhi': 'abhi' });
    const q = url_1.default.parse(req.url || "", true).query;
    const txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);
