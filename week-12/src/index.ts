// readonly

type User = {
    name: string;
    age: number;
}

const user: Readonly<User> = {
    name: "Abhiraj",
    age: 32
}

user.age = 342;
user.name = "sdfs"

console.log(user.name)

