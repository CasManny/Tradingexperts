import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const accounts = [
  {
    name: "Practice Account",
    value: 10000,
  },
  {
    name: "Real Account",
    value: 0.00,
  },
];

const UserAccountBalance = () => {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select account" />
      </SelectTrigger>
      <SelectContent>
        {accounts.map((account, index) => (
            <SelectItem value={account.name} key={index}>
                <div className="flex gap-1">
                    <p className="font-bold">{(account.value).toFixed(2)} USD</p>
                    <p className="uppercase font-bold">{ account.name}</p>
                </div>
            </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default UserAccountBalance;
