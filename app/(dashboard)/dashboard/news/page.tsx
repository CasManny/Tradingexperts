"use client";
import PageWrapper from "@/components/page-wrapper";
import React from "react";
import { Timeline } from "react-ts-tradingview-widgets";

const News = () => {
  return (
    <PageWrapper title="News" className="max-w-5xl h-[80vh]">
      <Timeline
        colorTheme="light"
        feedMode="market"
        market="crypto"
        height={"100%"}
        width="100%"
      ></Timeline>
    </PageWrapper>
  );
};

export default News;
