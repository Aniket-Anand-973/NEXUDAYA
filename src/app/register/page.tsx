"use client";

import Link from "next/link";
import { useState } from "react";
import { PageHero, SimpleFooter, SimpleHeader } from "@/components/PublicPage";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const labels = ["Personal", "Academic", "Emergency", "Security", "Consent"];
  if (submitted)
    return (
      <main className="min-h-screen flex flex-col">
        <SimpleHeader />
        <div className="container-shell flex flex-1 items-center justify-center py-20">
          <div className="max-w-lg rounded-3xl border border-green-100 bg-green-50 p-10 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-600 text-3xl text-white">
              ✓
            </div>
            <h1 className="mt-6 text-3xl font-black text-[#102e50]">Registration submitted</h1>
            <p className="mt-4 leading-7 text-slate-600">
              Your details are ready for account creation. Connect this form to the server action
              and database to issue a real student account.
            </p>
            <Link
              href="/login"
              className="mt-7 inline-block rounded-lg bg-[#1768c2] px-5 py-3 font-bold text-white"
            >
              Continue to Login
            </Link>
          </div>
        </div>
        <SimpleFooter />
      </main>
    );
  return (
    <main className="min-h-screen flex flex-col">
      <SimpleHeader />
      <PageHero
        eyebrow="Student Registration"
        title="Create your student account"
        description="Complete your registration for the internship programme. This form is responsive and client validated."
      />
      <section className="section-pad flex-1">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 grid grid-cols-5 gap-2">
              {labels.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setStep(i + 1)}
                  className={`border-b-4 pb-3 text-xs font-bold sm:text-sm ${step === i + 1 ? "border-[#1768c2] text-[#1768c2]" : "border-slate-200 text-slate-400"}`}
                >
                  {i + 1}. {label}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (step < 5) setStep(step + 1);
                else setSubmitted(true);
              }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_18px_60px_rgba(30,60,100,.08)] sm:p-9"
            >
              <h2 className="text-2xl font-black text-[#102e50]">{labels[step - 1]} details</h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {step === 1 && (
                  <>
                    <Field label="Full Name" required />
                    <Field label="Gender" type="select" />
                    <Field label="Parent/Guardian Name" required />
                    <Field label="Contact Number" required />
                    <Field label="Email Address" type="email" required />
                  </>
                )}
                {step === 2 && (
                  <>
                    <Field label="College or University" required />
                    <Field label="Degree / Programme" required />
                    <Field label="Course" />
                    <Field label="Semester" />
                    <Field label="Academic Session" />
                    <Field label="Internship Domain" />
                  </>
                )}
                {step === 3 && (
                  <>
                    <Field label="Emergency Contact Name" required />
                    <Field label="Emergency Contact Number" required />
                    <Field label="Relationship" />
                    <Field label="Address" />
                    <Field label="City" />
                    <Field label="Pincode" />
                  </>
                )}
                {step === 4 && (
                  <>
                    <Field label="Password" type="password" required />
                    <Field label="Confirm Password" type="password" required />
                    <label className="sm:col-span-2 flex gap-3 text-sm text-slate-600">
                      <input required type="checkbox" /> I confirm that the account details are
                      accurate.
                    </label>
                  </>
                )}
                {step === 5 && (
                  <>
                    <label className="sm:col-span-2 flex gap-3 text-sm text-slate-600">
                      <input required type="checkbox" /> I agree to the Terms of Service and consent
                      to programme communication.
                    </label>
                    <label className="sm:col-span-2 flex gap-3 text-sm text-slate-600">
                      <input required type="checkbox" /> I confirm that I have read the consent
                      letter requirements.
                    </label>
                  </>
                )}
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  disabled={step === 1}
                  onClick={() => setStep(step - 1)}
                  className="rounded-lg border border-slate-200 px-5 py-3 font-bold disabled:opacity-40"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-[#1768c2] px-5 py-3 font-bold text-white"
                >
                  {step === 5 ? "Submit Registration" : "Next"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <SimpleFooter />
    </main>
  );
}

function Field({
  label,
  type = "text",
  required = false,
}: {
  label: string;
  type?: string;
  required?: boolean;
}) {
  if (type === "select")
    return (
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        {label}
        {required && " *"}
        <select
          required={required}
          className="h-12 rounded-lg border border-slate-200 px-3 font-normal"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Prefer not to say</option>
        </select>
      </label>
    );
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-700">
      {label}
      {required && " *"}
      <input
        required={required}
        type={type}
        className="h-12 rounded-lg border border-slate-200 px-3 font-normal"
      />
    </label>
  );
}
