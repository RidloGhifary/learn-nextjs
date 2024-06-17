import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const token = request.nextUrl.searchParams.get("token");

  if (
    tag !== "dashboard-product" ||
    token !== process.env.REVALIDATE_SECRET_TOKEN
  ) {
    return NextResponse.json(
      { status: 400, message: "Invalid credential" },
      { status: 400 }
    );
  }

  revalidateTag(tag);

  return NextResponse.json(
    { status: 201, message: "Success" },
    { status: 201 }
  );
}
