import Link from "next/link";
import { SimpleHeader, SimpleFooter, PageHero } from "@/components/PublicPage";

export default function CyberCafe() {
  return (
    <main className="min-h-screen flex flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Cyber Cafe Partnership"
        title="Transform your shop into a student support hub"
        description="Register students, track application progress and support document submissions through a partner dashboard."
      />
      <section className="section-pad flex-1">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {["Sign Up Online", "Quick Onboarding", "Start Registering"].map((x, i) => (
              <article key={x} className="rounded-2xl bg-[#f4f8fd] p-7">
                <b className="text-3xl text-[#1768c2]">0{i + 1}</b>
                <h2 className="mt-4 text-xl font-black">{x}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Complete an editable onboarding process with application review and partner
                  access.
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-[#102e50] p-8 text-white">
            <h2 className="text-2xl font-black">Ready to join the network?</h2>
            <Link
              href="/partner"
              className="mt-5 inline-block rounded-lg bg-white px-5 py-3 font-bold text-[#102e50]"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
