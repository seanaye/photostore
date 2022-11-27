import { prisma, Prisma } from "../utils/prisma.ts";

const rand = crypto.getRandomValues(new Uint8Array(16));

const purchase = await prisma.purchase.create({
  data: {
    photo: {
      create: {
        previewUrl: "https://picsum.photos/200",
        fullUrl: "https://picsum.photos/200",
        rawUrl: "https://picsum.photos/200",
        captureDate: new Date(),
        price: 3,
      },
    },
    cart: {
      create: {
        email: {
          create: {
            email: "hello@seanaye.ca",
          },
        },
        cartIdentifier: btoa(String.fromCharCode(...rand)),
      },
    },
  },
});

console.log(`Seeding finished`);
await prisma.$disconnect();
