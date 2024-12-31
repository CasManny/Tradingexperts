"use client";
import React, { useState } from "react";
import { TradingHistoryDataTable } from "../../(dashboard)/dashboard/_components/trading-history/trading-data-table";
import { User, Usercolumns } from "./_components/tables/users/users-columns";
import { Button } from "@/components/ui/button";
import AddNewUserModal from "./_components/modals/add-new-user-modal";
import PrivateRoute from "@/lib/private";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { Pagination } from "@/lib/more";
import FundModal from "./_components/modals/wallet-modal"; // Assuming this is the path to your WalletModal

type UsersResponse = {
  users: User[];
  totalUsers: number;
  currentPage: number;
  totalPages: number;
};

const AdminHomepage = () => {
  const [usersPage, setUsersPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [openWalletModal, setOpenWalletModal] = useState(false); // Added state for WalletModal

  // Fetch trades using react-query
  const { data, isLoading, refetch } = useQuery<UsersResponse>({
    queryKey: ["user-list", usersPage],
    queryFn: async () => {
      const response = await api.get(`/admin/users?page=${usersPage}`);
      return response.data;
    },
  });

  const users = data?.users || [];
  const userMeta = data || { totalUsers: 0, currentPage: 1, totalPages: 1 };

  return (
    <div className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto relative">
        <h1 className="mb-3 text-3xl sm:text-5xl font-semibold">
          Welcome Admin
        </h1>
        <div className="flex items-center justify-between my-5">
          <p className="text-lg">Manage All Users</p>
          <div className="flex space-x-3">
            <Button
              className="bg-green-500 text-white font-bold text-xl"
              onClick={() => setOpenModal(true)}
            >
              Add new User
            </Button>
            <Button
              className="bg-blue-500 text-white font-bold text-xl"
              onClick={() => setOpenWalletModal(true)} // Open WalletModal on click
            >
              Manage Wallets
            </Button>
          </div>
        </div>
        <TradingHistoryDataTable
          data={users}
          columns={Usercolumns}
          refetch={refetch}
        />
        <Pagination
          currentPage={userMeta.currentPage}
          totalPages={userMeta.totalPages}
          onPageChange={setUsersPage}
        />
      </div>
      {/* Modals */}
      <AddNewUserModal open={openModal} close={setOpenModal} userId="" />
      <FundModal open={openWalletModal} close={setOpenWalletModal} /> {/* Added WalletModal */}
    </div>
  );
};

export default PrivateRoute(AdminHomepage, "adminToken");
