import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database with professional mock data...");

  // 1. Create a professional user
  const user = await prisma.user.upsert({
    where: { email: "counsel@bharatlegal.io" },
    update: {},
    create: {
      name: "Adv. Siddharth Rao",
      email: "counsel@bharatlegal.io",
      image: "https://i.pravatar.cc/150?u=counsel",
    },
  });

  // 2. Create some legal documents
  await prisma.legalDocument.createMany({
    data: [
      {
        userId: user.id,
        title: "Cloud Master Service Agreement (Tata Tech)",
        gcsBucketUrl: "gs://docs/tata_tech_msa.pdf",
        status: "ANALYZED",
      },
      {
        userId: user.id,
        title: "Koramangala Commercial Lease (DLF)",
        gcsBucketUrl: "gs://docs/dlp_lease.pdf",
        status: "ANALYZED",
      },
      {
        userId: user.id,
        title: "Software Non-Disclosure Agreement (Inbound)",
        gcsBucketUrl: "gs://docs/nda_inbound.pdf",
        status: "UPLOADED",
      }
    ],
    skipDuplicates: true,
  });

  // 3. Create a chat session
  const doc1 = await prisma.legalDocument.findFirst({ where: { userId: user.id } });
  if (doc1) {
    const chat = await prisma.chatSession.create({
      data: {
        userId: user.id,
        documentId: doc1.id,
        title: "MSA Risk Analysis",
      }
    });

    await prisma.chatMessage.createMany({
      data: [
        {
          sessionId: chat.id,
          role: "user",
          content: "What are the primary liabilities outlined in this MSA?",
        },
        {
          sessionId: chat.id,
          role: "assistant",
          content: "Based on the text, the vendor caps their liability to ₹35,000 INR while demanding uncapped financial indemnity. This may be unconscionable under Sections 73 & 74 of the Indian Contract Act.",
        }
      ]
    });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
