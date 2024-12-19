"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type History = {
  id: number;
  timestamps: string;
  type: string;
  method: string;
  amount: number;
  status: "pending" | "delivered" | "success";
};

export const columnsTransactionHistory: ColumnDef<History>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "timestamp",
    header: "Timestamp",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
