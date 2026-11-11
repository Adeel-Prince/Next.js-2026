export default function AboutLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="border-l-4 border-amber-400 pl-4 mb-12">
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
            Sub-Section Layout
          </p>
          <h2 className="text-xl font-bold text-zinc-300">About Portal</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
