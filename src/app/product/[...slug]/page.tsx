export default function DetailProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  return (
    <div>
      <h1>Detail Product Page</h1>
      <p>for slug: {params.slug[0]}</p>
      {params.slug[1] && <p>for name: {decodeURI(params.slug[1])}</p>}
    </div>
  );
}
