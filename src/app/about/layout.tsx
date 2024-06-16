"use client";

import { usePathname } from "next/navigation";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <aside className="h-screen absolute top-0 right-0 bg-black text-white p-10">
        <h1 className="text-xl font-bold capitalize">
          {pathname === "/about" ? "about" : "Profile"} Layout
        </h1>
      </aside>
      {children}
    </>
  );
}
