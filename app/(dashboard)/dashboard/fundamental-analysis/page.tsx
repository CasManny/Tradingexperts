'use client'
import PageWrapper from "@/components/page-wrapper";
import { Screener } from "react-ts-tradingview-widgets";

const FundamentalAnalysis = () => {
  return (
    <PageWrapper title="Fundamental Analysis" className="h-[80vh] max-w-5xl">
      <Screener colorTheme="light" width="100%" height={'100%'}></Screener>
    </PageWrapper>
  );
};

export default FundamentalAnalysis;
