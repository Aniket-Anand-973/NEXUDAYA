import Link from "next/link";
import { PageHero, SimpleFooter, SimpleHeader } from "@/components/PublicPage";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="About NEXUDAYA"
        title="Building practical internship pathways"
        description="NEXUDAYA is a student-focused internship and learning platform designed to connect undergraduate students with structured training, academic support and programme completion records."
      />

      <section className="section-pad flex-1">
        <div className="container-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid min-h-80 place-items-center rounded-3xl bg-[linear-gradient(135deg,#dceeff,#b5cff1)] p-8">
            <div className="grid h-52 w-52 place-items-center rounded-full border-[16px] border-white/60 bg-[#1768c2] text-center text-white">
              <div>
                <span className="block text-5xl font-black">UG</span>
                <span className="mt-2 block text-sm font-bold">STUDENT PROGRAMMES</span>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="section-title mt-3">Structured learning for real student goals</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Our platform helps undergraduate students register for internships, select a learning
              domain, complete guided training and access documents through a simple student
              dashboard.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                ["Student-first", "Clear steps from registration to completion."],
                ["Practical training", "Assignments and learning aligned with selected domains."],
                [
                  "Transparent records",
                  "Track registration, payments, documents and certificate status.",
                ],
                ["Responsive support", "Contact the team for programme and account assistance."],
              ].map(([title, description]) => (
                <article key={title} className="rounded-2xl border border-slate-100 p-5">
                  <h3 className="font-black text-[#102e50]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/team" className="rounded-lg bg-[#1768c2] px-5 py-3 font-bold text-white">
                Meet the Team
              </Link>
              <Link
                href="/register"
                className="rounded-lg border border-slate-200 px-5 py-3 font-bold text-[#102e50]"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </main>
  );
}
