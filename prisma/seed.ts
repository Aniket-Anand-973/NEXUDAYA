import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.websiteSetting.upsert({
    where: { key: "announcement" },
    update: { value: "Registrations Open for 2026–2030 Batch" },
    create: { key: "announcement", value: "Registrations Open for 2026–2030 Batch" },
  });
  await prisma.faq.createMany({
    data: [
      {
        category: "PAYMENTS",
        question: "What is the registration fee?",
        answer: "The configured registration fee is shown before payment.",
      },
      {
        category: "ACADEMICS",
        question: "How long does the internship take?",
        answer: "The default programme is 120 training hours.",
      },
      {
        category: "VERIFICATION",
        question: "How do I verify a certificate?",
        answer: "Enter the certificate ID on the public verification page.",
      },
    ],
    skipDuplicates: true,
  });
}

main().finally(() => prisma.$disconnect());
