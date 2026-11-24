import { PageHero, SimpleFooter, SimpleHeader } from "@/components/PublicPage";

const moments = [
  ["Campus Orientation", "Students attending an orientation session"],
  ["Training Session", "A guided internship learning session"],
  ["Mentor Interaction", "Mentor support and programme discussion"],
  ["Student Workshop", "A practical skills and project workshop"],
  ["Certificate Ceremony", "A programme completion moment"],
  ["Community Programme", "Learning together across student groups"],
];

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Training & Campus Moments"
        title="Gallery"
        description="A visual collection of training, workshops and programme moments."
      />
      <section className="section-pad flex-1">
        <div className="container-shell">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moments.map(([title, description], index) => (
              <article
                key={title}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_12px_40px_rgba(30,60,100,.06)]"
              >
                <div
                  className="h-56 bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
                  style={{
                    backgroundImage:
                      index === 0
                        ? "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85)"
                        : index === 1
                          ? "url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85)"
                          : index === 2
                            ? "url(https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85)"
                            : index === 3
                              ? "url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85)"
                              : index === 4
                                ? "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85)"
                                : "url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85)",
                  }}
                  role="img"
                  aria-label={title}
                />
                <div className="p-5">
                  <h2 className="text-lg font-black text-[#102e50]">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
