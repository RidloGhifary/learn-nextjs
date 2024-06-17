import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <Link href="/dashboard/profile">Profile</Link>
      <Link href="/dashboard/product">Product</Link>
    </div>
  );
}
