import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest, { params : { nextAuth  } }: {params: {
    nextAuth: string[];
}}) {
    console.log(nextAuth);
    return NextResponse.json({
        message: "asd"
    });
}

export function POST() {
    return NextResponse.json({
        message: "asd"
    });
}
