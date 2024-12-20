"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Trading = {
  timestamp: string;
  asset: string;
  callPut: string;
  amount: string;
  profitLoss: string;
  timeLeft: Date;
};

export const TradingHistorycolumns: ColumnDef<Trading>[] = [
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
        header: "Amount"
    },
    {
        accessorKey: "profitLoss",
        header: "Profit/Loss"
    },
    {
        accessorKey: "timeLeft",
        header: "Time Left"
    }
];
