import { GetSingleProduct } from "@/services/products";
import dynamic from "next/dynamic";
import Image from "next/image";

const Modal = dynamic(() => import("@/components/Modal"), {
  loading: () => <p>Loading...</p>,
});

export default async function ModalPreview({
  params,
}: {
  params: { id: string };
}) {
  const { data: product } = await GetSingleProduct(
    `/api/products/${params.id}`
  );

  return (
    <Modal>
      <Image
        className="aspect-auto p-2 rounded-t-lg object-contain w-full h-auto"
        src={product.images[0]}
        alt={product.title}
        width={500}
        height={500}
        priority
      />
    </Modal>
  );
}
