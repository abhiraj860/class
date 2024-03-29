import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, { params } : {params: {nextAuth: string[]}}) {
    console.log(params.nextAuth);
    console.log(params.nextAuth[0]);

    return NextResponse.json({
        message: "Handler"
    });
}