"use client";
import { useState } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { TickerTape } from "react-ts-tradingview-widgets";
import { Screener } from "react-ts-tradingview-widgets";
import ChartSettings from "./_components/chart-settings";
import { TradingHistoryDataTable } from "./_components/trading-history/trading-data-table";
import {
  Trading,
  TradingHistorycolumns,
} from "./_components/trading-history/trading-columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrivateRoute from "@/lib/private";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { Pagination } from "@/lib/more";

type PaginatedResponse = {
  data: Trading[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type TradesResponse = {
  message: string;
  practiceTrades: PaginatedResponse;
  realTrades: PaginatedResponse;
};

type Option = {
  name: string;
  assets: string[];
  symbol: string[];
  percent: string;
};

const options: Option[] = [
  {
    name: "Commodities",
    assets: ["Crude oil WTI", "Crude oil Brent", "Gold", "Silver"],
    symbol: ["WTI", "oil", "Gold", "Silver"],
    percent: "60",
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
    percent: "80",
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
    percent: "70",
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
    percent: "70",
  },
  {
    name: "Indices",
    assets: ["DAX", "DJIA", "FTSE 100", "NASDAQ 100", "S&P 500"],
    symbol: ["DAX", "DJIA", "FTSE 100", "NASDAQ 100", "S&P 500"],
    percent: "60",
  },
  {
    name: "Stocks",
    assets: [
      "Amazon.com Inc.",
      "Apple Inc.",
      "Baidu, Inc. ADR",
      "Cisco Systems Inc.",
      "Facebook Inc.",
      "Intel Corporation",
      "Microsoft Corporation",
      "Alphabet Inc.",
    ],
    symbol: [
      "Amazon",
      "Apple",
      "Baidu",
      "Cisco",
      "Facebook",
      "Intel",
      "Microsoft",
      "Alphabet",
    ],
    percent: "70",
  },
];

const DashboardHome = () => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);
  const [selectedAsset, setSelectedAsset] = useState<string>(
    options[0].assets[0]
  );
  const [practicePage, setPracticePage] = useState(1);
  const [realPage, setRealPage] = useState(1);
  const [activeTab, setActiveTab] = useState("practice"); // Track active tab

  const handleOptionChange = (name: string) => {
    const option = options.find((opt) => opt.name === name) || options[0];
    setSelectedOption(option);
    setSelectedAsset(option.assets[0]);
  };

  const handleAssetChange = (asset: string) => {
    setSelectedAsset(asset);
  };

  const getSymbol = () => {
    const assetIndex = selectedOption.assets.indexOf(selectedAsset);
    return selectedOption.symbol[assetIndex] || "";
  };

  // Fetch trades using react-query
  const { data, isLoading, refetch } = useQuery<TradesResponse>({
    queryKey: ["client-trades", activeTab, practicePage, realPage],
    queryFn: async () => {
      const page = activeTab === "practice" ? practicePage : realPage;
      const response = await api.get(`/client/trades?page=${page}`);
      return response.data;
    },
  });

  const practiceTrades = data?.practiceTrades?.data || [];
  const realTrades = data?.realTrades?.data || [];
  const practiceMeta = data?.practiceTrades || {
    total: 0,
    page: 1,
    totalPages: 1,
  };
  const realMeta = data?.realTrades || { total: 0, page: 1, totalPages: 1 };

  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute bg-red-500 text-white p-3">Live Forex:</div>
        <TickerTape
          colorTheme="light"
          showSymbolLogo={false}
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
            colorTheme="light"
            width="100%"
            height={720}
            showToolbar={false}
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
            theme="light"
            width={"100%"}
            height={750}
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
            onTradeMade={refetch} // Pass refetch as a callback
          />
        </div>
      </div>
      <div className="py-20">
        <div className="">
          <h1 className="text-center text-3xl md:text-5xl font-bold">
            Trading History
          </h1>
          <div className="max-w-6xl mx-auto w-full mt-5">
            <Tabs
              defaultValue="practice"
              className="w-full mx-auto my-20"
              onValueChange={(value) => setActiveTab(value)} // Track active tab
            >
              <TabsList className="font-bold">
                <TabsTrigger value="practice" className="">
                  Practice Trades
                </TabsTrigger>
                <TabsTrigger value="real" className="">
                  Real Trades
                </TabsTrigger>
              </TabsList>
              <TabsContent value="practice">
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    <TradingHistoryDataTable
                      columns={TradingHistorycolumns(refetch)}
                      data={practiceTrades}
                      refetch={refetch} // Pass refetch here
                    />
                    <Pagination
                      currentPage={practiceMeta.page}
                      totalPages={practiceMeta.totalPages}
                      onPageChange={setPracticePage}
                    />
                  </>
                )}
              </TabsContent>
              <TabsContent value="real">
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    <TradingHistoryDataTable
                      columns={TradingHistorycolumns(refetch)}
                      data={realTrades}
                      refetch={refetch} // Pass refetch here
                    />
                    <Pagination
                      currentPage={realMeta.page}
                      totalPages={realMeta.totalPages}
                      onPageChange={setRealPage}
                    />
                  </>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoute(DashboardHome, "userToken");
