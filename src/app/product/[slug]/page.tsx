export default function DetailProductPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>Detail Product Page</h1>
      <p>for slug: {params.slug}</p>
    </div>
  );
}
