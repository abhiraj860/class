import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
export async function GET() {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    return NextResponse.json({
        name: session
    })
}