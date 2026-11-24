import Link from "next/link";
import { SimpleHeader, SimpleFooter, PageHero } from "@/components/PublicPage";

export default function Courses() {
  return (
    <main className="min-h-screen flex flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Browse Learning"
        title="Internship Courses & Domains"
        description="Explore streams and domains available for undergraduate internship programmes."
      />
      <section className="section-pad flex-1">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            "Digital Marketing",
            "Data & Research",
            "Accounting & Tally",
            "Content & Communication",
            "Web Development",
            "Project Management",
          ].map((name, i) => (
            <article key={name} className="rounded-2xl border border-slate-100 p-7 shadow-sm">
              <div className="h-32 rounded-xl bg-[linear-gradient(135deg,#dceeff,#91b8ea)] grid place-items-center text-3xl text-white">
                {i % 3 === 0 ? "◈" : i % 3 === 1 ? "▦" : "⌁"}
              </div>
              <h2 className="mt-5 text-lg font-black text-[#102e50]">{name}</h2>
              <p className="mt-2 text-sm text-slate-500">Configurable 120-hour domain</p>
              <Link href="/register" className="mt-5 inline-block text-sm font-bold text-[#1768c2]">
                Register for this domain →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
