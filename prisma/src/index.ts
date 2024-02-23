import { PrismaClient } from "@prisma/client";
import { create } from "domain";

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string) {
//     const p = await prisma.user.create(
//      {
//         data: {
//             username,
//             password,
//             firstName,
//             lastName,
//             email
//         }
//     })
//     console.log(p);
// }

// insertUser("wesrr","tsdfest","sdftest","tesdst", "tfrrsesfsdft");

async function getTodos(userId:number) {
    await prisma.todos.create({
        data: {
            userId: 9,
            title: "4",
            description: "dfs"
        }
    }) 
}

getTodos(1);