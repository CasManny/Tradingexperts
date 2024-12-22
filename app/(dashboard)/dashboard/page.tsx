"use client";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { TickerTape } from "react-ts-tradingview-widgets";
import { Screener } from "react-ts-tradingview-widgets";
import ChartSettings from "./_components/chart-settings";
import { TradingHistoryDataTable } from "./_components/trading-history/trading-data-table";
import { TradingHistorycolumns } from "./_components/trading-history/trading-columns";
import PrivateRoute from "@/lib/private";
import { useState } from "react";

type Option = {
  name: string;
  assets: string[];
  symbol: string[];
};

const options: Option[] = [
  {
    name: "Commodities",
    assets: ["Crude oil WTI", "Crude oil Brent", "Gold", "Silver"],
    symbol: ["WTI", "oil", "Gold", "Silver"],
  },
  {
    name: "Crypto",
    assets: [
      "Bitcoin",
      "Dash",
      "Ethereum",
      "Litecoin",
      "TRON",
      "Bitcoin Cash",
      "Binance Coin",

    ],
    symbol: [
      "Bitcoin",
      "Dash",
      "Ethereum",
      "Litecoin",
      "TRON",
      "Bitcoin Cash",
      "Binance Coin",

    ],
  },
  {
    name: "Digital Options",
    assets: [
      "AUD/CAD",
      "AUD/JPY",
      "EUR/USD",
      "GBP/USD",
      "GBP/JPY",
      "NZD/USD",
      "USD/CHF",
      "USD/XOF",
      "USD/ZAR",
    ],
    symbol: [
      "AUD/CAD",
      "AUD/JPY",
      "EUR/USD",
      "GBP/USD",
      "GBP/JPY",
      "NZD/USD",
      "USD/CHF",
      "USD/XOF",
      "USD/ZAR",
    ],
  },
  {
    name: "Forex",
    assets: [
      "AUD/CAD",
      "AUD/JPY",
      "EUR/GBP",
      "EUR/USD",
      "GBP/USD",
      "GPB/JPY",
      "NZD/USD",
      "USD/CHF",
      "USD/JPY",
    ],
    symbol: [
      "AUD/CAD",
      "AUD/JPY",
      "EUR/GBP",
      "EUR/USD",
      "GBP/USD",
      "GPB/JPY",
      "NZD/USD",
      "USD/CHF",
      "USD/JPY",
    ],
  },
  {
    name: "Indices",
    assets: ["DAX", "DJIA", "FTSE 100", "NASDAQ 100", "S&P 500"],
    symbol: ["DAX", "DJIA", "FTSE 100", "NASDAQ 100", "S&P 500"],
  },
  {
    name: "Stocks",
    assets: [
      "Alphabet Inc.",
      "Amazon.com Inc.",
      "Apple Inc.",
      "Baidu, Inc. ADR",
      "Cisco Systems Inc.",
      "Facebook Inc.",
      "Intel Corporation",
      "Microsoft Corporation",
    ],
    symbol: [
      "Alphabet Inc.",
      "Amazon.com Inc.",
      "Apple Inc.",
      "Baidu, Inc. ADR",
      "Cisco Systems Inc.",
      "Facebook Inc.",
      "Intel Corporation",
      "Microsoft Corporation",
    ],
  },
];

const DashboardHome = () => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [selectedAsset, setSelectedAsset] = useState<string>(
    options[0].assets[0]
  );

  const handleOptionChange = (name: string) => {
    const option = options.find((opt) => opt.name === name) || options[0];
    setSelectedOption(option);
    setSelectedAsset(option.assets[0]); // Automatically select the first asset
  };

  const handleAssetChange = (asset: string) => {
    setSelectedAsset(asset);
  };

  const getSymbol = () => {
    const assetIndex = selectedOption.assets.indexOf(selectedAsset);
    return selectedOption.symbol[assetIndex] || "";
  };

  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute bg-red-500 text-white p-3">Live Forex:</div>
        <TickerTape
          colorTheme="dark"
          displayMode="regular"
          copyrightStyles={{
            parent: {
              display: "none",
            },
          }}
        ></TickerTape>
      </div>
      <div className="flex flex-col lg:flex-row mt-5">
        <div className="overflow-auto no-scrollbar hidden lg:flex">
          <Screener
            colorTheme="dark"
            width="100%"
            height={600}
            copyrightStyles={{
              parent: {
                display: "none",
              },
            }}
          ></Screener>
        </div>
        <div className="flex-1 mb-10">
          <AdvancedRealTimeChart
            copyrightStyles={{
              parent: {
                display: "none",
              },
            }}
            theme="dark"
            width={"100%"}
            height={650}
            allow_symbol_change
            symbol={getSymbol()} // symbol="BLACKBULL:BRENT" -> initial symbol
            studies={["MACD@tv-basicstudies"]}
          ></AdvancedRealTimeChart>
        </div>
        <div className="">
          <ChartSettings
            options={options}
            selectedOption={selectedOption}
            selectedAsset={selectedAsset}
            onOptionChange={handleOptionChange}
            onAssetChange={handleAssetChange}
          />
        </div>
      </div>
      <div className="py-20">
        <div className="">
          <h1 className="text-center text-3xl md:text-5xl font-bold">
            Real Trading History
          </h1>
          <div className="max-w-6xl mx-auto w-full mt-5">
            <TradingHistoryDataTable
              columns={TradingHistorycolumns}
              data={[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// export default PrivateRoute(DashboardHome);

export default DashboardHome;
