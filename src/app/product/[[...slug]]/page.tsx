import Link from "next/link";
import GenerateRandomName from "../_lib/GenerateRandomName";
import GenerateRandomNumber from "../_lib/GenerateRandomNumber";

export default function DetailProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const randomNumber = GenerateRandomNumber();
  const randomName = GenerateRandomName();

  return (
    <div>
      {!params.slug ? (
        <>
          <h1>Product Page</h1>
          <div className="flex flex-col gap-3">
            <Link href={`/product/${randomNumber}`} className="underline">
              Go to {randomNumber} product detail &gt;
            </Link>
            <Link
              href={`/product/${randomNumber}/${randomName}`}
              className="underline">
              Go to {randomNumber} - {randomName} product detail &gt;
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1>Detail Product Page</h1>
          <p>for slug: {params?.slug[0]}</p>
          {params?.slug[1] && <p>for name: {decodeURI(params?.slug[1])}</p>}
        </>
      )}
    </div>
  );
}
