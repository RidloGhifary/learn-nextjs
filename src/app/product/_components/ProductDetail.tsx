import Star from "@/components/ui/Star";
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
                {Array.from({ length: 5 }, (_, i) => i + 1).map(
                  (_, i: number) => (
                    <Star key={i} />
                  )
                )}
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
