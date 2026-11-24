import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXUDAYA — Learn, Intern, Grow, Succeed",
  description: "A full-stack internship registration and student management platform.",
  icons: {
    icon: "/nexudaya-logo.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
