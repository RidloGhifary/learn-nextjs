"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";

const Modal = dynamic(() => import("@/components/Modal"), {
  loading: () => <p>Loading...</p>,
});

export default function ModalPreview({ params }: { params: { id: string } }) {
  const { data: product } = useSWR(`/api/products/${params.id}`, fetcher);

  return (
    <Modal>
      <Image
        className="aspect-auto p-2 rounded-t-lg object-contain w-full h-auto"
        src={product?.data?.images[0]}
        alt={product?.data?.title}
        width={500}
        height={500}
        priority
      />
    </Modal>
  );
}
