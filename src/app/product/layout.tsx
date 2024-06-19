import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "This is product page",
};

export default function ProductLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
