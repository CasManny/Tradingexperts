import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { CircleHelp } from "lucide-react";
import UserAccountBalance from "./user-account-balance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import api from "@/lib/api.js";
import { useStore } from "@/lib/store";

const expirationTimeOptions = [
  { label: "30 seconds", value: 30 },
  { label: "1 minute", value: 60 },
  { label: "5 Minutes", value: 300 },
  { label: "15 minutes", value: 900 },
  { label: "30 Minutes", value: 1800 },
  { label: "1 Hour", value: 3600 },
  { label: "5 hours", value: 18000 },
];

type Option = {
  percent: string;
  name: string;
  assets: string[];
};

type ChartSettingsProps = {
  options: Option[];
  selectedOption: Option;
  selectedAsset: string;
  onOptionChange: (name: string) => void;
  onAssetChange: (asset: string) => void;
  onTradeMade?: () => void; // Optional callback
};

const ChartSettings = ({
  options,
  selectedOption,
  selectedAsset,
  onOptionChange,
  onAssetChange,
  onTradeMade,
}: ChartSettingsProps) => {
  const { data, isLoading, isError } = useStore();
  const [amount, setAmount] = useState<number>(0);
  const [selectedExpiration, setSelectedExpiration] = useState<number>(
    expirationTimeOptions[0].value
  );

  const multiplier = parseFloat(selectedOption.percent) / 100;
  const profit = amount * multiplier;
  const total = profit + amount;

  const SwalWithReact = withReactContent(Swal);

  const showConfirmation = async (type: "call" | "put") => {
    const result = await SwalWithReact.fire({
      title: "Confirm Trade",
      text: `Are you sure you want to execute a ${type.toUpperCase()} trade?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, trade!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      handleTrade(type);
    }
  };

  const handleTrade = async (type: "call" | "put") => {
    try {
      const payload = {
        acctype: "real", // Real account hardcoded
        asset: selectedAsset,
        type,
        amount,
        multiplier,
        updateAt: selectedExpiration,
      };
      await api.post("/client/execute-trade", payload);
      SwalWithReact.fire({
        title: "Trade Successful",
        text: `Your ${type.toUpperCase()} trade was executed successfully!`,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });
      if (onTradeMade) onTradeMade();
    } catch (error) {
      SwalWithReact.fire({
        title: "Trade Failed",
        text: "An error occurred while executing your trade. Please try again.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  if (isLoading) return <div>Loading user data...</div>;
  if (isError) return <div>Error fetching user data.</div>;

  return (
    <div className="px-5 w-full">
      <UserAccountBalance /> {/* Removed account type selection */}
      <div className="my-5 flex flex-col gap-5">
        <div>
          <div className="flex items-center gap-2">
            <p>Option type: </p>
            <CircleHelp className="text-neutral-900 size-4" />
          </div>
          <div className="mt-2">
            <Select value={selectedOption.name} onValueChange={onOptionChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={selectedOption.name} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option, index) => (
                  <SelectItem value={option.name} key={index}>
                    <p className="capitalize font-bold">{option.name}</p>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p>Asset type: </p>
            <CircleHelp className="text-neutral-900 size-4" />
          </div>
          <div className="mt-2">
            <Select value={selectedAsset} onValueChange={onAssetChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Crude oil Brent" />
              </SelectTrigger>
              <SelectContent>
                {selectedOption.assets.map((asset) => (
                  <SelectItem value={asset} key={asset}>
                    {asset}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p>Amount: </p>
            <CircleHelp className="text-neutral-900 size-4" />
          </div>
          <div className="mt-2">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p>Expiration Time: </p>
            <CircleHelp className="text-neutral-900 size-4" />
          </div>
          <div className="mt-2">
            <Select
              value={selectedExpiration.toString()}
              onValueChange={(value) => setSelectedExpiration(Number(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="30 seconds" />
              </SelectTrigger>
              <SelectContent>
                {expirationTimeOptions.map((time) => (
                  <SelectItem value={time.value.toString()} key={time.value}>
                    <p className="capitalize">{time.label}</p>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p>Profit </p>
            <CircleHelp className="text-neutral-900 size-4" />
            <p className="text-green-500">
              {profit.toFixed(2)} {data?.user.cur.toUpperCase()}
            </p>
          </div>
        </div>
        <div>
          <div className="text-green-600 font-bold flex gap-1 items-baseline">
            <h1 className="text-5xl">{total.toFixed(2)}</h1>
            <span>{data?.user.cur.toUpperCase()}</span>
          </div>
          <p>
            Commission: <span>0</span> {data?.user.cur.toUpperCase()}
          </p>
        </div>
        <div className="text-white space-y-2 flex flex-col">
          <Button
            className="bg-green-500 p-8"
            onClick={() => showConfirmation("call")}
          >
            CALL
          </Button>
          <Button
            variant={"destructive"}
            className="p-8"
            onClick={() => showConfirmation("put")}
          >
            PUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChartSettings;
