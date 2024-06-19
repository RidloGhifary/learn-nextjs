"use client";

import { fetcher } from "@/lib/swr/fetcher";
import Image from "next/image";
import useSWR from "swr";

export default function DashboardProduct() {
  const { data: datas, isLoading } = useSWR(`/api`, fetcher);

  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {datas.data.map((product: any) => (
          <div
            key={product.id}
            className="bg-black/5 border border-black/10 rounded-lg cursor-pointer">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              loading="lazy"
              className="aspect-auto object-contain w-full h-auto"
            />
            <h2 className="truncate p-4">{product.title}</h2>
          </div>
        ))}
        {datas.products.map((product: any) => (
          <div
            key={product.id}
            className="bg-black/5 border border-black/10 rounded-lg cursor-pointer">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              loading="lazy"
              className="aspect-auto object-contain w-full h-auto"
            />
            <h2 className="truncate p-4">{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
