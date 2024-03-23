import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";

export default async function() {
    const session = await  getServerSession();
    return <div>
        User Component;
        <Appbar />
        {JSON.stringify(session)}
    </div>
}