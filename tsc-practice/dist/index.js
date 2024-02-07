"use strict";
;
const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 19
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        age: 30
    },
    {
        firstName: "Bob",
        lastName: "Johnson",
        age: 22
    }
];
function getLegal(user) {
    return user.filter(value => (value.age > 18 && value));
}
console.log(getLegal(users));
