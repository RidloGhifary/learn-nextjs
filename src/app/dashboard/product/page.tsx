import Image from "next/image";

export async function GetProduct() {
  const res = await fetch("http://localhost:3000/api", {
    next: {
      // revalidate: 10,
      tags: ["dashboard-product"],
    },
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  const { data } = await res.json();
  return data;
}

export default async function DashboardProduct() {
  const datas = await GetProduct();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {datas.map((product: any) => (
          <div
            key={product.id}
            className="bg-black/5 border border-black/10 rounded-lg cursor-pointer">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="aspect-auto object-contain w-full h-auto"
            />
            <h2 className="truncate p-4">{product.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
