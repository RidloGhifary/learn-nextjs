"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status }: { data: any; status: any } = useSession();

  return (
    <>
      <div className="flex gap-4">
        <Link href="/dashboard/profile" className="underline">
          {session?.user.name} Profile
        </Link>
        <span>&gt;</span>
        <Link href="/dashboard/product" className="underline">
          Product
        </Link>
      </div>

      <div className="w-full bg-gray-400 border border-gray-900 rounded-lg flex justify-center items-center h-40">
        <h1>Dashboard</h1>
      </div>
    </>
  );
}
