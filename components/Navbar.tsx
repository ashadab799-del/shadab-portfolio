"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide hover:text-indigo-400 transition"
        >
          Shadab Akhtar
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm text-slate-300">
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Projects", "/projects"],
            ["Blog", "/blog"],
            ["Contact", "/contact"],
            ["Resume", "/resume"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="relative hover:text-white transition
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-indigo-400
                after:transition-all after:duration-300
                hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}