import Link from "next/link";
import { PageHero, SimpleFooter, SimpleHeader } from "@/components/PublicPage";

const universities = [
  ["BNMU", "Bhupendra Narayan Mandal University", "Madhepura"],
  ["PU", "Purnea University", "Purnea"],
  ["TMBU", "Tilka Manjhi Bhagalpur University", "Bhagalpur"],
  ["LNMU", "Lalit Narayan Mithila University", "Darbhanga"],
  ["KSDSU", "Kameshwar Singh Darbhanga Sanskrit University", "Darbhanga"],
];

export default function UniversitiesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="University Network"
        title="Universities Covered"
        description="Explore the universities currently listed for the NEXUDAYA programme."
      />
      <section className="section-pad flex-1">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {universities.map(([shortName, name, city]) => (
              <article
                key={name}
                className="rounded-2xl border border-slate-100 p-7 text-center shadow-[0_12px_40px_rgba(30,60,100,.06)]"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#edf5ff] text-sm font-black text-[#1768c2]">
                  {shortName}
                </div>
                <h2 className="mt-5 text-lg font-black leading-7 text-[#102e50]">{name}</h2>
                <p className="mt-2 text-sm text-slate-500">{city}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/register"
              className="inline-flex rounded-lg bg-[#1768c2] px-6 py-3.5 font-bold text-white"
            >
              Register for an Internship
            </Link>
          </div>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
