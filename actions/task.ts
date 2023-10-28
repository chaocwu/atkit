'use server'

import { revalidatePath } from 'next/cache'
import { db } from "@/lib/db";
import { TaskFormData, taskSchema } from '@/schemas/task';


export async function createTask(formData: TaskFormData) {
  try {
    await db.task.create({
      data: taskSchema.parse(formData)
    })
    revalidatePath('/task')
  } catch (e) {
    return { message: '创建任务失败' }
  }
}
