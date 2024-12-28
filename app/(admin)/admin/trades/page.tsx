"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Pagination } from "@/lib/more";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../_components/tables/users/data-table";
import api from "@/lib/api";
import { useUserContext } from "@/lib/admin-store";

export type Trade = {
  _id: string;
  type: string;
  amount: number;
  acctype: string;
  asset: string;
  date: string;
  status: string;
};

type TradesResponse = {
  trades: Trade[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

const deleteTradeMutation = async (tradeId: string) => {
  await api.delete(`/admin/delete-trade/${tradeId}`);
};

const UserTrades = () => {
  const { userId } = useUserContext(); // Get `userId` from dynamic route
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();

  const { data, isLoading, isError, refetch } = useQuery<TradesResponse>({
    queryKey: ["user-trades", userId, currentPage],
    queryFn: async () => {
      const response = await api.get(
        `/admin/user-trades/${userId}?page=${currentPage}`
      );
      return response.data;
    },
    enabled: !!userId, // Ensure `userId` exists before querying
  });

  const deleteTrade = useMutation({
    mutationFn: deleteTradeMutation,
    onSuccess: () => {
      queryClient.invalidateQueries();
      Swal.fire("Success!", "Trade deleted successfully", "success");
    },
    onError: () => {
      Swal.fire("Error!", "Something went wrong", "error");
    },
  });

  if (isLoading) return <p>Loading transactions...</p>;
  if (isError) return <p>Couldn't find trades for User</p>;

  const trades = data?.trades || [];
  const meta = data || { total: 0, page: 1, limit: 10, totalPages: 1 };

  const columns: ColumnDef<Trade>[] = [
    {
      accessorKey: "type",
      header: "Trade Type",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "acctype",
      header: "Trade Account",
    },
    {
      accessorKey: "asset",
      header: "Asset",
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) =>
        new Date(row.getValue("date")).toLocaleDateString("en-US"),
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
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const trade = row.original;

        const handleDelete = async () => {
          deleteTrade.mutate(trade._id);
        };

        return (
          <>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div className="py-10 sm:py-12 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6">User Trades</h1>
      <div className="bg-white shadow-md rounded p-6">
        <DataTable data={trades} columns={columns} refetch={refetch} />
        <Pagination
          currentPage={meta.page}
          totalPages={meta.totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <Button variant="outline" onClick={() => router.back()} className="mt-4">
        Back to Users
      </Button>
    </div>
  );
};

export default UserTrades;
