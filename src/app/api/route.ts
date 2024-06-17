import { NextResponse } from "next/server";

const datas = [
  {
    id: 1,
    title: "Nike Pegasus 41",
    price: 200,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_381,c_limit/870add6a-ba05-4546-80cc-f0e3d0268848/pegasus-41-road-running-shoes-SKDkNs.png",
  },
  {
    id: 2,
    title: "Air Jordan 4 Retro",
    price: 300,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_381,c_limit/32090ca9-d8ef-4943-aa41-4f23dc0777af/air-jordan-4-retro-oxidised-green-shoes-lw9R0z.png",
  },
  {
    id: 3,
    title: "Air Vapormax Moc Roam",
    price: 400,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_381,c_limit/1e246659-74bb-4259-a6c1-23eb4a8b630e/air-vapormax-moc-roam-shoes-tLQxbN.png",
  },
];

export async function GET() {
  return NextResponse.json({
    status: 200,
    message: "success",
    data: datas,
  });
}
