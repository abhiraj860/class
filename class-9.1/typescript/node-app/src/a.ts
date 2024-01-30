interface User{
    firstName: string,
    lastName: string,
    age: number,
    email?: string
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

isLegal({
    firstName: "Abhiraj",
    lastName: "Aditya",
    age: 20,
    email: "Asksljkl@gmail.com"
});