"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const WesterUnionCard = () => {
  const [amount, setAmount] = useState<number>();
    const [recieverName, setRecieverName] = useState("");
    const [recieverAddress, setRecieverAddress] = useState("")
  return (
    <div className="bg-neutral-900 p-4">
      <p className="text-white my-10">
        To request for withdrawal via{" "}
        <span className="font-extrabold">Western Union</span>please make at
        least one trading deposit by using selected method.
      </p>
      <div className="">
        <div className="mb-2">
          <Label htmlFor="amount" className="text-white text-base">
            Withdrawal amount: USD
          </Label>
          <Input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="">
          <Label htmlFor="name" className="text-white text-base">
            Receiver's Name:
          </Label>
          <Input
            type="text"
            id="name"
            value={recieverName}
            onChange={(e) => setRecieverName(e.target.value)}
          />
        </div>
        <div className="">
          <Label htmlFor="address" className="text-white text-base">
          Receiver's Address:
          </Label>
          <Input
            type="text"
            id="address"
            value={recieverAddress}
            onChange={(e) => setRecieverAddress(e.target.value)}
          />
        </div>
        <Button className="mt-2" variant={"destructive"}>
          Next
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default WesterUnionCard;
