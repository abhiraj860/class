"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const url = "http://mylogger.io/log";
function log(message) {
    // Send an HTTP request
    console.log(message);
}
exports.log = log;
