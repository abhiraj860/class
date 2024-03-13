import client from '@/db'

export async function fetchData() {
    const user = await client.user.findFirst();
    return {
        email: user?.email,
        name: "avdsf"
    }
}

export default async function() {
    const data = await fetchData();
    return <div>
        {data.name}
        {data.email}
    </div>
}