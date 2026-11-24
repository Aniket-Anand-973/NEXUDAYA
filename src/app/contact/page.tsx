import { SimpleHeader, SimpleFooter, PageHero } from "@/components/PublicPage";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Contact Us"
        title="Get in touch"
        description="Questions about registration, certification or university alignment? Send an inquiry."
      />
      <section className="section-pad flex-1">
        <div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-4">
            <article className="rounded-2xl border border-slate-100 p-6">
              <b>Office</b>
              <p className="mt-2 text-sm leading-7 text-slate-600">Madhepura, Bihar 852113</p>
            </article>
            <article className="rounded-2xl border border-slate-100 p-6">
              <b>Phone</b>
              <p className="mt-2 text-sm text-slate-600">
                <a href="tel:+917547879552">+91 75478 79552</a>
              </p>
            </article>
            <article className="rounded-2xl border border-slate-100 p-6">
              <b>Email</b>
              <p className="mt-2 text-sm text-slate-600">
                <a href="mailto:aniketanand973@gmail.com">aniketanand973@gmail.com</a>
              </p>
            </article>
          </div>
          <form className="rounded-3xl border border-slate-100 p-7 shadow-lg">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                "Full name",
                "Email address",
                "Phone number",
                "College / University",
                "Degree / Course",
                "Semester",
              ].map((x) => (
                <label key={x} className="grid gap-2 text-sm font-bold">
                  {x}
                  <input
                    required={x !== "Semester"}
                    className="h-11 rounded-lg border border-slate-200 px-3 font-normal"
                  />
                </label>
              ))}
            </div>
            <label className="mt-5 grid gap-2 text-sm font-bold">
              How can we help?
              <textarea
                required
                rows={5}
                className="rounded-lg border border-slate-200 p-3 font-normal"
              />
            </label>
            <button className="mt-5 rounded-lg bg-[#1768c2] px-5 py-3.5 font-bold text-white">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
