import DashboardPageWrapper from "../_components/dashboard-page-wrapper";
import SettingsTab from "./settings-tab";

const SettingsPage = () => {
  return (
    <DashboardPageWrapper title="Account Settings" className="px-5">
      <SettingsTab />
    </DashboardPageWrapper>
  );
};

export default SettingsPage;
