import Link from "next/link";
import { PageHero, SimpleFooter, SimpleHeader } from "@/components/PublicPage";

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Our Team"
        title="Meet the people behind NEXUDAYA"
        description="Leadership focused on student access, practical training and digital programme management."
      />
      <section className="section-pad flex-1">
        <div className="container-shell">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-100 p-8 text-center shadow-[0_15px_45px_rgba(30,60,100,.08)]">
              <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-[linear-gradient(135deg,#dceeff,#1768c2)] text-4xl font-black text-white">
                AK
              </div>
              <h2 className="mt-6 text-2xl font-black text-[#102e50]">Ashish Kumar</h2>
              <p className="mt-2 font-bold text-[#1768c2]">Founder</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Leads the vision and growth of NEXUDAYA with a focus on accessible training,
                programme quality and student success.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-100 p-8 text-center shadow-[0_15px_45px_rgba(30,60,100,.08)]">
              <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-[linear-gradient(135deg,#fff0cf,#efb43f)] text-4xl font-black text-[#102e50]">
                AA
              </div>
              <h2 className="mt-6 text-2xl font-black text-[#102e50]">Aniket Anand</h2>
              <p className="mt-2 font-bold text-[#1768c2]">Co-Founder</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Co-founder supporting platform development and digital growth through a
                technology-driven, student-first approach.
              </p>
              <a
                href="https://www.linkedin.com/in/aniket-anand973/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-lg border border-slate-200 px-5 py-3 text-sm font-bold text-[#1768c2]"
              >
                View LinkedIn Profile →
              </a>
            </article>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-[#1768c2] px-6 py-3.5 font-bold text-white"
            >
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
