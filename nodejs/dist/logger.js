"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const EventEmitter = require('events');
class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('messageLoggedd', { id: 1, url: "http://" });
    }
}
exports.Logger = Logger;
