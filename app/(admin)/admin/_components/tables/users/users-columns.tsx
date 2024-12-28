/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import api from "@/lib/api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatBalance } from "@/lib/more";
import { ColumnDef } from "@tanstack/react-table";
import {
  BadgePlus,
  Ban,
  ChartCandlestick,
  CircleCheckBig,
  Edit,
  FileClock,
  MoreHorizontal,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AddNewUserModal from "../../modals/add-new-user-modal";
import FundModal from "../../modals/fund-modal";
import { useUserContext } from "@/lib/admin-store";
import { useRouter } from "next/navigation";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  _id: string;
  fullName: string;
  password: string;
  email: string;
  realBal: number;
  status: string;
};
const deleteUserMutation = async (userId: string) => {
  await api.delete(`/admin/delete/${userId}`);
};
const activateUserMutation = async (userId: string) => {
  await api.post(`/admin/activate/${userId}`);
};
const suspendUserMutation = async (userId: string) => {
  await api.post(`/admin/suspend/${userId}`);
};

const MySwal = withReactContent(Swal);

export const Usercolumns: ColumnDef<User>[] = [
  {
    accessorKey: "fullName",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("fullName")}</div>
    ),
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "realBal",
    header: "Balance",
    cell: ({ row }) => {
      const balance = row.original.realBal;
      return formatBalance(balance);
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded ${
          row.getValue("status") === "Active"
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
      const user = row.original;
      const [isEditModalOpen, setEditModalOpen] = useState(false);
      const [isFundModalOpen, setFundModalOpen] = useState(false);

      const router = useRouter();
      const queryClient = useQueryClient();
      const { setUserId } = useUserContext();

      const deleteUser = useMutation({
        mutationFn: deleteUserMutation,
        onSuccess: () => {
          queryClient.invalidateQueries();
          Swal.fire("Success!", "User deleted successfully", "success");
        },
        onError: () => {
          Swal.fire("Error!", "Something went wrong", "error");
        },
      });

      const activateUser = useMutation({
        mutationFn: activateUserMutation,
        onSuccess: () => {
          queryClient.invalidateQueries();
          Swal.fire("Success!", "User approved successfully", "success");
        },
        onError: () => {
          Swal.fire("Error!", "Failed to approve user", "error");
        },
      });

      const suspendUser = useMutation({
        mutationFn: suspendUserMutation,
        onSuccess: () => {
          queryClient.invalidateQueries();
          Swal.fire("Success!", "User suspended successfully", "success");
        },
        onError: () => {
          Swal.fire("Error!", "Failed to approve user", "error");
        },
      });

      const handleDelete = async () => {
        const result = await MySwal.fire({
          title: "Are you sure?",
          text: `Do you want to delete user ${user.fullName}?`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "Cancel",
        });

        if (result.isConfirmed) {
          deleteUser.mutate(user._id);
        }
      };

      const handleActivate = async () => {
        activateUser.mutate(user._id);
      };

      const handleSuspend = async () => {
        suspendUser.mutate(user._id);
      };

      const handleViewTrade = () => {
        setUserId(user._id);
        router.push("/admin/trades");
      };

      const handleViewTrx = () => {
        setUserId(user._id);
        router.push("/admin/transactions");
      };

      return (
        <>
          <Button variant="success" onClick={() => setFundModalOpen(true)}>
            <BadgePlus />
            Fund
          </Button>
          <Button variant="default" onClick={() => setEditModalOpen(true)}>
            <Edit />
            Edit
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            <Trash2 />
            Delete
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              {user.status !== "Active" && (
                <DropdownMenuItem asChild>
                  <button
                    onClick={handleActivate}
                    className="flex items-center space-x-2 text-green-600"
                  >
                    <CircleCheckBig />
                    <span>Approve KYC</span>
                  </button>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <button
                  onClick={handleViewTrx}
                  className="flex items-center space-x-2"
                >
                  <FileClock />
                  <span>View Transactions</span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button
                  onClick={handleViewTrade}
                  className="flex items-center space-x-2"
                >
                  <ChartCandlestick />
                  <span>View Trades</span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {user.status !== "Suspended" && (
                <DropdownMenuItem asChild>
                  <button
                    onClick={handleSuspend}
                    className="flex items-center space-x-2 text-red-600"
                  >
                    <Ban />
                    <span>Block User</span>
                  </button>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Edit User Modal */}
          {isEditModalOpen && (
            <AddNewUserModal
              open={isEditModalOpen}
              close={() => setEditModalOpen(false)}
              userId={user._id} // Pass userId to the modal
            />
          )}
          {isFundModalOpen && (
            <FundModal
              open={isFundModalOpen}
              close={() => setFundModalOpen(false)}
              userId={user._id}
            />
          )}
        </>
      );
    },
  },
];
