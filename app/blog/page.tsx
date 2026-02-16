import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Shadab Akhtar",
  description:
    "Articles on telecom networks, packet core engineering, Linux, troubleshooting, and AI in telecom.",
};

import Link from "next/link";

const posts = [
  {
    slug: "packet-core-basics",
    title: "Understanding Packet Core Networks",
    description:
      "A beginner-friendly explanation of SGSN, GGSN, MME, and EPC in mobile networks.",
    date: "Feb 2026",
  },
  {
    slug: "wireshark-for-telecom",
    title: "Using Wireshark for Telecom Troubleshooting",
    description:
      "How packet analysis helps diagnose signaling and latency issues in mobile networks.",
    date: "Feb 2026",
  },
  {
    slug: "ai-in-telecom",
    title: "AI in Telecom Operations",
    description:
      "Exploring how AI can improve fault detection, automation, and network intelligence.",
    date: "Feb 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-slate-300 max-w-2xl mb-12">
        Thoughts and write-ups on telecom networks, packet core engineering,
        Linux, troubleshooting, and AI.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-xl bg-slate-800 border border-slate-700 p-6 hover:border-indigo-500 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {post.title}
            </h2>
            <p className="text-slate-300 mb-3">
              {post.description}
            </p>
            <span className="text-sm text-slate-400">
              {post.date}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
