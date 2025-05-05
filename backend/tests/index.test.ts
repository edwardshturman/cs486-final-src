import { appEntry as app } from "@/api"
import { describe, expect, it } from "bun:test"

describe("Test API from backend", () => {
  it("Should find Hello World", async () => {
    if (!process.env.BACKEND_URL) {
      throw new Error("BACKEND_URL is not set")
    }
    const req = new Request(process.env.BACKEND_URL)
    const res = await app.fetch(req)
    const json = await res.json()
    expect(json.message).toBe("Hello Hono!")
  })
})
