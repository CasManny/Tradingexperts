"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fundingMethods, PaymentType } from "@/data/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DepositFunds = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>("Bitcoin");
  const [amount, setAmount] = useState<number>();
  const handlePaymentMethod = (value: string) => {
    setPaymentMethod(value);
  };
  return (
    <div className="p-0 sm:py-0 px-5">
      <div className="w-full">
        <div className="p-2 my-10 rounded font-bold w-full max-w-[500px] bg-neutral-900 text-white">
          <p>0.00 USD</p>
          <p>Net Balance: 0.00 USD</p>
        </div>
        <h1 className="text-center mb-4 text-4xl">Choose Funding Method</h1>
      </div>
      <div className="relative p-20 bg-neutral-900 lg:flex hidden justify-between  text-white w-full">
        <div className="absolute top-0 left-0 p-2 bg-red-500 text-white">
          recommend
        </div>
        {fundingMethods.map((method, index) => (
          <div
            key={index}
            className="flex items-center flex-col gap-2 cursor-pointer"
            onClick={() => handlePaymentMethod(method.name)}
          >
            <Image
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
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="select funding method" />
          </SelectTrigger>
          <SelectContent>
            {fundingMethods.map((method, index) => (
              <SelectItem
                value={method.name}
                key={index}
                className=" cursor-pointer"
                onClick={() => handlePaymentMethod(method.name)}
              >
                <div className="flex items-center gap-2">
                  <Image
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
        <h1 className="text-center text-4xl font-bold">Deposit using {paymentMethod}</h1>
        <div className="bg-neutral-900 flex gap-5 flex-col mt-10 p-10">
          <div className="flex items-center lg:flex-row flex-col gap-2">
            <p className="text-white font-semibold  sm:text-lg">Amount in base currency:</p>
            <div className="flex items-center gap-1">
              <Input
                className="w-28"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <p className="text-white font-semibold">USD</p>
            </div>
          </div>
          <Button variant={"destructive"} className="mx-auto px-10">
            Fund Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepositFunds;
