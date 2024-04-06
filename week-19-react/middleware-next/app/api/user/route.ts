import { NextResponse } from "next/server"

export const GET = ()=>{
    return NextResponse.json({
        message: "you are logged in"
    });
}