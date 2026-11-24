import { SimpleHeader, SimpleFooter, PageHero } from "@/components/PublicPage";
export default function Terms() {
  return (
    <main className="min-h-screen flex flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Editable terms governing use of the reconstructed platform."
      />
      <section className="section-pad flex-1">
        <div className="container-shell max-w-3xl">
          <h2 className="text-xl font-black">Registration</h2>
          <p className="mt-3 leading-8 text-slate-600">
            Users must provide accurate account and academic information. Administrators must
            document eligibility, fee, refund and certificate requirements before public launch.
          </p>
          <h2 className="mt-8 text-xl font-black">Payments and documents</h2>
          <p className="mt-3 leading-8 text-slate-600">
            No payment or certificate status should be treated as verified until it has been checked
            through an authorised server-side process.
          </p>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
