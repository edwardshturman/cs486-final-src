"use server"

export async function hello() {
  if (!process.env.BACKEND_URL) {
    throw new Error("BACKEND_URL is not set")
  }
  return await fetch(process.env.BACKEND_URL).then((res) => res.json())
}
