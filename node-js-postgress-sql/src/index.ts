import { Client } from "pg";

const client = new Client({
    connectionString: 'postgresql://postgres:mysecretpassword@localhost/postgres'
})


async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE product (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(result);
}


async function insertTable() {
    await client.connect();
    const result = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ('usernameHere2', 'user@example2.com', 'user_password')
    `);
    console.log(result);
}

insertTable();