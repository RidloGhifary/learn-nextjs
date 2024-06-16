import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-8 px-5 py-3">
      <h1 className="text-3xl font-bold">NextJS</h1>
      <ul className="flex justify-center items-center gap-3">
        <li>
          <Link href="/" className="cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="cursor-pointer">
            About
          </Link>
        </li>
        <li>
          <Link href="/about/profile" className="cursor-pointer">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
