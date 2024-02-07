"use strict";
function isLegal(user) {
    if (user.age < 18) {
        return false;
    }
    else {
        return true;
    }
}
const abhiraj = {
    firstName: "Abhiraj",
    lastName: "Aditya",
    email: "abhiaditya@gmail.com",
    age: 16
};
console.log(isLegal(abhiraj));
