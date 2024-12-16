"use client";
import PageWrapper from "@/components/page-wrapper";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

const TechnicalAnalysisData = () => {
  return (
    <PageWrapper title="Technical Analysis" className="max-w-5xl">
      <TechnicalAnalysis colorTheme="light" width="100%"></TechnicalAnalysis>
    </PageWrapper>
  );
};

export default TechnicalAnalysisData;
