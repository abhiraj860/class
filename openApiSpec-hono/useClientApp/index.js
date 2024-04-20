"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generated_1 = require("./generated");
async function main() {
    const res = await generated_1.DefaultService.getUser("1323");
    console.log(res);
}
main();
