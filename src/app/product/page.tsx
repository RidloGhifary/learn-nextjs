import Link from "next/link";
import GenerateRandomNumber from "./_lib/GenerateRandomNumber";

export default function ProductPage() {
  const randomNumber = GenerateRandomNumber();

  return (
    <div>
      <h1>Product Page</h1>
      <Link href={`/product/${randomNumber}`} className="underline">
        Go to {randomNumber} product detail &gt;
      </Link>
    </div>
  );
}
