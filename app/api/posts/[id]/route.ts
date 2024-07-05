import { NextResponse } from "next/server";

type Params={
    params:any,
}
export async function GET(req: Request, { params }:Params){
    return NextResponse.json({ params })
}