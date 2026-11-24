import Link from "next/link";
import { SimpleHeader, SimpleFooter, PageHero } from "@/components/PublicPage";

const posts = [
  [
    "Internship readiness: building a stronger university profile",
    "Campus & Careers",
    "Read the published guide and prepare for your next academic milestone.",
  ],
  [
    "How to track an internship through a student dashboard",
    "Student Systems",
    "Understand registration, training, documents and certificate status.",
  ],
  [
    "Choosing the right UG internship domain",
    "Programme Planning",
    "Compare your degree, interests and career goals before enrolling.",
  ],
];
export default function Blogs() {
  return (
    <main className="min-h-screen flex flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Insights & Updates"
        title="Student and Internship Insights"
        description="Original editorial placeholders covering training, academic planning and career readiness."
      />
      <section className="section-pad flex-1">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <article
              key={p[0]}
              className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="h-44 bg-[linear-gradient(135deg,#e8f1fc,#bfd9f5)] grid place-items-center text-4xl text-[#1768c2]">
                {i + 1}
              </div>
              <div className="p-6">
                <small className="font-bold text-[#1768c2]">{p[1]}</small>
                <h2 className="mt-3 text-xl font-black text-[#102e50]">{p[0]}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{p[2]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
