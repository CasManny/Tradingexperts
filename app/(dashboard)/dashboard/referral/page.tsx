import DashboardPageWrapper from "../_components/dashboard-page-wrapper";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const ReferralPage = () => {
  return (
    <DashboardPageWrapper title="My Referrals">
      <div className="font-semibold text-xl my-5">
        <p className="">Your Referral ID : sabastine</p>
        <p className="">
          Your Referral URL : www.tradingexperts.com?ref=sabastine
        </p>
      </div>
      <div className="">
        <h1 className="mb-5 text-3xl font-extrabold">Your Referrals</h1>
        <div className="mx-auto">
          <DataTable columns={columns} data={[]} />
        </div>
      </div>
    </DashboardPageWrapper>
  );
};

export default ReferralPage;
