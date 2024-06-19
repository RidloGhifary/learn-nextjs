import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile user page",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Profile Layout</h1>
      {children}
    </>
  );
}
