interface User {
    name: string;
    email: string;
    speak:(name:string)=>string;
};

let user : User = {
    name: 'Abhiraj',
    email: 'abhiaditya860@gmail.com',
    speak :(name) =>name
};

console.log(user.speak("tick"));

