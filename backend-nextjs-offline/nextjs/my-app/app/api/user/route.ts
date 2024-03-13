import { NextRequest, NextResponse } from "next/server";
import client from '@/db';


export async function GET(req: NextRequest) {
    const user = await client.user.findFirst();
    return NextResponse.json({
        email: user?.email,
        name: "avdsf"
    });
}
// postgresql://abhiaditya860:GTx9J1XhZQLi@ep-twilight-violet-55759560.us-east-2.aws.neon.tech/neondb?sslmode=require

export async function POST(req: NextRequest) {
    
}