"use client";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import api from "@/lib/api";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../_components/tables/users/data-table";
import { Transaction } from "../transactions/page";
import { CircleCheckBig, Trash2 } from "lucide-react";

type PendingResponse = {
  pending: Transaction[];
};

const deleteTrxMutation = async (trxId: string) => {
  await api.delete(`/admin/delete-trx/${trxId}`);
};
const activateTrxMutation = async (trxId: string) => {
  await api.post(`/admin/approve-trx/${trxId}`);
};

const UserTransactions = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, isLoading, isError, refetch } = useQuery<PendingResponse>({
    queryKey: ["pending-transactions"],
    queryFn: async () => {
      const response = await api.get(`/admin/pending/transactions`);
      return response.data;
    },
  });

  const deleteTrx = useMutation({
    mutationFn: deleteTrxMutation,
    onSuccess: () => {
      queryClient.invalidateQueries();
      Swal.fire("Success!", "Transaction deleted successfully", "success");
    },
    onError: () => {
      Swal.fire("Error!", "Something went wrong", "error");
    },
  });

  const activateTrx = useMutation({
    mutationFn: activateTrxMutation,
    onSuccess: () => {
      queryClient.invalidateQueries();
      Swal.fire("Success!", "Transaction approved successfully", "success");
    },
    onError: () => {
      Swal.fire("Error!", "Failed to approve user", "error");
    },
  });

  if (isLoading) return <p>Loading transactions...</p>;
  if (isError) return <p>No Pending Transactions Found</p>;

  const transactions = data?.pending || [];

  const columns: ColumnDef<Transaction>[] = [
    {
      accessorKey: "type",
      header: "Trx Type",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "method",
      header: "Funding Method",
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
        const trx = row.original;

        const handleDelete = async () => {
          deleteTrx.mutate(trx._id);
        };

        const handleActivate = async () => {
          activateTrx.mutate(trx._id);
        };
        return (
          <>
            <Button onClick={handleActivate} variant="success">
              <CircleCheckBig />
              Approve
            </Button>
            <Button onClick={handleDelete} variant="destructive">
              <Trash2 />
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div className="py-10 sm:py-12 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6">
        Pending Transactions
      </h1>
      <div className="bg-white shadow-md rounded p-6">
        <DataTable data={transactions} columns={columns} refetch={refetch} />
      </div>
      <Button variant="outline" onClick={() => router.back()} className="mt-4">
        Back to Users
      </Button>
    </div>
  );
};

export default UserTransactions;
