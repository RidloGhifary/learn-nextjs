import Image from "next/image";

type ProductDetailProps = {
  product: {
    id: number;
    title: string;
    price: number;
    brand: string;
    tags: string[];
    rating: number;
    description: string;
    thumbnail: string;
    images: string[];
    category: string;
    reviews: Array<Review>;
  };
};
interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={500}
        height={500}
        priority
        className="aspect-auto object-contain w-full h-auto "
      />
      <div className="p-2 space-y-4">
        <h2 className="text-2xl md:text-4xl xl:text-6xl font-bold">
          {product.title}
        </h2>
        <h4 className="text-xl font-semibold bg-black/5 border border-black/10 p-3 rounded-lg w-fit">
          {product.brand} -{" "}
          {product.tags.map((x: string, i: number) => (
            <span key={i}>{x + (i < product.tags.length - 1 ? ", " : "")}</span>
          ))}
        </h4>
        <p className="text-gray-700">{product.description}</p>
        <hr />
        <div className="space-y-4">
          {product.reviews.map((review: any, i: number) => (
            <div key={i} className="space-y-2">
              <h3 className="font-bold text-2xl">{review.reviewerName}</h3>
              <p>{review.date}</p>
              <p className="flex items-center space-x-1 rtl:space-x-reverse">
                {Array(review.rating).map((_, i: number) => (
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
              </p>
              <p>{review.comment}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
