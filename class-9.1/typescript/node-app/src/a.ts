interface User{
    firstName: string,
    lastName: string,
    age: number
}
function isLegal(user:User) : boolean {
    if(user.age > 18) {
        return true;
    } else {
        return false;
    }
}

function greet(user:User) {
    console.log("hi there " + user.firstName);
}

ifLegal({
    firstName: "Abhiraj",
    lastName: "Aditya",
    age: 20
});