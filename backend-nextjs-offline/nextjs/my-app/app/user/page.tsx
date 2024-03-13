import axios from 'axios';

async function fetchData() {
    const resp = await axios.get("http://localhost:3000/api/user")
    return resp.data;
}

export default async function() {
    const data = await fetchData();
    return <div>
        {data.name}
        {data.email}
    </div>
}