import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-bold text-white hover:text-indigo-400 transition"
        >
          Shadab Akhtar
        </Link>

        <div className="flex gap-6 text-slate-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
