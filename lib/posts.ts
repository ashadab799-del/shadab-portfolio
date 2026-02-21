export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tag: string;
  icon: string;
};

export const posts: BlogPost[] = [
  {
    slug: "packet-core-basics",
    title: "Understanding Packet Core Networks",
    description: "A beginner-friendly guide to how packet core enables mobile data services.",
    date: "Feb 2026",
    image: "/images/packet-core.jpg",
    tag: "Telecom",
    icon: "📡",
  },
  {
    slug: "wireshark-for-telecom",
    title: "Using Wireshark for Telecom Troubleshooting",
    description:
      "How packet analysis helps diagnose signaling failures and latency issues.",
    date: "Feb 2026",
    image: "/images/wireshark.jpg",
    tag: "Troubleshooting",
    icon: "🧪",
  },
  {
    slug: "ai-in-telecom",
    title: "AI in Telecom Operations",
    description:
      "Exploring how AI can improve fault detection, automation, and decision-making.",
    date: "Feb 2026",
    image: "/images/ai-telecom.jpg",
    tag: "AI",
    icon: "🤖",
  },
];