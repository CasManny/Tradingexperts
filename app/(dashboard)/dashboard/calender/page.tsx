"use client"
import PageWrapper from "@/components/page-wrapper";
import { EconomicCalendar } from "react-ts-tradingview-widgets";

const Calender = () => {
    return (
      <PageWrapper title="Calender" className="h-[80vh] max-w-5xl">
          <EconomicCalendar colorTheme="light" height={"100%"} width="100%"></EconomicCalendar>
      </PageWrapper>

  )
}

export default Calender