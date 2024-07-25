import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
const ProfileServer = async ()=> {
    const session = await getSession();
    const user = session?.user;
    console.log(user?.picture); 
    if(!user) {
        return null;
    }

    return user ? (
        <div>
            <Image width="100" height="100" src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    ) : (
        <div> No user logged in</div>
    ); 

}

export default ProfileServer;
