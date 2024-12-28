import { Globe } from "lucide-react";
import Link from "next/link";


export const AuthNavbar = () => {
  return (
    <div className="p-5 border-b border-1 bg-white">
      <div className="flex justify-between items-center text-black">
        <Link href={"/"} className="text-black">
        <img src='/logo-white.png' width={260} height={80} alt="logon" />
        </Link>
        <div className="flex items-center justify-center size-10 hover:border hover:border-gray-900">
          <Link href={"/dashboard"}>
            <Globe className="text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
};
