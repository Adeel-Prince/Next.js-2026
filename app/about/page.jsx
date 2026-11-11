import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* 1. Header Hero section */}
      <section className="space-y-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          About Our Platform
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Welcome to the About Page. This modular segment demonstrates Next.js
          layout nesting capabilities alongside Tailwind CSS grid
          configurations.
        </p>
      </section>

      {/* 2. Platform Statistics Counter Row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-zinc-950 border border-zinc-900 rounded-2xl">
        <div className="space-y-1">
          <p className="text-3xl font-extrabold text-amber-400">100%</p>
          <p className="text-xs text-zinc-500 uppercase font-medium tracking-wider">
            App Router App
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-extrabold text-white">53</p>
          <p className="text-xs text-zinc-500 uppercase font-medium tracking-wider">
            Static Routes
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-extrabold text-white">v16.4</p>
          <p className="text-xs text-zinc-500 uppercase font-medium tracking-wider">
            Next.js Core
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-extrabold text-green-400">Turbo</p>
          <p className="text-xs text-zinc-500 uppercase font-medium tracking-wider">
            Compilation Engine
          </p>
        </div>
      </section>

      {/* 3. Detailed Features Blocks */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-zinc-900/30 border border-zinc-800/80 rounded-xl space-y-2">
          <h3 className="text-lg font-bold text-zinc-200">
            Our Project Mission
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Building performance-oriented sandbox test suites. Our objective is
            mastering hybrid loading mechanisms and client boundary isolation
            paradigms.
          </p>
        </div>
        <div className="p-6 bg-zinc-900/30 border border-zinc-800/80 rounded-xl space-y-2">
          <h3 className="text-lg font-bold text-zinc-200">
            System Architecture
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Leveraging lightweight components that execute completely
            server-side by default, ensuring lightning fast interactions and
            optimal layout shifts.
          </p>
        </div>
      </section>

      {/* 4. Interactive Footer Actions */}
      <section className="pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4">
        <span className="text-sm text-zinc-500">
          Need adjustments or want to review code?
        </span>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition"
        >
          ← Back To Home Page
        </Link>
      </section>
    </div>
  );
}
