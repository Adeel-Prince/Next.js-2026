import Link from "next/link";

export default function Navigation() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-zinc-900 text-white border-b border-zinc-800">
      <div className="font-bold text-xl">Adeel</div>
      <nav>
        <ul className="flex gap-6 text-sm font-medium text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/signup">SignUp</Link>
          </li>
          <li>
            <Link href="/datafetch/servercomp">Gender Checking</Link>
          </li>
          <li>
            <Link href="/doctors">Doctors</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
