"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const events_1 = require("events");
class Logger extends events_1.EventEmitter {
    log(message) {
        console.log(message);
        this.emit('onces', { name: "Abhiraj", pass: "1234" });
    }
}
exports.Logger = Logger;
