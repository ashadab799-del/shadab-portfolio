"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "packet-core-basics",
    title: "Understanding Packet Core Networks",
    description:
      "Beginner-friendly overview of mobile packet core architecture (SGSN, GGSN, MME, EPC).",
    date: "Feb 2026",
    image: "/blog/packet-core.jpg",
  },
  {
    slug: "wireshark-for-telecom",
    title: "Wireshark for Telecom Engineers",
    description:
      "How to use Wireshark for packet analysis, troubleshooting, and protocol inspection in telecom networks.",
    date: "Feb 2026",
    image: "/blog/wireshark.jpg",
  },
  {
    slug: "lte-troubleshooting-wireshark",
    title: "LTE Troubleshooting Using Wireshark",
    description:
      "Practical examples of analyzing LTE signaling and attach failures using Wireshark.",
    date: "Feb 2026",
    image: "/blog/lte-wireshark.jpg",
  },
  {
    slug: "ai-in-telecom",
    title: "AI in Telecom Operations",
    description:
      "How AI improves fault detection, automation, and optimization in telecom networks.",
    date: "Feb 2026",
    image: "/blog/ai-telecom.jpg",
  },
  {
    slug: "ai-for-network-monitoring",
    title: "AI for Network Monitoring & Prediction",
    description:
      "Using machine learning to predict outages and improve reliability.",
    date: "Feb 2026",
    image: "/blog/ai-monitoring.jpg",
  },
  {
    slug: "future-of-ai-in-5g",
    title: "Future of AI in 5G Networks",
    description:
      "How AI will shape next-generation 5G and packet core systems.",
    date: "Feb 2026",
    image: "/blog/ai-5g.jpg",
  },
];
export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-14">
        <span className="text-sm uppercase tracking-wider text-indigo-400 font-medium">
          Knowledge & Insights
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
          Blog
        </h1>

        <p className="text-slate-300 max-w-2xl">
          Articles on telecom networks, packet core engineering,
          troubleshooting, and AI.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="space-y-8">
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-indigo-500 transition"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Title on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block mb-2 text-xs uppercase tracking-wide bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded">
  Blog
</span>

                  <h2 className="text-xl font-semibold text-white">
                    {post.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-300 mb-4">
                  {post.description}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>{post.date}</span>
                  <span className="text-indigo-400">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}