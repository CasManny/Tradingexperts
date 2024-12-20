"use client";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { TickerTape } from "react-ts-tradingview-widgets";
import { Screener } from "react-ts-tradingview-widgets";
import ChartSettings from "./_components/chart-settings";
import { TradingHistoryDataTable } from "./_components/trading-history/trading-data-table";
import { TradingHistorycolumns } from "./_components/trading-history/trading-columns";

const DashboardHome = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute bg-red-500 text-white p-3">Live Forex:</div>
        <TickerTape
          colorTheme="light"
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
            height={500}
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
            height={800}
            autosize
          ></AdvancedRealTimeChart>
        </div>
        <div className="">
          <ChartSettings />
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

export default DashboardHome;
