import { handle } from "hono/vercel"
import { type Context, Hono } from "hono"
import { getEvents, seed } from "@/api/db"
import type { BlankEnv, BlankInput } from "hono/types"

const app = new Hono()

app.get("/", (c: Context<BlankEnv, "/", BlankInput>) => {
  return c.json({ message: "Hello Hono!" })
})

app.get("/events", async (c: Context<BlankEnv, "/", BlankInput>) => {
  const events = await getEvents()
  return c.json({ events })
})

app.get("/events/seed", async (c: Context<BlankEnv, "/", BlankInput>) => {
  await seed()
  return c.json({ message: "Seeded events" })
})

export default {
  port: 8081,
  fetch: app.fetch
}

const handler = handle(app)
export const GET = handler
export const POST = handler
export const PATCH = handler
export const PUT = handler
export const OPTIONS = handler
