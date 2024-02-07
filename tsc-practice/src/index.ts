interface User {
    firstName: string;
    lastName: string; 
    email: string;
    age: number;    
}

function isLegal(user: User): boolean {
    if(user.age < 18) {
        return false;
    } else {
        return true;
    }
}

const abhiraj: User = {
    firstName: "Abhiraj",
    lastName: "Aditya",
    email: "abhiaditya@gmail.com",
    age: 16
}

console.log(isLegal(abhiraj));