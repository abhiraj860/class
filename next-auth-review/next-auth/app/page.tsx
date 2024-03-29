"use client"
import { useSession } from "next-auth/react";
import { Appbar } from "./components/App";

export default function Home() {
  const session = useSession();
  return ( <div>
    <Appbar />
    {JSON.stringify(session.data?.user)}
  </div>
  );
}
