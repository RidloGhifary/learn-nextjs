import Link from "next/link";
import GenerateRandomNumber from "./_lib/GenerateRandomNumber";
import GenerateRandomName from "./_lib/GenerateRandomName";

export default function ProductPage() {
  const randomNumber = GenerateRandomNumber();
  const randomName = GenerateRandomName();

  return (
    <div>
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
    </div>
  );
}
