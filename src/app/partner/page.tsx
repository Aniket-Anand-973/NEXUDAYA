import { SimpleHeader, SimpleFooter, PageHero } from "@/components/PublicPage";

export default function Partner() {
  return (
    <main className="min-h-screen flex flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Partner Programme"
        title="Help students grow. Earn as they succeed."
        description="Choose referral or coupon partner, verify your email and submit an application for review."
      />
      <section className="section-pad flex-1">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div className="grid gap-5 md:grid-cols-2">
            {["Earn commission", "Monthly payouts", "Marketing support", "Live dashboard"].map(
              (x, i) => (
                <article key={x} className="rounded-2xl border border-slate-100 p-6">
                  <b className="text-[#1768c2]">0{i + 1}</b>
                  <h2 className="mt-3 text-lg font-black">{x}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Admin-configured partner benefits and tracking workflow.
                  </p>
                </article>
              ),
            )}
          </div>
          <form className="rounded-3xl border border-slate-100 p-7 shadow-lg">
            <h2 className="text-2xl font-black text-[#102e50]">Partner application</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">
                Partner type
                <select className="h-11 rounded-lg border border-slate-200 px-3">
                  <option>Referral partner</option>
                  <option>Coupon partner</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Full name
                <input required className="h-11 rounded-lg border border-slate-200 px-3" />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Email
                <input
                  required
                  type="email"
                  className="h-11 rounded-lg border border-slate-200 px-3"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Phone
                <input required className="h-11 rounded-lg border border-slate-200 px-3" />
              </label>
            </div>
            <label className="mt-5 flex gap-3 text-sm text-slate-600">
              <input required type="checkbox" /> I accept the terms and conditions.
            </label>
            <button className="mt-6 w-full rounded-lg bg-[#1768c2] py-3.5 font-bold text-white">
              Submit application
            </button>
          </form>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
