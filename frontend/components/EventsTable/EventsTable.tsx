import { getEvents } from "@/functions/db"

export async function EventsTable() {
  const events = await getEvents()
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Start</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.start}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
