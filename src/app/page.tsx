import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | NextJS",
  description: "Build for learning nextjs deeply",
  authors: [
    { name: "Ridlo achmad ghifary", url: "https://github.com/RidloGhifary" },
  ],
  themeColor: "#8b5cf6",
  openGraph: {
    title: "Home | NextJS",
    description: "Build for learning nextjs deeply",
  },
  twitter: {
    title: "Home | NextJS",
    description: "Build for learning nextjs deeply",
  },
};

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
    </main>
  );
}
