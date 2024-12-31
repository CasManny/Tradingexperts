import { useStore } from "@/lib/store";
import { formatBalance } from "@/lib/more";

const UserAccountBalance = () => {
  const { data } = useStore();

  return (
    <div className="w-[250px] bg-gray-800 text-white border border-gray-600 rounded-lg px-4 py-2">
      <div className="flex flex-col items-start gap-2">
        <p className="font-bold text-green-400">
          {formatBalance(data?.user?.realBal || 0)} {data?.user?.cur?.toUpperCase()}
        </p>
        <p className="capitalize font-semibold">Account Balance</p>
      </div>
    </div>
  );
};

export default UserAccountBalance;
