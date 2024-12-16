import { Globe } from "lucide-react";
import Link from "next/link";

export const AuthNavbar = () => {
  return (
    <div className="p-2 border-b border-1">
      <div className="flex justify-between items-center">
        <Link href={"/"}>TradingExpert</Link>
        <div className="flex items-center justify-center size-10 hover:border hover:border-gray-900">
          <Globe className="" />
        </div>
      </div>
    </div>
  );
};
