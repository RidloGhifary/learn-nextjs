"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const modal = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClose = (e: React.MouseEvent) => {
    if (e.target === modal.current) {
      router.back();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/70"
      ref={modal}
      onClick={handleClose}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
}
