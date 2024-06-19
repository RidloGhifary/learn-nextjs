import Image from "next/image";
import Link from "next/link";
import { ConvertUSD } from "../_lib/ConvertUSD";
import Star from "@/components/ui/Star";

type ProductCardProps = {
  product: {
    id: number;
    title: string;
    price: number;
    rating: number;
    description: string;
    thumbnail: string;
  };
};

export default function ProductCard(
  { product }: ProductCardProps,
  key: number
) {
  return (
    <div
      key={key}
      className="text-black w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-black/5">
      <Link href={`/product/preview/${product.id}`}>
        <Image
          className="aspect-auto p-2 rounded-t-lg object-contain w-full h-auto"
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          loading="lazy"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link href={`/product/${product.id}`}>
          <h5 className="text-xl font-semibold tracking-tight truncate">
            {product.title}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
              <Star key={i} />
            ))}
          </div>
          <span className="bg-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 ms-3">
            {product.rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg text-gray-900">
            {ConvertUSD(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
}
