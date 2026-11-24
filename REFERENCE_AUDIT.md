# NEXUDAYA Reference Audit

Audited public homepage and accessible routes on 2026-11-24. The reference was inspected through public browser/web content; private dashboards and account data were not accessed.

## Accessible routes

- `/` — Home
- `/register` — Student Registration (5-step form: Personal, Academic, Emergency, Security, Consent Letter)
- `/login` — Student Login; forgot-password OTP and WhatsApp notice states are referenced
- `/verify` — Public certificate verification by certificate ID or name + university registration number
- `/store` — Physical document store; checkout requires signed-in student dashboard
- `/benefits` — Internship Benefits
- `/courses` — Course listing, currently public sample: AutoCAD
- `/blogs` — Blog/news listing
- `/partner` — Partner application and partner login
- `/cybercafe` — Cyber cafe partner programme and cyber cafe login
- `/contact` — Contact details and inquiry form
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

## Not found or not accessible

- `/about`, `/universities`, `/gallery`, `/team`, `/mou`, `/mous` returned 404 or were absent from public navigation audit.
- Partner/student/admin dashboards require authentication and were not inventoried from private source.
- Exact dynamic university, student, payment, and course data is not copied.

## Homepage structure

1. Registration announcement banner
2. Header with brand and login/register actions
3. Hero: “India's Premier Verified Internship Program”
4. Trust badges and live-count-style metrics
5. Store preview
6. “Why Choose Us” / benefits
7. Programme cards: B.A., B.Sc., B.Com.
8. Gallery/moments
9. Consent letter template state
10. Sample certificate preview
11. Four-step How It Works
12. Verification/trust section
13. Student outcomes/testimonials
14. Universities showcase
15. FAQ accordion
16. Final CTA
17. Footer

## Reproduction constraints

- Use replaceable placeholders rather than copied logos or government recognition claims.
- The implementation will initially use original-neutral branding and clearly editable content.
- Public copy is summarized at a structural level; authentic user, university, and certification data should be supplied by the owner before production.
