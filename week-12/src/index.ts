type User = {
    name: string;
    age: number;
    email: string;
}

const users = new Map<string, User>();

users.set('adfadfdflsd', {name:"Ras", age:30, email:"fsdf"});
users.set('adfasd', {name:"Ras", age:30, email:"fsdf"});

const user = users.get("adfasd");

console.log(user);