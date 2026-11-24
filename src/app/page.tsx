import Link from "next/link";

const nav = [
  "Home",
  "About",
  "Benefits",
  "Courses",
  "Store",
  "Blogs",
  "Universities",
  "Gallery",
  "Team",
  "MOUs",
  "Verify",
  "Contact",
  "Partner",
];

function Header() {
  return (
    <>
      <div className="bg-[#153b67] text-white text-xs sm:text-sm">
        <div className="container-shell flex h-9 items-center justify-between">
          <p>
            <span className="font-bold">Registrations Open</span>
            <span className="mx-2 text-blue-200">|</span>2026–2030 Batch
          </p>
          <Link href="/register" className="font-bold text-amber-300">
            Register Now →
          </Link>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="container-shell flex h-[76px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/nexudaya-logo.svg"
              alt="NEXUDAYA logo"
              className="h-12 w-12 rounded-xl object-contain"
            />
            <span>
              <b className="block text-xl leading-none text-[#12345a]">NEXUDAYA</b>
              <small className="text-[9px] font-bold tracking-[.12em] text-slate-500">
                STUDENT INTERNSHIP PORTAL
              </small>
            </span>
          </Link>
          <nav className="hidden items-center gap-5 xl:flex">
            {nav.map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : item === "Verify"
                      ? "/verify"
                      : `/${item.toLowerCase().replace("mous", "mou")}`
                }
                className="text-[13px] font-bold text-slate-600 hover:text-blue-700"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-bold text-[#12345a] sm:block"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-[#1768c2] px-4 py-2.5 text-sm font-bold text-white shadow-sm"
            >
              Register
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d2542] text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <img
              src="/nexudaya-logo.svg"
              alt="NEXUDAYA logo"
              className="h-11 w-11 rounded-xl object-contain"
            />
            <b className="text-xl">NEXUDAYA</b>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-300">
            A structured internship registration and student management platform for undergraduate
            students.
          </p>
        </div>
        <div>
          <b>Quick Links</b>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <Link href="/about">About</Link>
            <Link href="/benefits">Benefits</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/verify">Verify Certificate</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/mou">MOUs</Link>
          </div>
        </div>
        <div>
          <b>For Students</b>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            <Link href="/register">Register</Link>
            <Link href="/login">Student Login</Link>
            <Link href="/store">Store</Link>
            <Link href="/contact">Support</Link>
          </div>
        </div>
        <div>
          <b>Contact</b>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            Madhepura, Bihar 852113
            <br />
            <a href="tel:+917547879552">+91 75478 79552</a>
            <br />
            <a href="mailto:aniketanand973@gmail.com">aniketanand973@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-5 text-xs text-slate-400 sm:flex-row sm:justify-between">
          <span>© 2026 NEXUDAYA. All rights reserved.</span>
          <span>
            <Link href="/privacy">Privacy Policy</Link> ·{" "}
            <Link href="/terms">Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const benefits = [
    [
      "UGC-aligned structure",
      "Curriculum guidance designed around common academic programme requirements.",
    ],
    [
      "120-hour programme",
      "Structured training, live sessions, notes, quizzes and tracked progress.",
    ],
    ["Verifiable certificates", "Unique certificate IDs and public verification workflows."],
    ["Affordable fee", "Transparent programme pricing with configurable university discounts."],
    ["Flexible learning", "Participate online with mobile-friendly lessons and resources."],
    ["Mentor support", "Domain guidance and progress support during the internship."],
  ];
  const faqs = [
    [
      "What is the registration fee?",
      "The fee is configured once by the programme administrator and clearly shown before payment.",
    ],
    [
      "What is the refund policy?",
      "Refund eligibility, if any, is governed by the published terms and your registration status.",
    ],
    [
      "How long does the internship take?",
      "The default programme duration is 120 hours, with scheduling managed from the dashboard.",
    ],
    [
      "How do I verify a certificate?",
      "Use the public verification page and enter the certificate ID shown on the document.",
    ],
  ];
  return (
    <main>
      <Header />
      <section className="overflow-hidden bg-[linear-gradient(135deg,#eef6ff_0%,#fff_58%,#f3f8ff_100%)]">
        <div className="container-shell grid min-h-[570px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-700">
              Empowering UG & PG Students Across India
            </div>
            <h1 className="max-w-xl text-[44px] font-black leading-[1.08] tracking-[-.035em] text-[#102e50] sm:text-[58px]">
              India&apos;s Internship &amp; Student Growth Platform
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Register for structured training, complete guided assignments, and access verifiable
              programme documents from one student portal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="rounded-lg bg-[#1768c2] px-6 py-4 font-bold text-white shadow-[0_10px_30px_rgba(23,104,194,.25)]"
              >
                Start Your Journey
              </Link>
              <Link
                href="/verify"
                className="rounded-lg border border-slate-200 bg-white px-6 py-4 font-bold text-[#12345a]"
              >
                Verify Certificate
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm font-bold text-slate-600">
              <span>✓ 120-Hour Programme</span>
              <span>✓ Online Flexibility</span>
              <span>✓ Mentor Support</span>
            </div>
          </div>
          <div className="relative hidden min-h-[430px] lg:block">
            <div className="absolute right-0 top-0 h-[390px] w-[430px] rounded-[44px] bg-[linear-gradient(145deg,#dbeeff,#a8ccf5)]">
              <div className="absolute inset-7 grid place-items-center rounded-[34px] border border-white/70 bg-white/35">
                <div className="grid h-64 w-64 place-items-center rounded-full border-[18px] border-white/70 bg-[#1768c2] text-center text-white">
                  <div>
                    <span className="block text-5xl font-black">120</span>
                    <span className="mt-2 block text-sm font-bold tracking-wider">
                      TRAINING HOURS
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 rounded-2xl bg-white p-5 shadow-xl">
              <b className="block text-2xl text-[#1768c2]">15+</b>
              <small className="font-bold text-slate-500">Learning Domains</small>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white">
        <div className="container-shell grid grid-cols-2 gap-6 py-7 text-center md:grid-cols-4">
          <div>
            <b className="block text-2xl text-[#1768c2]">70,000+</b>
            <small className="text-slate-500">Student Community</small>
          </div>
          <div>
            <b className="block text-2xl text-[#1768c2]">11+</b>
            <small className="text-slate-500">University Partners</small>
          </div>
          <div>
            <b className="block text-2xl text-[#1768c2]">15+</b>
            <small className="text-slate-500">Learning Domains</small>
          </div>
          <div>
            <b className="block text-2xl text-[#1768c2]">24/7</b>
            <small className="text-slate-500">Dashboard Access</small>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="mb-12 text-center">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="section-title mt-3">Designed for Undergraduate Students</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <article
                key={b[0]}
                className="rounded-2xl border border-slate-100 p-7 shadow-[0_12px_40px_rgba(30,60,100,.07)] transition hover:-translate-y-1"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-xl font-black text-[#1768c2]">
                  {i + 1}
                </div>
                <h3 className="text-lg font-extrabold">{b[0]}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{b[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f4f8fd]">
        <div className="container-shell">
          <div className="mb-12 text-center">
            <p className="eyebrow">UG &amp; PG Programmes</p>
            <h2 className="section-title mt-3">Available for Every Academic Stream</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Explore internship domains designed for undergraduate and postgraduate students.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["B.A.", "UG Arts", "#1768c2", "#76b2ef", "15+ domains"],
              ["B.Sc.", "UG Science", "#16856d", "#73cdb5", "15+ domains"],
              ["B.Com.", "UG Commerce", "#e39b20", "#f4cf73", "15+ domains"],
              ["M.A.", "PG Arts", "#7357c4", "#b59bec", "10+ domains"],
              ["M.Sc.", "PG Science", "#097c9f", "#64cadf", "10+ domains"],
              ["M.Com.", "PG Commerce", "#d66a2c", "#f2aa73", "10+ domains"],
            ].map(([name, level, start, end, domains]) => (
              <article
                key={name}
                className="group overflow-hidden rounded-2xl border border-white bg-white shadow-[0_15px_45px_rgba(30,60,100,.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(30,60,100,.14)]"
              >
                <div
                  className="relative h-44 grid place-items-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${start}, ${end})`,
                  }}
                >
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-[#102e50] shadow-sm">
                    {level}
                  </span>
                  <div className="absolute -bottom-14 -left-10 h-36 w-36 rounded-full border-[22px] border-white/10" />
                  <b className="relative text-5xl font-black text-white drop-shadow-md">{name}</b>
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between gap-3">
                    <b className="text-xl text-[#102e50]">{name}</b>
                    <span className="text-xs font-bold" style={{ color: start }}>
                      {domains}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    Flexible internship tracks for {level} students
                  </p>
                  <Link
                    href="/courses"
                    className="mt-6 inline-flex rounded-lg border border-slate-200 px-5 py-3 text-sm font-bold transition hover:border-transparent hover:text-white"
                    style={{ color: start }}
                  >
                    View Domains →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#edf5ff] p-8">
            <div className="aspect-[4/3] rounded-2xl border-8 border-white bg-[linear-gradient(135deg,#b9d5f4,#eef6ff)] shadow-lg grid place-items-center">
              <div className="text-center">
                <span className="text-5xl">📄</span>
                <b className="mt-3 block text-[#12345a]">Certificate Preview</b>
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Certificate</p>
            <h2 className="section-title mt-3">A verifiable record of completion</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Certificates should be generated only after the configured completion conditions are
              met. Every document can carry a unique ID and QR code for public verification.
            </p>
            <div className="mt-7 flex gap-3">
              <Link
                href="/verify"
                className="rounded-lg bg-[#1768c2] px-5 py-3 font-bold text-white"
              >
                Verify Certificate
              </Link>
              <Link
                href="/register"
                className="rounded-lg border border-slate-200 px-5 py-3 font-bold text-[#12345a]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#102e50] text-white">
        <div className="container-shell">
          <div className="mb-12 text-center">
            <p className="eyebrow text-amber-300">How It Works</p>
            <h2 className="section-title mt-3">From Registration to Certificate</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                ["Register", "Submit academic details and choose a domain."],
                ["Pay & Receive", "Complete verified payment and receive your offer."],
                ["Train", "Attend training and complete programme activities."],
                ["Get Certificate", "Download a completion certificate with verification."],
              ] as [string, string][]
            ).map((s, i) => (
              <article
                key={s[0]}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <b className="grid h-11 w-11 place-items-center rounded-full bg-amber-400 text-[#102e50]">
                  {i + 1}
                </b>
                <h3 className="mt-5 text-lg font-bold">{s[0]}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">{s[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="mb-12 text-center">
            <p className="eyebrow">Student Outcomes</p>
            <h2 className="section-title mt-3">Skills and Experience for Your Future</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              NEXUDAYA helps UG and PG students develop practical skills while building a stronger
              academic and professional profile.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "Career-ready Skills",
                "Learn in-demand tools, improve workplace communication and complete practical assignments.",
                "01",
                "#1768c2",
              ],
              [
                "Structured Training",
                "Follow a guided programme with domain resources, mentor support and measurable progress.",
                "02",
                "#16856d",
              ],
              [
                "Professional Records",
                "Keep internship documents, project work and completion records organised in one place.",
                "03",
                "#e39b20",
              ],
            ].map(([title, description, number, color]) => (
              <article
                key={title}
                className="relative overflow-hidden rounded-2xl border border-slate-100 p-7 shadow-[0_12px_40px_rgba(30,60,100,.06)]"
              >
                <span
                  className="absolute right-5 top-2 text-6xl font-black opacity-10"
                  style={{ color }}
                >
                  {number}
                </span>
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl text-lg font-black text-white"
                  style={{ background: color }}
                >
                  {number}
                </div>
                <h3 className="mt-6 text-xl font-black text-[#102e50]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="mb-12 text-center">
            <p className="eyebrow">Leadership</p>
            <h2 className="section-title mt-3">Meet the Team</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              The people helping build a structured and student-focused internship platform.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-100 p-8 text-center shadow-[0_15px_45px_rgba(30,60,100,.08)]">
              <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-[linear-gradient(135deg,#dceeff,#1768c2)] text-4xl font-black text-white">
                AK
              </div>
              <h3 className="mt-6 text-2xl font-black text-[#102e50]">Ashish Kumar</h3>
              <p className="mt-2 font-bold text-[#1768c2]">Founder</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Leads the vision and growth of NEXUDAYA with a focus on accessible training,
                programme quality and student success.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-100 p-8 text-center shadow-[0_15px_45px_rgba(30,60,100,.08)]">
              <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-[linear-gradient(135deg,#fff0cf,#efb43f)] text-4xl font-black text-[#102e50]">
                AA
              </div>
              <h3 className="mt-6 text-2xl font-black text-[#102e50]">Aniket Anand</h3>
              <p className="mt-2 font-bold text-[#1768c2]">Co-Founder</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Co-founder supporting platform development and digital growth through a
                technology-driven, student-first approach.
              </p>
              <a
                href="https://www.linkedin.com/in/aniket-anand973/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-lg border border-slate-200 px-5 py-3 text-sm font-bold text-[#1768c2]"
              >
                View LinkedIn Profile →
              </a>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
