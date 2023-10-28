"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { priorities, statuses } from "./data/data"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import AddTaskPage from "./add-task"
interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="状态"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="优先级"
            options={priorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="secondary"
            onClick={() => table.resetColumnFilters()}
            className="px-2 lg:px-3 h-8"
          >
            重置
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <AddTaskPage />
    </div>
  )
}
