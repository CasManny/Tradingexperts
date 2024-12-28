"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type History = {
  id: string;
  date: string;
  type: string;
  method: string;
  amount: number;
  status: "pending" | "approved";
};

export const columnsTransactionHistory: ColumnDef<History>[] = [
  {
    accessorKey: "trxId",
    header: "ID",
  },
  {
    accessorKey: "timestamp",
    header: "Timestamp",
    cell: ({ row }) => {
      const date = new Date(row.original.date);
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
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded ${
          row.getValue("status") === "Approved"
            ? "bg-green-200 text-green-800"
            : "bg-red-200 text-red-800"
        }`}
      >
        {row.getValue("status")}
      </span>
    ),
  },
];
