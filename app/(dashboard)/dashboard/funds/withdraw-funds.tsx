"use client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { fundingMethods, PaymentType } from "@/data/constants";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { useStore } from "@/lib/store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import api from "@/lib/api";
import { formatBalance } from "@/lib/more";
import { useRouter } from "next/navigation";

const WithdrawFunds = () => {
  const { data, isLoading, isError } = useStore();
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>("Bitcoin");
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [wallet, setWallet] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const SwalWithReact = withReactContent(Swal);

  const handlePaymentMethod = (value: string) => {
    setPaymentMethod(value);
    setShowWithdrawForm(true);
  };

  const handleProceed = () => {
    setShowWithdrawForm(true); // Show the withdrawal form
  };

  const handleWithdraw = async () => {
    const payload = {
      amount,
      walletAddress: wallet,
      method: paymentMethod,
    };

    try {
      setLoading(true);
      const response = await api.post("/client/withdraw", payload);
      SwalWithReact.fire({
        title: "Withdrawal Successful",
        text: `Withdrawal request of ${response.data.withdrawal.amount} submitted successfully.`,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      }).then(() => {
        setLoading(false);
        router.push("./history?transactions=true");
      });
    } catch (error: any) {
      setLoading(false);
      console.error("Error sending deposit request:", error);
      SwalWithReact.fire({
        title: "Trade Failed",
        text: error.response.data.error || "Something went wrong.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  if (isLoading) return <div>Loading user data...</div>;
  if (isError) return <div>Error fetching user data.</div>;

  const links = [
    {
      label: "open a coinbase account",
      href: "https://www.coinbase.com/",
    },
    {
      label: "open a blockchain account",
      href: "https://www.blockchain.com/",
    },
  ];

  return (
    <div className="py-0 sm:py-0 px-5">
      <div className="w-full">
        <div className="p-2 my-10 rounded font-bold w-full max-w-[500px] bg-neutral-900 text-white">
          <p>
            {formatBalance(data?.user.realBal)} {data?.user.cur}
          </p>
          <p>
            Net Balance: {formatBalance(data?.user.realBal)} {data?.user.cur}
          </p>
        </div>
        <h1 className="text-center mb-4 sm:text-4xl text-2xl font-bold">
          Choose Withdrawal Method
        </h1>
        <p>
          <span className="font-extrabold">Important:</span>
          Chosen withdrawal method should correspond with method used for
          deposit.
        </p>
        <p className="font-extrabold text-3xl my-5 text-pretty">
          Your available balance is: {formatBalance(data?.user.realBal)}{" "}
          {data?.user.cur}
        </p>
      </div>
      <div className="relative p-20 bg-neutral-900 justify-between text-white w-full hidden lg:flex">
        <div className="absolute top-0 left-0 p-2 bg-red-500 text-white">
          recommended
        </div>
        {fundingMethods.map((method, index) => (
          <div
            key={index}
            className="flex items-center flex-col gap-2 cursor-pointer"
            onClick={() => handlePaymentMethod(method.name)}
          >
            <img
              src={method.image}
              alt={method.name}
              width={70}
              height={70}
            />
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
        <Select
          onValueChange={(value) => handlePaymentMethod(value)} // Use onValueChange here
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="select withdrawal method" />
          </SelectTrigger>
          <SelectContent>
            {fundingMethods.map((method, index) => (
              <SelectItem
                value={method.name} // Ensure value matches method name
                key={index}
                className="cursor-pointer"
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
      <div className="mt-5 bg-neutral-900 text-white py-2 px-2">
        <p className="text-pretty">
          Bitcoin is recommended withdrawal method. It provides{" "}
          <span className="font-extrabold">
            fastest withdrawal with 0 commission
          </span>
          . To request for withdrawal to bitcoin, please confirm you have
          bitcoin account or create it.
        </p>

        <div className="px-10 my-10 flex gap-16 flex-col md:flex-row">
          {!showWithdrawForm ? (
            <>
              <div className="flex flex-col">
                <Button
                  variant={"destructive"}
                  className="w-fit mb-5 font-extrabold"
                  onClick={handleProceed}
                >
                  I have Bitcoin account
                </Button>
                <div className="flex flex-col gap-1">
                  {links.map((link, index) => (
                    <Link
                      href={link.href}
                      key={index}
                      className="text-sm underline hover:text-red-500 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="text-center mb-12 font-bold text-3xl">
                  Bitcoin Withdrawal
                </h1>
                <p>
                  Please confirm you have a bitcoin account by clicking on "I
                  have Bitcoin account" button
                </p>
              </div>
            </>
          ) : (
            <div className="bg-neutral-900 p-4">
              <p className="text-white my-10">
                To request for withdrawal to{" "}
                <span className="font-extrabold">{paymentMethod} wallet:</span>,
                please make at least one trading deposit by using the selected
                method.
              </p>
              <div>
                <div className="mb-2">
                  <Label htmlFor="amount" className="text-white text-base">
                    Withdrawal amount: {data?.user.cur}
                  </Label>
                  <Input
                    className="text-black"
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="wallet" className="text-white text-base">
                    {paymentMethod} wallet:
                  </Label>
                  <Input
                    className="text-black"
                    type="text"
                    id="wallet"
                    value={wallet}
                    onChange={(e) => setWallet(e.target.value)}
                  />
                  <Button
                    className="mt-2"
                    variant={"destructive"}
                    onClick={handleWithdraw}
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Withdraw Funds"}
                    <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="my-10">
        <p>
          <span className="font-bold">Please note:</span>
          before approving a withdrawal request, you may be required to submit
          proof of identity and address of the requester. Withdrawal fees will
          be applied, based on type of trading account and acceptable withdrawal
          method. Withdrawals are normaly processed, using the same method as
          deposit was done. For security reasons, withdrawal requests to
          ewallets, bank and creditcard accounts, not belonging to a trading
          account owner are denied. Please refer to terms and conditions for
          more information.
        </p>
      </div>
    </div>
  );
};

export default WithdrawFunds;
