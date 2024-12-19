"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Referral = {
  id: number
  name: string
  dateRegistered: string
}

export const columns: ColumnDef<Referral>[] = [
  {
    accessorKey: "id",
    header: "S/N",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "dateRegistered",
    header: "Date Registered",
  },
]
