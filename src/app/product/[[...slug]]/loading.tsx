export default function ProductLoading() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-3">
        {[1, 2, 3, 4, 5].map((_, i: number) => (
          <div key={i} className="space-y-3">
            <div className="animate-pulse bg-black/5 border border-black/10 rounded-lg w-full h-48" />
            <div className="animate-pulse bg-black/5 border border-black/10 rounded-lg w-full h-14" />
            <div className="animate-pulse bg-black/5 border border-black/10 rounded-lg w-1/2 h-10" />
          </div>
        ))}
      </div>
    </div>
  );
}
