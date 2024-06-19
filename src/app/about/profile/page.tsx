"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div className="text-center">
      <h1>
        Welcome, <strong>{session?.user?.name}</strong>
      </h1>
    </div>
  );
}
