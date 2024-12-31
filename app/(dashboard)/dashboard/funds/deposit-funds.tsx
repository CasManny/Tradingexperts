"use client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fundingMethods, PaymentType } from "@/data/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useStore } from "@/lib/store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import api from "@/lib/api";
import { formatBalance } from "@/lib/more";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

const DepositFunds = () => {
  const { data, isLoading, isError } = useStore();
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>("Bitcoin");
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [isDepositing, setIsDepositing] = useState(false);
  const router = useRouter();
  const SwalWithReact = withReactContent(Swal);

  const {
    data: walletData,
    isLoading: isWalletLoading,
    isError: isWalletError,
  } = useQuery({
    queryKey: ["wallets"],
    queryFn: async () => {
      const response = await api.get("/wallets/get-all");
      return response.data.wallets;
    },
  });

  const handlePaymentMethod = (value: string) => {
    setPaymentMethod(value);
  };

  const handleAddFundsClick = () => {
    setIsDepositing(true);
  };

  const handleCancel = () => {
    setIsDepositing(false);
  };

  const handlePaymentConfirmation = async () => {
    const selectedWallet = walletData?.[0]; // As there's only one wallet, directly access it

    const payload = {
      amount,
      method: paymentMethod,
      walletAddress: selectedWallet?.[paymentMethod] || "",
    };

    try {
      await api.post("/client/deposit", payload);
      SwalWithReact.fire({
        title: "Transaction Successful",
        text: `Deposit request sent successfully!`,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      }).then(() => {
        router.push("./history?transactions=true");
      });
    } catch (error) {
      console.error("Error sending deposit request:", error);
      SwalWithReact.fire({
        title: "Transaction Failed",
        text: "Failed to send deposit. Please try again.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  const selectedWallet = walletData?.[0]; // Access the first wallet since there's only one
  const walletAddress = selectedWallet
    ? selectedWallet[paymentMethod]
    : "No wallet address available";

  const copyToClipboard = (e: React.MouseEvent) => {
    const inputElement = e.target as HTMLInputElement;
    inputElement.select();
    document.execCommand("copy");
    SwalWithReact.fire({
      title: "Copied to Clipboard",
      text: "Wallet address has been copied!",
      icon: "success",
      timer: 4000,
      showConfirmButton: false,
    });
  };

  if (isLoading || isWalletLoading) return <div>Loading data...</div>;
  if (isError || isWalletError) return <div>Error fetching data.</div>;

  return (
    <div className="p-0 sm:py-0 px-5">
      <div className="w-full">
        <div className="p-2 my-10 rounded font-bold w-full max-w-[500px] bg-neutral-900 text-white">
          <p>
            {formatBalance(data?.user.realBal)} {data?.user.cur}
          </p>
          <p>
            Net Balance: {formatBalance(data?.user.realBal)} {data?.user.cur}
          </p>
        </div>
        <h1 className="text-center mb-4 text-4xl">Choose Funding Method</h1>
      </div>
      <div className="relative p-20 bg-neutral-900 lg:flex hidden justify-evenly text-white w-full">
        <div className="absolute top-0 left-0 p-2 bg-red-500 text-white">
          recommended
        </div>
        {fundingMethods.map((method, index) => (
          <div
            key={index}
            className="flex items-center flex-col gap-2 cursor-pointer"
            onClick={() => handlePaymentMethod(method.name)}
          >
            <img src={method.image} alt={method.name} width={70} height={70} />
            <p
              className={cn(
                paymentMethod === method.name &&
                  "text-red-500 transition-colors duration-300"
              )}
            >
              {method.name}
            </p>
          </div>
        ))}
      </div>
      <div className="lg:hidden">
        <Select onValueChange={(value) => handlePaymentMethod(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="select funding method" />
          </SelectTrigger>
          <SelectContent>
            {fundingMethods.map((method, index) => (
              <SelectItem
                value={method.name}
                key={index}
                className=" cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={method.image}
                    alt={method.name}
                    width={20}
                    height={20}
                  />
                  <p>{method.name}</p>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="my-10">
        <h1 className="text-center text-4xl font-bold">
          Deposit using {paymentMethod}
        </h1>
        <div className="bg-neutral-900 flex gap-5 flex-col mt-10 p-10">
          {isDepositing ? (
            <>
              <p className="text-white text-xl">
                Deposit amount: {amount} {data?.user.cur}
              </p>
              <p className="text-white text-lg mt-2">
                Note: Once payment is complete, click "I have paid" button below
                for confirmation and your trading account will be funded once
                confirmation is complete
              </p>
              <span className="text-white">Send Amount to Wallet Address</span>
              <div className="flex flex-col gap-4 mt-2">
                <Input
                  className="w-full"
                  type="text"
                  value={walletAddress}
                  readOnly
                  onClick={copyToClipboard} // Trigger the copy on click
                />
                <div className="flex justify-evenly">
                  <Button
                    variant="destructive"
                    className="px-5"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="success"
                    className="px-5"
                    onClick={handlePaymentConfirmation}
                  >
                    I Have Paid
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center lg:flex-row flex-col gap-2">
              <p className="text-white font-semibold sm:text-lg">
                Amount in base currency:
              </p>
              <div className="flex items-center gap-1">
                <Input
                  className="w-40"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <p className="text-white font-semibold">{data?.user.cur}</p>
              </div>
              <Button
                variant={"destructive"}
                className="px-14"
                onClick={handleAddFundsClick}
              >
                Add Funds
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepositFunds;
