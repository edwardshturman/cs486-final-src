import { hello } from "@/functions/hello"
import { describe, expect, it } from "bun:test"

describe("Test API from frontend", () => {
  it("Should find Hello World", async () => {
    const response = await hello()
    expect(response.message).toBe("Hello Hono!")
  })
})
