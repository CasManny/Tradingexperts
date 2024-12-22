import React from "react";
import UserAccountBalance from "./user-account-balance";
import { CircleHelp } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const optionsType = [
  "commodities",
  "crypto",
  "Digital options",
  "forex",
  "Indices",
  "stocks",
];
const assetType = ["Crude oil Bent", "crude oil WTI", "Gold", "Silver"];
const expirationTime = [
  "30 seconds",
  "1 minute",
  "5 Minutes",
  "15 minutes",
  "30 Minutes",
  "1 Hour",
  "5 hours",
];

type Option = {
  name: string;
  assets: string[];
};

type ChartSettingsProps = {
  options: Option[];
  selectedOption: Option;
  selectedAsset: string;
  onOptionChange: (name: string) => void;
  onAssetChange: (asset: string) => void;
};

const ChartSettings = ({
  options,
  selectedOption,
  selectedAsset,
  onOptionChange,
  onAssetChange,
}: ChartSettingsProps) => {
  return (
    <div className="px-5 w-full">
      <UserAccountBalance />
      <div className="my-5 flex flex-col gap-5">
        <div className="">
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
        <div className="">
          <div className="flex items-center gap-2">
            <p>Asset type: </p>
            <CircleHelp className="text-neutral-900 size-4" />
          </div>
          <div className="mt-2">
            <Select value={selectedAsset} onValueChange={onAssetChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Crude oil Bent" />
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
        <div className="">
          <div className="flex items-center gap-2">
            <p>Amount: </p>
            <CircleHelp className="text-neutral-900 size-4" />
          </div>
          <div className="mt-2">
            <Input type="number" className="" />
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <p>Expiration Time: </p>
            <CircleHelp className="text-neutral-900 size-4" />
          </div>
          <div className="mt-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="30 seconds" />
              </SelectTrigger>
              <SelectContent>
                {expirationTime.map((time, index) => (
                  <SelectItem value={time} key={index}>
                    <p className="capitalize">{time}</p>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <p>Profit </p>
            <CircleHelp className="text-neutral-900 size-4" />
            <p className="text-green-500">80%</p>
          </div>
        </div>
        <div className="">
          <div className="text-green-600 font-bold flex gap-1 items-baseline">
            <h1 className="text-5xl">18.00</h1>
            <span>USD</span>
          </div>
          <p>
            Commission: <span>0</span> USD
          </p>
        </div>
        <div className="text-white space-y-2 flex flex-col">
          <Button className="bg-green-500 p-8">CALL</Button>
          <Button variant={"destructive"} className="p-8">
            PUT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChartSettings;
