"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignUp = void 0;
const zod_1 = require("zod");
exports.userSignUp = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
console.log("Hi there");
