"use client";

import { useRouter } from "next/navigation";
import action from "../_action";

export default function DashboardProfile() {
  const router = useRouter();

  return (
    <div className="w-full grid place-content-center">
      <button
        onClick={() => {
          action();
          router.push("/dashboard/product");
        }}
        className="cursor-pointer bg-black/5 border border-black/10 p-2 rounded-lg">
        Revalidate product
      </button>
    </div>
  );
}
