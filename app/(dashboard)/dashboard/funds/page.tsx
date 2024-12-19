import DashboardPageWrapper from "../_components/dashboard-page-wrapper"
import FundsTabs from "./funds-tab"

const Funds = () => {
  return (
      <DashboardPageWrapper title="Account" className="">
          <FundsTabs />
    </DashboardPageWrapper>
  )
}

export default Funds