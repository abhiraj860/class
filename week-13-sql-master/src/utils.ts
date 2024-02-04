import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://gebsudbm:RJ13X0hPH8EVcacXUiN1JQlIEpf4YNL4@tai.db.elephantsql.com/gebsudbm");
    await client.connect();
    return client;
}