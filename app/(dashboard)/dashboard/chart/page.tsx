"use client";
import PageWrapper from "@/components/page-wrapper";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const ChartPage = () => {
  return (
    <PageWrapper title="Chart" className="max-w-5xl h-[80vh]">
      <AdvancedRealTimeChart
        theme="light"
        width={"100%"}
        height={"100%"}
        autosize
      ></AdvancedRealTimeChart>
    </PageWrapper>
  );
};

export default ChartPage;
