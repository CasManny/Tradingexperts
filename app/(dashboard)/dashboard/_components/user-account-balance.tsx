import { useState } from "react";
import { useStore } from "@/lib/store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatBalance } from "@/lib/more";

const UserAccountBalance = ({ onAccountChange }: { onAccountChange: (acctype: string) => void }) => {
  const { data } = useStore();
  const [selectedAccount, setSelectedAccount] = useState<string>("Practice Account");

  const accounts = [
    {
      name: "Practice Account",
      value: data?.user?.practiceBal || 0,
    },
    {
      name: "Real Account",
      value: data?.user?.realBal || 0,
    },
  ];

  const handleAccountChange = (accountName: string) => {
    setSelectedAccount(accountName);
    onAccountChange(accountName === "Practice Account" ? "practice" : "real");
  };

  return (
    <Select value={selectedAccount} onValueChange={handleAccountChange}>
      <SelectTrigger className="w-[250px] bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2">
        <SelectValue placeholder="Select account" />
      </SelectTrigger>
      <SelectContent className="bg-gray-900 text-white border border-gray-700 rounded-lg shadow-lg">
        {accounts.map((account, index) => (
          <SelectItem value={account.name} key={index}>
            <div className="flex justify-between items-center gap-4">
              <p className="font-bold text-green-400">
                {formatBalance(account.value)} {data?.user?.cur?.toUpperCase()}
              </p>
              <p className="uppercase font-semibold">{account.name}</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default UserAccountBalance;
