"use client";
import { fundingMethods, PaymentType } from "@/data/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import BitcoinCard from "../_components/cards/bitcoin-card";
import LiteCoinCard from "../_components/cards/litecoin-card";
import EthereumCard from "../_components/cards/ethereum-card";
import PerfectMoneyCard from "../_components/cards/perfect-money-card";
import BitcoinCashCard from "../_components/cards/bitcoin-cash-card";
import TetherCard from "../_components/cards/tether-card";
import TronCard from "../_components/cards/tron-card";
import BankTransferCard from "../_components/cards/bank-transfer-card";
import NetellerCard from "../_components/cards/neteller-card";
import WesterUnionCard from "../_components/cards/western-union-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WithdrawFunds = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>("Bitcoin");
  const handlePaymentMethod = (value: string) => {
    setPaymentMethod(value);
  };

  const renderPaymentCard = () => {
    switch (paymentMethod) {
      case "Bitcoin":
        return <BitcoinCard />;
      case "Litecoin":
        return <LiteCoinCard />;
      case "Ethereum":
        return <EthereumCard />;
      case "Perfect Money":
        return <PerfectMoneyCard />;
      case "Bitcoin Cash":
        return <BitcoinCashCard />;
      case "Tether":
        return <TetherCard />;
      case "Tron":
        return <TronCard />;
      case "Bank Transfer":
        return <BankTransferCard />;
      case "Neteller":
        return <NetellerCard />;
      case "Western union":
        return <WesterUnionCard />;
      default:
        return null; // or some default component
    }
  };
  return (
    <div className="py-0 sm:py-0 px-5">
      <div className="w-full">
        <div className="p-2 my-10 rounded font-bold w-full max-w-[500px] bg-neutral-900 text-white">
          <p>0.00 USD</p>
          <p>Net Balance: 0.00 USD</p>
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
          Your available balance is: 0.00 USD
        </p>
      </div>
      <div className="relative p-20 bg-neutral-900 justify-between text-white w-full hidden lg:flex">
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
            <SelectValue placeholder="select withdrawal method" />
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
      <div className="mt-5">{renderPaymentCard()}</div>
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
