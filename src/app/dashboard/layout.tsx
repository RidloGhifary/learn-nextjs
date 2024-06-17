import Link from "next/link";

export default function DashboardLayout({
  children,
  users,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl mx-auto space-y-5">
      <div className="flex gap-4">
        <Link href="/dashboard/profile" className="underline">
          Profile
        </Link>
        <span>&gt;</span>
        <Link href="/dashboard/product" className="underline">
          Product
        </Link>
      </div>
      {children}
      {users}
      <div className="grid gap-3 md:grid-cols-2">
        {analytics}
        {payments}
      </div>
    </div>
  );
}
