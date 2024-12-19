import DashboardPageWrapper from "../_components/dashboard-page-wrapper";
import SettingsTab from "./settings-tab";

const SettingsPage = () => {
  return (
    <DashboardPageWrapper title="Account Settings">
      <SettingsTab />
    </DashboardPageWrapper>
  );
};

export default SettingsPage;
