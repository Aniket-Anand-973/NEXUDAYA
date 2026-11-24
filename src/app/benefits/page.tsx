import Link from "next/link";
import { SimpleHeader, SimpleFooter, PageHero } from "@/components/PublicPage";

const items = [
  ["UGC-aligned Structure", "Programme structure designed for undergraduate academic planning."],
  ["Industry Mentorship", "Learn through guided domain support and practical activities."],
  ["Real-world Projects", "Complete realistic assignments instead of isolated theory exercises."],
  ["Career Guidance", "Access resume, interview and career-development resources."],
  ["Flexible Learning", "Study online and retain access to programme materials."],
  ["Fast-track Progress", "Complete a structured programme within a configurable schedule."],
];
export default function Benefits() {
  return (
    <main className="min-h-screen flex flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Programme Benefits"
        title="Internship Benefits"
        description="Unlock practical training and structured academic support designed for undergraduate students."
      />
      <section className="section-pad flex-1">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((x, i) => (
            <article key={x[0]} className="rounded-2xl border border-slate-100 p-7 shadow-sm">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-blue-50 font-black text-[#1768c2]">
                {i + 1}
              </div>
              <h2 className="mt-5 text-lg font-black">{x[0]}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{x[1]}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/register"
            className="inline-block rounded-lg bg-[#1768c2] px-6 py-3.5 font-bold text-white"
          >
            Get Started
          </Link>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
