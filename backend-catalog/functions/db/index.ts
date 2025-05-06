import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== "production")
  globalThis.prismaGlobal = prisma

export async function seed() {
  await prisma.event.create({
    data: {
      title: "Hello World",
      slug: "hello-world",
      description: "This is a test event",
      start: new Date()
    },
  })
}

export async function getEvents() {
  return await prisma.event.findMany()
}
