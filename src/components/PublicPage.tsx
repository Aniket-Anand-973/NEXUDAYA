import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-[linear-gradient(135deg,#edf5ff,#fff)] py-16">
      <div className="container-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-[#102e50] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </section>
  );
}

export function SimpleFooter() {
  return (
    <footer className="mt-auto border-t border-slate-100 bg-white">
      <div className="container-shell flex flex-col gap-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <b className="flex items-center gap-2 text-[#102e50]">
          <img src="/nexudaya-logo.svg" alt="" className="h-8 w-8 rounded-lg" />
          NEXUDAYA
        </b>
        <div className="flex gap-5">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export function SimpleHeader() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/nexudaya-logo.svg"
            alt="NEXUDAYA logo"
            className="h-10 w-10 rounded-xl object-contain"
          />
          <b className="text-lg text-[#102e50]">NEXUDAYA</b>
        </Link>
        <div className="flex gap-2">
          <Link
            href="/login"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-[#1768c2] px-4 py-2 text-sm font-bold text-white"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
