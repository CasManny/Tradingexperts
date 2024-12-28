"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Referral = {
  fullName: string
  regDate: string
}

export const columns: ColumnDef<Referral>[] = [
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "regDate",
    header: "Date Registered",
    cell: ({ row }) => {
      const date = new Date(row.original.regDate);
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(date);
    },
  },
]
