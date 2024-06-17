import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
    next: { revalidate: 3600 },
  });
  const data = await response.json();

  return NextResponse.json({
    status: 200,
    message: "success",
    data: data.products,
  });
}
