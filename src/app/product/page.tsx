"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";
import ProductCard from "./_components/ProductCard";

export default function ProductsPage() {
  const { data: datas, isLoading } = useSWR(`/api/products`, fetcher);

  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <div className="py-12 p-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-3">
        {datas?.data?.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
