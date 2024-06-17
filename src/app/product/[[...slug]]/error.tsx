"use client";

export default function ProductError() {
  return (
    <div className="w-full grid place-content-center">
      <h1 className="text-2xl md:text-4xl">
        <strong>Ups!!</strong>Something went wrong
      </h1>
      <p className="text-gray-600">be patient we are trying to fix it!</p>
    </div>
  );
}
