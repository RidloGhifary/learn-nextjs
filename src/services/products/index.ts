export async function GetSingleProduct(url: string) {
  const res = await fetch(`${process.env.BASE_URL + url}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  const data = await res.json();
  return data;
}

export async function GetProducts(url: string) {
  const res = await fetch(`${process.env.BASE_URL + url}`, {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  const data = await res.json();
  return data;
}

export async function GetDashboardProduct(url: string) {
  const res = await fetch(`${process.env.BASE_URL + url}`, {
    cache: "no-store",
    next: {
      tags: ["dashboard-product"],
    },
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  const data = await res.json();
  return data;
}
