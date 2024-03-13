import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {

    return NextResponse.json({
        email: "abhiraj@gmail.com",
        name: "Abhiraj"
    });
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const name = body.name;
    const pass = body.password;
    console.log(body);
    console.log(req.headers.get("authorization"));
    console.log(req.nextUrl.searchParams.get("name"));
    return NextResponse.json({
        message: "You are signed up",
        name,
        pass
    });
}