"use client";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { TickerTape } from "react-ts-tradingview-widgets";
import { Screener } from "react-ts-tradingview-widgets";

const DashboardHome = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="relative">
        <div className="absolute bg-red-500 text-white p-3">Live Forex:</div>
        <TickerTape colorTheme="dark"></TickerTape>
      </div>
      <div className="flex w-full">
        <div className="overflow-auto no-scrollbar">
          <Screener colorTheme="light" width="100%" height={500}></Screener>
        </div>
        <div className="flex-1">
          <AdvancedRealTimeChart
            theme="light"
            width={"100%"}
            height={500}
            autosize
          ></AdvancedRealTimeChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
