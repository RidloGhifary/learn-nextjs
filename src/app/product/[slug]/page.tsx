"use client";

import ProductDetail from "../_components/ProductDetail";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data, isLoading } = useSWR(`/api/products/${params.slug}`, fetcher);

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="py-12 p-4 max-w-6xl mx-auto">
      <ProductDetail product={data?.data} />
    </div>
  );
}
