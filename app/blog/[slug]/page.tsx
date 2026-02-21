import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Understanding Packet Core Networks | Shadab Akhtar",
  description:
    "Beginner-friendly guide to packet core networks including SGSN, GGSN, MME, and EPC.",
  openGraph: {
    title: "Understanding Packet Core Networks",
    description:
      "Learn packet core fundamentals with simple explanations.",
    images: ["/images/packet-core.jpg"],
  },
};


export default function BlogPostPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Blog Post Title
      </h1>

      <Image
        src="/images/packet-core.jpg"
        alt="Blog cover"
        width={1200}
        height={600}
        className="rounded-xl mb-8"
      />

      <p className="text-slate-300 leading-relaxed text-lg">
        This is your blog post content.
      </p>
    </article>
  );
}
