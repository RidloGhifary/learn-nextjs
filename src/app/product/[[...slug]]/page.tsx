import { GetProducts, GetSingleProduct } from "@/services/products";
import ProductCard from "../_components/ProductCard";
import ProductDetail from "../_components/ProductDetail";

export default async function DetailProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const datas = !params.slug
    ? await GetProducts("/api/products")
    : await GetSingleProduct(`/api/products/${params.slug[0]}`);

  return (
    <div className="py-12 p-4 max-w-6xl mx-auto">
      {!params.slug ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-3">
          {datas.data.map((product: any) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <ProductDetail product={datas.data} />
      )}
    </div>
  );
}
