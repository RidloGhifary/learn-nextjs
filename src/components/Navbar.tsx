"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="flex max-w-6xl mx-auto px-5 py-3 justify-between items-center">
      <>
        <h1 className="text-3xl font-bold">
          <Link href="/">NextJS</Link>
        </h1>
        <ul className="flex justify-center items-center gap-5">
          {["product", "about", "about/profile"].map((str, i) => (
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
        <button
          onClick={() => router.push("/login")}
          className="cursor-pointer bg-black rounded-xl p-2 px-5 text-white hover:bg-black/80">
          Login
        </button>
      </div>
    </nav>
  );
}
