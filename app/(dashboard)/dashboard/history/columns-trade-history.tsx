"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type History = {
  timestamp: Date;
  asset: string;
  callPut: string;
  profitLoss: string;
  amount: number;
  status: "pending" | "delivered" | "success";
};

export const columnsTradeHistory: ColumnDef<History>[] = [
  {
    accessorKey: "timestamp",
    header: "Timestamp",
  },
  {
    accessorKey: "asset",
    header: "Asset",
  },
  {
    accessorKey: "callPut",
    header: "Call/Put",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "profitLoss",
    header: "Profit/Loss",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
