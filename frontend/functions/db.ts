import { type Event } from "@/types/Event"

export async function getEvents() {
  if (!process.env.BACKEND_URL) {
    throw new Error("BACKEND_URL is not set")
  }
  const response = await fetch(`${process.env.BACKEND_URL}/events`)
  const data = await response.json()
  return data.events as Event[]
}
