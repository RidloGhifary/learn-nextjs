import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/").pop();

  const response = await fetch("https://dummyjson.com/products/" + id, {
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json({
      status: response.status,
      message: response.statusText,
    });
  }

  const data = await response.json();

  return NextResponse.json({
    status: 200,
    message: "success",
    data: data,
  });
}
