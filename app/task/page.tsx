import { z } from "zod"

import { columns } from "@/components/task/columns"
import DataTable from "@/components/task/data-table"
import { taskSchema } from "@/schemas/task"
import { db } from "@/lib/db"


// Simulate a database read for tasks.
// async function getTasks() {
//   const data = await fs.readFile(
//     path.join(process.cwd(), "components/task/data/tasks.json")
//   )
//   const tasks = JSON.parse(data.toString())
//   return z.array(taskSchema).parse(tasks)
// }
async function getTasks() {
  const data = await db.task.findMany()
  return z.array(taskSchema).parse(data)
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
