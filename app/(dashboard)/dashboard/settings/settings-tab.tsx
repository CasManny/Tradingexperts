"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountDataForm from "./account-data-form";
import SecuritySettingForm from "./security-settings-form";

const SettingsTab = () => {
  return (
    <Tabs defaultValue="personal-data" className="w-full mx-auto my-20">
      <TabsList className="mx-auto flex items-center justify-center">
        <TabsTrigger value="personal-data">Account Data</TabsTrigger>
        <TabsTrigger value="security">Security Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="personal-data">
        <AccountDataForm />
      </TabsContent>
      <TabsContent value="security">
        <SecuritySettingForm />
      </TabsContent>
    </Tabs>
  );
};

export default SettingsTab;
