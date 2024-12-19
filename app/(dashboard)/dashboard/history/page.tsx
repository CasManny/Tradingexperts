import DashboardPageWrapper from "../_components/dashboard-page-wrapper";
import HistoryTabs from "./history-tabs";

const History = () => {
  return (
    <DashboardPageWrapper title="Statement History">
      <HistoryTabs />
    </DashboardPageWrapper>
  );
};

export default History;
