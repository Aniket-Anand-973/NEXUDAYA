import Link from "next/link";

export default async function AdminSection({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const title = section.charAt(0).toUpperCase() + section.slice(1);
  return (
    <main className="min-h-screen bg-[#f4f7fb]">
      <header className="border-b border-slate-100 bg-white">
        <div className="container-shell flex h-16 items-center justify-between">
          <Link href="/admin" className="font-black text-[#102e50]">
            NEXUDAYA
          </Link>
          <Link href="/login" className="text-sm font-bold text-slate-500">
            Logout
          </Link>
        </div>
      </header>
      <section className="container-shell py-8">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="eyebrow">Administration</p>
          <h1 className="mt-3 text-3xl font-black text-[#102e50]">Manage {title}</h1>
          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            This protected management screen is ready for CRUD records and role-based authorization.
          </p>
          <button className="mt-6 rounded-lg bg-[#1768c2] px-5 py-3 font-bold text-white">
            Create New
          </button>
          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-slate-400" colSpan={3}>
                    No records available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
