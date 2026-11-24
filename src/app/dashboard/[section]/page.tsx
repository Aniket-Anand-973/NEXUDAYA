import Link from "next/link";

export default async function StudentSection({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const title = section.charAt(0).toUpperCase() + section.slice(1);
  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <header className="border-b border-slate-100 bg-white">
        <div className="container-shell flex h-16 items-center justify-between">
          <Link href="/dashboard" className="font-black text-[#102e50]">
            Student Dashboard
          </Link>
          <Link href="/login" className="text-sm font-bold text-slate-500">
            Logout
          </Link>
        </div>
      </header>
      <section className="container-shell py-8">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="eyebrow">Student Area</p>
          <h1 className="mt-3 text-3xl font-black text-[#102e50]">{title}</h1>
          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            This protected section is ready for authenticated student data. Connect it to the
            database and server session before production use.
          </p>
          <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
            No records are available in demo mode.
          </div>
        </div>
      </section>
    </main>
  );
}
