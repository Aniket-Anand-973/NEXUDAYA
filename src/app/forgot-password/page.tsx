"use client";

import { useState } from "react";
import { SimpleFooter, SimpleHeader } from "@/components/PublicPage";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex min-h-screen flex-col">
      <SimpleHeader />
      <section className="section-pad flex-1 bg-[#f7faff]">
        <div className="container-shell max-w-lg">
          <p className="eyebrow">Account Recovery</p>
          <h1 className="mt-3 text-4xl font-black text-[#102e50]">Forgot password</h1>
          <p className="mt-4 leading-7 text-slate-600">
            Enter your registered email address to request a password reset.
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
            className="mt-8 grid gap-5 rounded-2xl border border-slate-100 bg-white p-7 shadow-lg"
          >
            <label className="grid gap-2 text-sm font-bold">
              Email address
              <input
                required
                type="email"
                autoComplete="email"
                className="h-12 rounded-lg border border-slate-200 px-3 font-normal"
              />
            </label>
            <button className="rounded-lg bg-[#1768c2] py-3.5 font-bold text-white">
              Send reset link
            </button>
            {submitted && (
              <p role="status" className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
                Your recovery request has been submitted. Email delivery will be enabled once the
                mail service is configured.
              </p>
            )}
          </form>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
