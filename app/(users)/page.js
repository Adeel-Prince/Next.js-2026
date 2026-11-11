import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500 selection:text-black">
      {/* 1. Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center md:text-left md:flex md:items-center md:justify-between gap-12">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/20">
            ✨ Next.js App v16 Ready
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Welcome to the <br />
            <span className="text-amber-400">Next.js World!</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
            A high-performance practice application built with Next.js
            Turbopack, App Router, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <Link
              href="/"
              className="px-6 py-3 font-semibold text-black bg-amber-400 hover:bg-amber-300 active:scale-95 transition rounded-lg shadow-lg shadow-amber-400/10"
            >
              Explore Components
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded-lg transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Hero Interactive Element Box */}
        <div className="mt-12 md:mt-0 bg-linear-to-br from-zinc-950 to-zinc-900 border border-zinc-800 p-6 rounded-2xl max-w-sm mx-auto w-full shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/40" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <span className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <span className="text-xs text-zinc-500 font-mono">
              localhost:3000
            </span>
          </div>
          <div className="space-y-4">
            <div className="p-3 bg-black/40 border border-zinc-800/60 rounded-xl">
              <p className="text-xs text-zinc-500">Active Mode</p>
              <p className="text-sm font-semibold text-green-400">
                ✓ Development (Turbopack)
              </p>
            </div>
            <div className="p-3 bg-black/40 border border-zinc-800/60 rounded-xl">
              <p className="text-xs text-zinc-500">Route Interactivity</p>
              <p className="text-sm font-semibold text-zinc-300">
                53 Pages Prerendered
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Feature Section Grid */}
      <main className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-900">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Application Modules
          </h2>
          <p className="text-zinc-500 text-sm mt-1">
            Quick navigation links across your active app views.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link
            href="/datafetch/servercomp"
            className="group p-6 bg-zinc-950 border border-zinc-900 hover:border-zinc-800 rounded-xl transition shadow-sm block"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 text-zinc-400 group-hover:text-amber-400 rounded-lg transition mb-4 font-mono font-bold">
              📂
            </div>
            <h3 className="font-bold text-lg mb-1 group-hover:text-amber-400 transition">
              Server Components
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Handles fast, zero-bundle-size server side processes and database
              configurations seamlessly.
            </p>
          </Link>

          {/* Card 2 */}
          <Link
            href="/doctors"
            className="group p-6 bg-zinc-950 border border-zinc-900 hover:border-zinc-800 rounded-xl transition shadow-sm block"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 text-zinc-400 group-hover:text-amber-400 rounded-lg transition mb-4 font-mono font-bold">
              🩺
            </div>
            <h3 className="font-bold text-lg mb-1 group-hover:text-amber-400 transition">
              Doctors Portal
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Dedicated view for viewing team directories, booking portals, or
              service schedules.
            </p>
          </Link>

          {/* Card 3 */}
          <Link
            href="/hospital"
            className="group p-6 bg-zinc-950 border border-zinc-900 hover:border-zinc-800 rounded-xl transition shadow-sm block"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 text-zinc-400 group-hover:text-amber-400 rounded-lg transition mb-4 font-mono font-bold">
              🛠️
            </div>
            <h3 className="font-bold text-lg mb-1 group-hover:text-amber-400 transition">
              Application Services
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Explore features, platform offerings, tool integrations, and
              operational highlights.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
