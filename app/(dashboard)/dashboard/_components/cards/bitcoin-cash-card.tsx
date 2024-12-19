"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const BitcoinCashCard = () => {
  const [amount, setAmount] = useState<number>();
  const [wallet, setWallet] = useState("");
  return (
    <div className="bg-neutral-900 p-4">
      <p className="text-white my-10">
        To request for withdrawal to <span className="font-extrabold">Bitcoin Cash wallet:</span> , please make at least one
        trading deposit by using selected method.
      </p>
      <div className="">
        <div className="mb-2">
          <Label htmlFor="amount" className="text-white text-base">Withdrawal amount: USD</Label>
          <Input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="">
          <Label htmlFor="wallet" className="text-white text-base">Bitcoin Cash wallet:</Label>
          <Input
            type="number"
            id="wallet"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
          />
          <Button className="mt-2" variant={"destructive"}>
            Next
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BitcoinCashCard;
