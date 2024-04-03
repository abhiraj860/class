const EventEmitter = require('events');

export class Logger extends EventEmitter {
    log(message:string) {
        console.log(message);
        this.emit('messageLoggedd', {id: 1, url: "http://"});
    }
}
