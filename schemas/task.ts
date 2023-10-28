import { z } from "zod";

export const taskSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(1, "标题必填"),
  label: z.string().min(1, "标签必填"),
  status: z.string().optional(),
  priority: z.string().optional(),
})

export type TaskFormData = z.infer<typeof taskSchema>
