import { Hono } from "hono"
import { cors } from "hono/cors"
import { getEvents, seed } from "@/src/db"

const app = new Hono()

app.use("/", cors()) // TODO: restrict origin based on ENV
app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" })
})

app.get("/events", async (c) => {
  const events = await getEvents()
  return c.json({ events })
})

app.get("/events/seed", async (c) => {
  await seed()
  return c.json({ message: "Seeded events" })
})

export default {
  port: 8081,
  fetch: app.fetch
}
