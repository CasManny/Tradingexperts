"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  CalendarDays,
  ChartColumnIncreasing,
  ChartNoAxesCombined,
  ChartPie,
  TvMinimal,
} from "lucide-react";
import Link from "next/link";

const routes = [
  {
    label: "Economic Calender",
    Icon: CalendarDays,
    href: "/dashboard/calender",
  },
  {
    label: "Technical Analysis",
    Icon: ChartNoAxesCombined,
    href: "/dashboard/technical-analysis",
  },
  {
    label: "News",
    Icon: TvMinimal,
    href: "/dashboard/news",
  },
  {
    label: "Fundamental-analysis",
    Icon: ChartPie,
    href: "/dashboard/fundamental-analysis",
  },
  {
    label: "Charting Tool",
    Icon: ChartColumnIncreasing,
    href: "/dashboard/chart",
  },
];
export const TradingViewDetails = () => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-7">
        {routes.map((route, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              <Link href={route.href}>
                <route.Icon className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="text-xs p-1">{route.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};
