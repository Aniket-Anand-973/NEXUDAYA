import Link from "next/link";
import { SimpleHeader, SimpleFooter, PageHero } from "@/components/PublicPage";

export default function StorePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Physical Documents"
        title="Get your documents delivered"
        description="Browse available document products. Checkout and verified payment remain inside the authenticated student experience."
      />
      <section className="section-pad flex-1">
        <div className="container-shell">
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <h2 className="text-2xl font-black text-[#102e50]">
              No documents are available to order right now
            </h2>
            <p className="mt-3 text-slate-600">
              Published products will appear here after an administrator adds them.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-block rounded-lg bg-[#1768c2] px-5 py-3 font-bold text-white"
            >
              Open Student Dashboard
            </Link>
          </div>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
