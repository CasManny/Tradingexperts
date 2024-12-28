"use client";
import PrivateRoute from "@/lib/private";
import DashboardPageWrapper from "../_components/dashboard-page-wrapper";
import FundsTabs from "./funds-tab";

const Funds = () => {
  return (
    <DashboardPageWrapper title="Account" className="">
      <FundsTabs />
    </DashboardPageWrapper>
  );
};

export default PrivateRoute(Funds, "userToken");
