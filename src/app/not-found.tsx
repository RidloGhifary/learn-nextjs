"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="grid place-content-center min-h-dvh">
      <h1 className="text-3xl font-bold">Page Not found</h1>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
