import { EventsTable } from "@/components/EventsTable"

import styles from "./page.module.css"

export const dynamic = "force-dynamic"

export default async function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1>compsigh Events API Demo</h1>
        <EventsTable />
      </main>
    </div>
  )
}
