"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTableTransactionHistory } from "./data-table-transaction-history";
import { columnsTransactionHistory } from "./columns-transaction-history";
import { DataTableTradeHistory } from "./data-table-trade-history";
import { columnsTradeHistory } from "./columns-trade-history";

const HistoryTabs = () => {
  return (
    <Tabs defaultValue="history" className="w-full mx-auto my-20">
      <TabsList className="font-bold">
        <TabsTrigger value="history" className="">Transactions History</TabsTrigger>
        <TabsTrigger value="trade-history" className="">Trade History</TabsTrigger>
      </TabsList>
      <TabsContent value="history">
        <DataTableTransactionHistory
          columns={columnsTransactionHistory}
          data={[]}
        />
      </TabsContent>
      <TabsContent value="trade-history">
        <DataTableTradeHistory columns={columnsTradeHistory} data={[]} />
      </TabsContent>
    </Tabs>
  );
};

export default HistoryTabs;
