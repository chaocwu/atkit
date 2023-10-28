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
import { useToast } from "@/components/ui/use-toast"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "../ui/switch"
import { Label } from "../ui/label"


export default function AddTaskPage() {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast()
  const form = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      label: "auto",
      priority: "high"
    }
  })

  async function onSubmit(formData: TaskFormData) {
    await createTask(formData)
    setOpen(false)
    toast({
      variant: "default",
      title: "创建执行任务成功",
      description: formData.title,
    })
  }

  return (
    <Form {...form}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>新建</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>新建执行任务</DialogTitle>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              name="title"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>计划</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <Separator className="boarder" />
            <div className="flex flex-row gap-4">
              <div className="basis-1/2 items-center gap-4">
                <FormField
                  control={form.control}
                  name="label"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>类型</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue defaultValue={"auto"} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="auto">自动</SelectItem>
                            <SelectItem value="all">全量</SelectItem>
                            <SelectItem value="hands">手工</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="basis-1/2 items-center gap-4">
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>优先级</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue defaultValue={"auto"} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="high">高</SelectItem>
                            <SelectItem value="medium">中</SelectItem>
                            <SelectItem value="low">低</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 pt-4">
              <Switch id="fill" defaultChecked />
              <Label htmlFor="fill">回填计划</Label>
            </div>
            <DialogFooter className="justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  取消
                </Button>
              </DialogClose>
              <Button type="submit">确定</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Form>
  )
}

