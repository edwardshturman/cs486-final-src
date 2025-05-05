import { handle } from "hono/vercel"
import { type Context, Hono } from "hono"
import type { BlankEnv, BlankInput } from "hono/types"

export const config = {
  runtime: "edge"
}

const app = new Hono().basePath("/api")

app.get("/", (c: Context<BlankEnv, "/", BlankInput>) => {
  return c.json({ message: "Hello Hono!" })
})

// app.get("/events", async (c: Context<BlankEnv, "/", BlankInput>) => {
//   const events = await getEvents()
//   return c.json({ events })
// })

// app.get("/events/seed", async (c: Context<BlankEnv, "/", BlankInput>) => {
//   await seed()
//   return c.json({ message: "Seeded events" })
// })

export default handle(app)
