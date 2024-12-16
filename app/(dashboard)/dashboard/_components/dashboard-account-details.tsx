import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
    Banknote,
    CalendarSync,
    ChartCandlestick,
    Headphones,
    History,
    Menu,
    UsersRound
} from "lucide-react";

import Link from "next/link";

const DashboardAccountDetails = () => {
  return (
    <div>
      <div className="flex items-center gap-4 uppercase text-sm">
        <Link href={"/dashboard"} className="flex-center">
          <ChartCandlestick className="size-4" />
          Trading
        </Link>
        <div className="">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex-center">
                  <Banknote />
                  Account
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-40">
                  <NavigationMenuLink>
                    <div className="w-[200px] p-5 space-y-2">
                      <Link
                        href={"/dashboard/funding"}
                        className="flex items-center capitalize text-sm"
                      >
                        <Banknote className="mr-1" />
                        Deposite funds
                      </Link>

                      <Link
                        href={"/dashboard/withdrawal"}
                        className="flex items-center capitalize text-sm"
                      >
                        <Banknote className="mr-1" />
                        withdraw funds
                      </Link>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex-center">
                  <Menu className="size-4" />
                  Statements
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-40">
                  <NavigationMenuLink>
                    <div className="w-[200px] p-5 space-y-2">
                      <Link
                        href={"/dashboard/history"}
                        className="flex items-center capitalize text-sm"
                      >
                        <CalendarSync className="mr-1 size-4" />
                        Transaction History
                      </Link>

                      <Link
                        href={"/dashboard/trade-history"}
                        className="flex items-center capitalize text-sm"
                      >
                        <History className="mr-1 size-4" />
                        Trading history
                      </Link>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Link href={"/dashboard/referral"} className="flex-center">
          <UsersRound className="size-4" />
          My referrals
        </Link>
        <Link href={"/dashboard/contack"} className="flex-center">
          <Headphones className="size-4" />
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default DashboardAccountDetails;
