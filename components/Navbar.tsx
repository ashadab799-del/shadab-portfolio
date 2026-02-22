"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-slate-950/80 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:text-indigo-400 transition"
        >
          Shadab Akhtar
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition
                  ${
                    isActive
                      ? "text-indigo-400"
                      : "text-slate-300 hover:text-white"
                  }`}
              >
                {item.name}

                {/* Active underline */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-indigo-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}