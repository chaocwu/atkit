"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { createTask } from "@/actions/task";
import { TaskFormData, taskSchema } from "@/schemas/task";
import * as React from "react"

export function DialogForm() {
  const form = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema)
  })

  async function onSubmit(formData: TaskFormData) {
    await createTask(formData)
  }

  return (
    <Form {...form}>
      <Dialog>
        <DialogTrigger asChild>
          <Button>新建</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>新建执行任务</DialogTitle>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>标题</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>标签</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  取消
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit">确定</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Form>
  )
}

