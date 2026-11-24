"use client";
import { useState } from "react";
import { SimpleHeader, SimpleFooter, PageHero } from "@/components/PublicPage";

export default function VerifyPage() {
  const [id, setId] = useState("");
  const [result, setResult] = useState("");
  return (
    <main className="min-h-screen flex flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Public Verification"
        title="Certificate Verification"
        description="Enter a certificate ID to check whether a public record exists."
      />
      <section className="section-pad flex-1">
        <div className="container-shell">
          <div className="mx-auto max-w-xl rounded-3xl border border-slate-100 p-8 shadow-[0_18px_60px_rgba(30,60,100,.08)]">
            <label className="grid gap-2 font-bold text-[#102e50]">
              Certificate ID
              <input
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="EZY-2026-000123"
                className="h-12 rounded-lg border border-slate-200 px-4 font-normal"
              />
            </label>
            <button
              onClick={() =>
                setResult(
                  id.trim()
                    ? "No public certificate record was found for this ID."
                    : "Enter a certificate ID to begin verification.",
                )
              }
              className="mt-5 w-full rounded-lg bg-[#1768c2] py-3.5 font-bold text-white"
            >
              Verify Now
            </button>
            {result && (
              <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                {result}
              </div>
            )}
          </div>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}
