import { EventEmitter } from "events";

export class Logger extends EventEmitter {
    log(message: string) {
        console.log(message);
        this.emit('onces', {name: "Abhiraj", pass: "1234"});
    }
}