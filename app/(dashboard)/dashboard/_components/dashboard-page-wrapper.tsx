import { cn } from "@/lib/utils";

interface DashboardPageWrapperProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}
const DashboardPageWrapper = ({
  children,
  title,
  className,
}: DashboardPageWrapperProps) => {
  return (
    <section className={cn("py-10 sm:py-24 w-full",className)}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl text-center font-extrabold text-neutral-900">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
};

export default DashboardPageWrapper;
