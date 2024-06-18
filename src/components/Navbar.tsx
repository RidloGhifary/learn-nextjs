"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { status } = useSession();
  const pathname = usePathname();

  return (
    <nav className="flex max-w-6xl mx-auto px-5 py-3 justify-between items-center">
      <>
        <h1 className="text-3xl font-bold">
          <Link href="/">NextJS</Link>
        </h1>
        <ul className="flex justify-center items-center gap-5">
          {["product", "about", "about/profile", "dashboard"].map((str, i) => (
            <li key={i}>
              <Link
                href={`/${str}`}
                className={`cursor-pointer text-gray-500 ${
                  pathname === `/${str}` && "text-black font-bold underline"
                }`}>
                {str === "about/profile" ? "profile" : str}
              </Link>
            </li>
          ))}
        </ul>
      </>
      <div>
        {status === "authenticated" ? (
          <button
            onClick={() => signOut()}
            className="cursor-pointer bg-black rounded-xl p-2 px-5 text-white hover:bg-black/80">
            Log out
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="cursor-pointer bg-black rounded-xl p-2 px-5 text-white hover:bg-black/80">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
