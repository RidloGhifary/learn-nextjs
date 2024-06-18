import { register } from "@/lib/firebase/service";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { error, message } = await register(body);

  if (error)
    return NextResponse.json({ error: true, message }, { status: 400 });

  return NextResponse.json({ error, message }, { status: 201 });
}
