import Link from "next/link";

export async function GetProducts(id: string) {
  const url = id
    ? `http://localhost:3000/api/products/${id}`
    : "http://localhost:3000/api/products";

  const res = await fetch(url, {
    cache: "no-store",
    next: { revalidate: 60 * 60 * 24 },
  });

  const data = await res.json();
  return data;
}

export default async function DetailProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const datas = await GetProducts(params.slug && params.slug[0]);

  return (
    <div className="py-12">
      {!params.slug ? (
        <>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-3">
            {datas.data.map((product: any) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="w-60 h-60 bg-slate-300 rounded-md">
                {product.title}
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1>Detail Product Page</h1>
          <h2>{datas.data.title}</h2>
          <p>{datas.data.description}</p>
        </>
      )}
    </div>
  );
}
