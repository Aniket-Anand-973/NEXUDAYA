"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SimpleFooter, SimpleHeader } from "@/components/PublicPage";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || "Unable to log in. Please try again.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setMessage("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      <SimpleHeader />
      <section className="section-pad flex-1 bg-[#f7faff]">
        <div className="container-shell grid max-w-5xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Student Login</p>
            <h1 className="mt-3 text-4xl font-black text-[#102e50]">Welcome back</h1>
            <p className="mt-4 leading-7 text-slate-600">
              Access your profile, internship details, documents and resources.
            </p>
            <form
              onSubmit={handleLogin}
              className="mt-8 grid gap-5 rounded-2xl border border-slate-100 bg-white p-7 shadow-lg"
            >
              <label className="grid gap-2 text-sm font-bold">
                Email
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  className="h-12 rounded-lg border border-slate-200 px-3 font-normal"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Password
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  minLength={6}
                  className="h-12 rounded-lg border border-slate-200 px-3 font-normal"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-[#1768c2] py-3.5 font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
              {message && (
                <p
                  role="alert"
                  className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-700"
                >
                  {message}
                </p>
              )}
              <p className="rounded-lg bg-slate-50 p-3 text-xs leading-5 text-slate-500">
                Local test login: <b>student@nexudaya.com</b> / <b>Student@123</b>
              </p>
              <div className="flex justify-between text-sm">
                <Link href="/forgot-password" className="font-bold text-[#1768c2]">
                  Forgot password
                </Link>
                <Link href="/register" className="font-bold text-slate-600">
                  Create account
                </Link>
              </div>
            </form>
          </div>
          <aside className="rounded-3xl bg-[#102e50] p-8 text-white">
            <h2 className="text-2xl font-black">Important notice</h2>
            <p className="mt-4 leading-7 text-blue-100">
              Join the official communication channel for deadlines and programme updates. If you
              need password assistance, use the password recovery link.
            </p>
          </aside>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
