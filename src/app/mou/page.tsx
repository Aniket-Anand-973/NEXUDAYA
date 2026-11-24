import Link from "next/link";
import { PageHero, SimpleFooter, SimpleHeader } from "@/components/PublicPage";

const universities = [
  ["BNMU", "Bhupendra Narayan Mandal University", "Madhepura"],
  ["PU", "Purnea University", "Purnea"],
  ["TMBU", "Tilka Manjhi Bhagalpur University", "Bhagalpur"],
  ["LNMU", "Lalit Narayan Mithila University", "Darbhanga"],
  ["KSDSU", "Kameshwar Singh Darbhanga Sanskrit University", "Darbhanga"],
];

export default function MOUPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Institutional Partnerships"
        title="Universities & MOUs"
        description="An editable overview of universities and institutional relationships associated with NEXUDAYA programmes."
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
                <span className="mt-5 inline-block rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-500">
                  Details available
                </span>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-blue-100 bg-[#f7faff] p-7 text-center">
            <h2 className="text-xl font-black text-[#102e50]">Partnership documentation</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Verified agreements and university documents should only be published after they have
              been authorized and supplied by the project owner.
            </p>
            <Link
              href="/partner"
              className="mt-6 inline-flex rounded-lg bg-[#1768c2] px-5 py-3 font-bold text-white"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
