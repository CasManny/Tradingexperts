/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";

export type Trading = {
  date: string;
  asset: string;
  type: string;
  amount: string;
  status: string;
  updateAt: Date;
};

export const TradingHistorycolumns = (
  refetch: () => void
): ColumnDef<Trading>[] => [
  {
    accessorKey: "date",
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
    accessorKey: "asset",
    header: "Asset",
  },
  {
    accessorKey: "type",
    header: "Call/Put",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Profit/Loss",
    cell: ({ row }) => {
      const status = row.original.status; // Assuming 'status' is either 'Profit' or 'Loss'
      const capitalizedStatus =
        status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

      // Set text color based on the value of status
      const textColor =
        status === "profit"
          ? "text-green-500"
          : status === "loss"
          ? "text-red-500"
          : "text-gray-500";

      return <span className={textColor}>{capitalizedStatus}</span>;
    },
  },
  {
    accessorKey: "updateAt",
    header: "Time Left",
    cell: ({ row }) => {
      const [timeLeft, setTimeLeft] = useState("");

      useEffect(() => {
        const targetTime = new Date(row.original.updateAt);
        const interval = setInterval(() => {
          const now = new Date();
          const diff = targetTime.getTime() - now.getTime();

          if (diff <= 0) {
            setTimeLeft("0d : 0h : 0m : 0s");
            clearInterval(interval);
            refetch(); // Call refetch when the countdown hits zero
          } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
          }
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
      }, [row.original.updateAt]);

      return (
        <span className="bg-red-500 text-white px-2 py-1 rounded">
          {timeLeft}
        </span>
      );
    },
  },
];
