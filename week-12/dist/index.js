"use strict";
const users = new Map();
users.set('adfadfdflsd', { name: "Ras", age: 30, email: "fsdf" });
users.set('adfasd', { name: "Ras", age: 30, email: "fsdf" });
const user = users.get("adfasd");
console.log(user);
