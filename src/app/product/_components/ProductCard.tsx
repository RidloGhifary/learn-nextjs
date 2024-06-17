import Image from "next/image";
import Link from "next/link";
import { ConvertUSD } from "../_lib/ConvertUSD";

type ProductCardProps = {
  product: {
    id: number;
    title: string;
    price: number;
    rating: number;
    description: string;
    thumbnail: string;
  };
  key: number;
};

export default function ProductCard({ product, key }: ProductCardProps) {
  return (
    <Link
      key={key}
      href={`/product/${product.id}`}
      className="text-black w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow bg-black/5">
      <Image
        className="aspect-auto p-2 rounded-t-lg object-contain w-full h-auto"
        src={product.thumbnail}
        alt={product.title}
        width={500}
        height={500}
      />
      <div className="px-5 pb-5">
        <Link href="#">
          <h5 className="text-xl font-semibold tracking-tight truncate">
            {product.title}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
                key={i}>
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
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
    </Link>
  );
}