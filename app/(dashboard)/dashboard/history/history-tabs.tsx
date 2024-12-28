"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columnsTransactionHistory, History } from "./columns-transaction-history";
import { TradingHistoryDataTable as DataTable } from "../_components/trading-history/trading-data-table";
import { TradingHistorycolumns } from "../_components/trading-history/trading-columns";
import { TradesResponse } from "../page";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { Pagination } from "@/lib/more";

type TransactionsResponse = {
  transactions: History[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

const HistoryTabs = () => {
  const [transactionsPage, setTransactionsPage] = useState(1);
  const [tradesPage, setTradesPage] = useState(1);

  // Fetch trades using react-query
  const { data: tradesData, isLoading: isLoadingTrades, refetch: refetchTrades } = useQuery<TradesResponse>({
    queryKey: ["client-trade-history", tradesPage],
    queryFn: async () => {
      const response = await api.get(`/client/trades?page=${tradesPage}`);
      return response.data;
    },
  });

  const { data: transactionsData, isLoading: isLoadingTransactions, refetch: refetchTransactions } = useQuery<TransactionsResponse>({
    queryKey: ["client-transaction-history", transactionsPage],
    queryFn: async () => {
      const response = await api.get(`/client/transactions?page=${transactionsPage}`);
      return response.data;
    },
  });

  const realTrades = tradesData?.realTrades.data || [];
  const realMeta = tradesData?.realTrades || { total: 0, page: 1, totalPages: 1 };
  const transactions = transactionsData?.transactions || [];
  const TrxMeta = transactionsData || { total: 0, page: 1, totalPages: 1 };


  return (
    <Tabs defaultValue="history" className="w-full mx-auto my-20">
      <TabsList className="font-bold">
        <TabsTrigger value="history" className="">
          Transactions History
        </TabsTrigger>
        <TabsTrigger value="trade-history" className="">
          Trade History
        </TabsTrigger>
      </TabsList>
      <TabsContent value="history">
        {isLoadingTransactions ? (
          <div>Loading Transactions...</div>
        ) : (
          <>
        <DataTable
          columns={columnsTransactionHistory}
          data={transactions}
          refetch={refetchTransactions} // Pass refetch here
        />
        <Pagination
          currentPage={TrxMeta.page}
          totalPages={TrxMeta.totalPages}
          onPageChange={setTransactionsPage}
        />
          </>
        )}
      </TabsContent>
      <TabsContent value="trade-history">
        {isLoadingTrades ? (
          <div>Loading Trades...</div>
        ) : (
          <>
            <DataTable
              columns={TradingHistorycolumns(refetchTrades)}
              data={realTrades}
              refetch={refetchTrades} // Pass refetch here
            />
            <Pagination
              currentPage={realMeta.page}
              totalPages={realMeta.totalPages}
              onPageChange={setTradesPage}
            />
          </>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default HistoryTabs;
