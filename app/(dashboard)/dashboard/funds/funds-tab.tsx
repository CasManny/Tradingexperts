import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DepositFunds from "./deposit-funds";
import WithdrawFunds from "./withdraw-funds";

const FundsTabs = () => {
  return (
    <Tabs defaultValue="deposit" className="w-full mt-5">
      <div className="w-full flex items-center justify-center">
        <TabsList className="w-[500px]">
          <TabsTrigger value="deposit">
            Deposit Funds
          </TabsTrigger>
          <TabsTrigger value="withdraw">
            Withdraw Funds
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="deposit">
        <DepositFunds />
      </TabsContent>
      <TabsContent value="withdraw">
        <WithdrawFunds />
      </TabsContent>
    </Tabs>
  );
};

export default FundsTabs;
