import { Client } from "pg";

const client = new Client({
    connectionString: 'postgresql://postgres:mysecretpassword@localhost/postgres'
})


// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE user1(
//             id SERIAL PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(255) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `);
//     console.log(result);
// }

// createUsersTable();

async function insertTable(username: string, email:string, password: string) {
    await client.connect();

    // SQL injection
    const result = await client.query(`
        INSERT INTO user1(username, email, password)
        VALUES ($1, $2, $3)
    `, [username, email, password]);
    console.log(result);
}

insertTable("username45", "user45@gmail.com", "123456");