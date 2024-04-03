import { Logger } from "./logger";

const logger = new Logger();

logger.on('onces', (args)=>{
    console.log(args);
});

logger.log('Input message');
