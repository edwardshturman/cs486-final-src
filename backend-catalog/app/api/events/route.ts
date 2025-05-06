import { getEvents } from "@/functions/db"

export async function GET() {
  const events = await getEvents()
  return Response.json({ events })
}
