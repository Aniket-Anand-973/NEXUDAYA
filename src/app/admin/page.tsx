import Link from "next/link";

export default function AdminDashboard() {
  const items = [
    ["Students", "View, search and update student records", "/admin/students"],
    ["Home Content", "Announcement, benefits, FAQs and testimonials", "/admin/content"],
    ["Programmes", "Create programmes and manage domains", "/admin/programmes"],
    ["Payments", "Review verified, failed and pending transactions", "/admin/payments"],
    ["Store", "Products, inventory and order fulfilment", "/admin/store"],
    ["Certificates", "Generate and revoke programme certificates", "/admin/certificates"],
  ];
  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <header className="border-b border-slate-100 bg-white">
        <div className="container-shell flex h-16 items-center justify-between">
          <Link href="/" className="font-black text-[#102e50]">
            NEXUDAYA Admin
          </Link>
          <span className="rounded-full bg-red-50 px-4 py-2 text-xs font-bold text-red-700">
            Protected Area
          </span>
        </div>
      </header>
      <div className="container-shell py-8">
        <div className="rounded-3xl bg-[#102e50] p-8 text-white">
          <p className="text-sm text-blue-200">Administration</p>
          <h1 className="mt-2 text-3xl font-black">Platform Overview</h1>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <Link
              key={c[0]}
              href={c[2]}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-black text-[#102e50]">{c[0]}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{c[1]}</p>
              <span className="mt-5 inline-block font-bold text-[#1768c2]">Manage →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
