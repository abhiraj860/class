function getEle<T>(args: T[]):T {
    return args[0];
}

interface User{
    name: string
}

const first = getEle<User>([{name:"Abhiraj"}, {name:"Aditya"}]);
const first2 = getEle<number>([1, 2]);
const first3 = getEle<boolean>([true, false]);

console.log(first);
console.log(first2);
console.log(first3);
