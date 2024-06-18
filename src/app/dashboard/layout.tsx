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
      {children}
      {users}
      <div className="grid gap-3 md:grid-cols-2">
        {analytics}
        {payments}
      </div>
    </div>
  );
}
