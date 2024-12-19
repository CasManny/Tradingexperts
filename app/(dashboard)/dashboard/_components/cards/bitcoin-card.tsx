import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

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

const BitcoinCard = () => {
  return (
    <div className="bg-neutral-900 text-white py-10 px-2">
      <p className="text-pretty">
        Bitcoin is recommended withdrawal method. It provides{" "}
        <span className="font-extrabold">fastest withdrawal with 0 commission</span>.
        To request for withdrawal to bitcoin, please confirm you have bitcoin
        account or create it.
      </p>

      <div className="px-10 my-10 flex gap-16 flex-col md:flex-row">
        <div className="flex flex-col">
          <Button variant={"destructive"} className="w-fit mb-5 font-extrabold">
            I have Bitcoin account
          </Button>
          <div className="flex flex-col gap-1">
            {links.map((link, index) => (
              <Link href={link.href} key={index} className="text-sm underline hover:text-red-500 transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-center mb-12 font-bold text-3xl">Bitcoin Withdrawal</h1>
          <p>
            Please confirm you have a bitcoin account by clicking on "I have
            Bitcoin account" button
          </p>
        </div>
      </div>
    </div>
  );
};

export default BitcoinCard;
