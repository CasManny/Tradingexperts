import { UserTransactionsColumns } from "../../../_components/tables/transactions/user-transactions-column";
import { UserTransactionsDataTable } from "../../../_components/tables/transactions/user-transactions-data-table";

interface UserTransactionsProps {
  params: {
    userId: string;
  };
}

// dummy data
export const transactions = [
    { id: "1", amount: 250.5, timestamp: "2024-12-01 10:00:00", stock: "AAPL", status: "approved" },
    { id: "2", amount: 500.0, timestamp: "2024-12-01 11:30:45", stock: "TSLA", status: "pending" },
    { id: "3", amount: 350.0, timestamp: "2024-12-01 14:45:20", stock: "MSFT", status: "declined" },
    { id: "4", amount: 750.0, timestamp: "2024-12-02 08:15:00", stock: "AMZN", status: "approved" },
    { id: "5", amount: 120.0, timestamp: "2024-12-02 09:20:30", stock: "GOOG", status: "pending" },
    { id: "6", amount: 650.0, timestamp: "2024-12-02 10:45:00", stock: "FB", status: "approved" },
    { id: "7", amount: 80.0, timestamp: "2024-12-02 13:25:15", stock: "NFLX", status: "declined" },
    { id: "8", amount: 430.0, timestamp: "2024-12-03 09:00:00", stock: "NVDA", status: "approved" },
    { id: "9", amount: 1000.0, timestamp: "2024-12-03 12:10:45", stock: "TSLA", status: "pending" },
    { id: "10", amount: 90.0, timestamp: "2024-12-03 15:30:30", stock: "AAPL", status: "declined" },
    { id: "11", amount: 275.0, timestamp: "2024-12-04 10:00:00", stock: "GOOG", status: "approved" },
    { id: "12", amount: 540.0, timestamp: "2024-12-04 12:45:00", stock: "AMZN", status: "pending" },
    { id: "13", amount: 320.0, timestamp: "2024-12-04 15:20:15", stock: "MSFT", status: "approved" },
    { id: "14", amount: 680.0, timestamp: "2024-12-05 09:00:00", stock: "NFLX", status: "declined" },
    { id: "15", amount: 980.0, timestamp: "2024-12-05 11:30:45", stock: "FB", status: "pending" },
    { id: "16", amount: 410.0, timestamp: "2024-12-05 14:45:20", stock: "NVDA", status: "approved" },
    { id: "17", amount: 195.0, timestamp: "2024-12-06 08:15:00", stock: "TSLA", status: "declined" },
    { id: "18", amount: 305.0, timestamp: "2024-12-06 09:20:30", stock: "AAPL", status: "approved" },
    { id: "19", amount: 725.0, timestamp: "2024-12-06 10:45:00", stock: "GOOG", status: "pending" },
    { id: "20", amount: 850.0, timestamp: "2024-12-06 13:25:15", stock: "AMZN", status: "declined" },
  ];
  

const UserTransactions = async ({ params }: UserTransactionsProps) => {
  // get the userid from the url => params
  const userId = (await params).userId;
  return (
    <div className="py-10 sm:py-12">
      <div className="max-w-7xl relative mx-auto">
        <h1 className="my-10 text-2xl sm:text-4xl">
          This transactions belong to <span>{userId}</span>
        </h1>

        <UserTransactionsDataTable
          columns={UserTransactionsColumns}
          data={transactions}
        />
      </div>
    </div>
  );
};

export default UserTransactions;
