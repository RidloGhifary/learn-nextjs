"use client";

import { useState } from "react";

export default function AppTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState(0);

  return (
    <>
      <div>
        <button
          onClick={() => setState(state + 1)}
          className="bg-green-900 text-white rounded-xl px-4 py-2">
          {" "}
          Template {state}
        </button>
      </div>
      {children}
    </>
  );
}
