import { SimpleHeader, SimpleFooter, PageHero } from "@/components/PublicPage";
export default function Privacy() {
  return (
    <main className="min-h-screen flex flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Editable privacy notice for the reconstructed platform."
      />
      <section className="section-pad flex-1">
        <div className="container-shell max-w-3xl">
          <h2 className="text-xl font-black">Information we collect</h2>
          <p className="mt-3 leading-8 text-slate-600">
            The production service should collect only information required for registration,
            programme administration and customer support, and should publish approved retention and
            disclosure practices.
          </p>
          <h2 className="mt-8 text-xl font-black">Account security</h2>
          <p className="mt-3 leading-8 text-slate-600">
            Passwords must be hashed, sessions protected and personal information restricted to
            authorised users.
          </p>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
