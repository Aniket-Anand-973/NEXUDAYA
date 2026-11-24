import Link from "next/link";

export default function StudentDashboard() {
  const cards = [
    ["Profile", "View and update permitted student details", "/dashboard/profile"],
    ["Internship", "Programme, domain, schedule and status", "/dashboard/internship"],
    ["Documents", "Offer, consent, attendance and certificate", "/dashboard/documents"],
    ["Training", "Resources, assignments and quizzes", "/dashboard/training"],
    ["Store Orders", "Browse documents and track deliveries", "/dashboard/orders"],
  ];
  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <DashboardHeader role="Student" />
      <div className="container-shell py-8">
        <div className="rounded-3xl bg-[#102e50] p-8 text-white">
          <p className="text-sm text-blue-200">Student Dashboard</p>
          <h1 className="mt-2 text-3xl font-black">Welcome, Student</h1>
          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            {[
              "Registration: Pending",
              "Payment: Sandbox",
              "Internship: Not Started",
              "Certificate: Not Available",
            ].map((x) => (
              <div key={x} className="rounded-xl bg-white/10 p-4 text-sm">
                {x}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c[0]}
              href={c[2]}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-black text-[#102e50]">{c[0]}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{c[1]}</p>
              <span className="mt-5 inline-block font-bold text-[#1768c2]">Open →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

function DashboardHeader({ role }: { role: string }) {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/nexudaya-logo.svg"
            alt="NEXUDAYA logo"
            className="h-10 w-10 rounded-xl object-contain"
          />
          <b className="text-[#102e50]">NEXUDAYA</b>
        </Link>
        <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-[#1768c2]">
          {role} Area
        </span>
      </div>
    </header>
  );
}
