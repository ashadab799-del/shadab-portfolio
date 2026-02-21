import { ReactNode } from "react";

export default function BlogPostLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <article className="prose prose-invert prose-lg max-w-3xl mx-auto px-6 py-16">
      {children}
    </article>
  );
}
