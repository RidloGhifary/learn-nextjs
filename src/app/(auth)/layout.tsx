"use client";

import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <>
      <div className="absolute top-10 left-20 z-20">
        <button className="cursor-pointer" onClick={() => router.back()}>
          Back
        </button>
      </div>
      {children}
    </>
  );
}
