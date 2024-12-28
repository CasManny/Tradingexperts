"use client";
import DashboardPageWrapper from "../_components/dashboard-page-wrapper";
import { columns, Referral } from "./columns";
import { TradingHistoryDataTable as DataTable } from "../_components/trading-history/trading-data-table";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { Pagination } from "@/lib/more";
import { useState } from "react";
import { useStore } from "@/lib/store";
import PrivateRoute from "@/lib/private";

type ReffResponse = {
  reffs: Referral[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

const ReferralPage = () => {
  const { data: userData, isLoading: isLoadingUser, isError } = useStore();
  const [reffsPage, setReffPage] = useState(1);

  const { data, isLoading, refetch } = useQuery<ReffResponse>({
    queryKey: ["client-reff-history", reffsPage],
    queryFn: async () => {
      const response = await api.get(`/client/reff?page=${reffsPage}`);
      return response.data;
    },
  });

  const referrals = data?.reffs || [];
  const reffMeta = data || { total: 0, page: 1, totalPages: 1 };

  return (
    <DashboardPageWrapper title="My Referrals" className="px-5">
      {isLoadingUser ? (
        <p>Loading User Details...</p>
      ) : (
        <div className="font-semibold text-xl my-5">
          <p className="">Your Referral ID : {userData?.user.username}</p>
          <p className="">
            Your Referral URL : www.wesleyshirley.com?ref=
            {userData?.user.username}
          </p>
        </div>
      )}
      <div className="">
        <h1 className="mb-5 text-3xl font-extrabold">Your Referrals</h1>
        <div className="mx-auto">
          {isLoading ? (
            <div>Loading Referrals...</div>
          ) : (
            <>
              <DataTable columns={columns} data={referrals} refetch={refetch} />
              <Pagination
                currentPage={reffMeta.page}
                totalPages={reffMeta.totalPages}
                onPageChange={setReffPage}
              />
            </>
          )}
        </div>
      </div>
    </DashboardPageWrapper>
  );
};

export default PrivateRoute(ReferralPage, "userToken");
