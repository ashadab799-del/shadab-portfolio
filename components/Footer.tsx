export default function Footer() {
  return (
    <footer className="border-t border-slate-700 py-8 text-center text-slate-400">
      <p>© {new Date().getFullYear()} Shadab Akhtar</p>
      <p className="text-sm mt-1">
        Packet Core · Telecom · Linux · AI
      </p>
    </footer>
  );
}
