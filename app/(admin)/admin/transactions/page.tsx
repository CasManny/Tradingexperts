import { AllTransactionsColumns } from "../_components/tables/transactions/all-transactions-column";
import { AllTransactionsDataTable } from "../_components/tables/transactions/all-transactions-data-table";

const transactions = [
  {
    id: "1",
    amount: 250.5,
    timestamp: "2024-12-01 10:00:00",
    stock: "AAPL",
    status: "approved",
  },
  {
    id: "2",
    amount: 500.0,
    timestamp: "2024-12-01 11:30:45",
    stock: "TSLA",
    status: "pending",
  },
  {
    id: "3",
    amount: 350.0,
    timestamp: "2024-12-01 14:45:20",
    stock: "MSFT",
    status: "declined",
  },
  {
    id: "4",
    amount: 750.0,
    timestamp: "2024-12-02 08:15:00",
    stock: "AMZN",
    status: "approved",
  },
  {
    id: "5",
    amount: 120.0,
    timestamp: "2024-12-02 09:20:30",
    stock: "GOOG",
    status: "pending",
  },
  {
    id: "6",
    amount: 650.0,
    timestamp: "2024-12-02 10:45:00",
    stock: "FB",
    status: "approved",
  },
  {
    id: "7",
    amount: 80.0,
    timestamp: "2024-12-02 13:25:15",
    stock: "NFLX",
    status: "declined",
  },
  {
    id: "8",
    amount: 430.0,
    timestamp: "2024-12-03 09:00:00",
    stock: "NVDA",
    status: "approved",
  },
  {
    id: "9",
    amount: 1000.0,
    timestamp: "2024-12-03 12:10:45",
    stock: "TSLA",
    status: "pending",
  },
  {
    id: "10",
    amount: 90.0,
    timestamp: "2024-12-03 15:30:30",
    stock: "AAPL",
    status: "declined",
  },
  {
    id: "11",
    amount: 275.0,
    timestamp: "2024-12-04 10:00:00",
    stock: "GOOG",
    status: "approved",
  },
  {
    id: "12",
    amount: 540.0,
    timestamp: "2024-12-04 12:45:00",
    stock: "AMZN",
    status: "pending",
  },
  {
    id: "13",
    amount: 320.0,
    timestamp: "2024-12-04 15:20:15",
    stock: "MSFT",
    status: "approved",
  },
  {
    id: "14",
    amount: 680.0,
    timestamp: "2024-12-05 09:00:00",
    stock: "NFLX",
    status: "declined",
  },
  {
    id: "15",
    amount: 980.0,
    timestamp: "2024-12-05 11:30:45",
    stock: "FB",
    status: "pending",
  },
  {
    id: "16",
    amount: 410.0,
    timestamp: "2024-12-05 14:45:20",
    stock: "NVDA",
    status: "approved",
  },
  {
    id: "17",
    amount: 195.0,
    timestamp: "2024-12-06 08:15:00",
    stock: "TSLA",
    status: "declined",
  },
  {
    id: "18",
    amount: 305.0,
    timestamp: "2024-12-06 09:20:30",
    stock: "AAPL",
    status: "approved",
  },
  {
    id: "19",
    amount: 725.0,
    timestamp: "2024-12-06 10:45:00",
    stock: "GOOG",
    status: "pending",
  },
  {
    id: "20",
    amount: 850.0,
    timestamp: "2024-12-06 13:25:15",
    stock: "AMZN",
    status: "declined",
  },
  {
    id: "1",
    amount: 582.71,
    timestamp: "2024-12-01 19:55:00",
    stock: "GOOG",
    status: "approved",
  },
  {
    id: "2",
    amount: 159.15,
    timestamp: "2024-12-02 10:52:00",
    stock: "AAPL",
    status: "pending",
  },
  {
    id: "3",
    amount: 249.89,
    timestamp: "2024-12-01 10:01:00",
    stock: "FB",
    status: "declined",
  },
  {
    id: "4",
    amount: 727.98,
    timestamp: "2024-12-03 15:40:00",
    stock: "FB",
    status: "declined",
  },
  {
    id: "5",
    amount: 109.58,
    timestamp: "2024-12-03 11:32:00",
    stock: "NFLX",
    status: "approved",
  },
  {
    id: "6",
    amount: 798.72,
    timestamp: "2024-12-01 12:47:00",
    stock: "MSFT",
    status: "approved",
  },
  {
    id: "7",
    amount: 139.5,
    timestamp: "2024-12-01 18:29:00",
    stock: "GOOG",
    status: "approved",
  },
  {
    id: "8",
    amount: 924.46,
    timestamp: "2024-12-01 12:19:00",
    stock: "GOOG",
    status: "approved",
  },
  {
    id: "9",
    amount: 631.72,
    timestamp: "2024-12-03 03:42:00",
    stock: "TSLA",
    status: "declined",
  },
  {
    id: "10",
    amount: 678.31,
    timestamp: "2024-12-01 17:19:00",
    stock: "NFLX",
    status: "pending",
  },
  {
    id: "11",
    amount: 115.08,
    timestamp: "2024-12-03 07:38:00",
    stock: "TSLA",
    status: "approved",
  },
  {
    id: "12",
    amount: 542.53,
    timestamp: "2024-12-04 03:22:00",
    stock: "TSLA",
    status: "pending",
  },
  {
    id: "13",
    amount: 151.84,
    timestamp: "2024-12-04 00:23:00",
    stock: "TSLA",
    status: "pending",
  },
  {
    id: "14",
    amount: 101.65,
    timestamp: "2024-12-01 12:44:00",
    stock: "FB",
    status: "pending",
  },
  {
    id: "15",
    amount: 462.72,
    timestamp: "2024-12-02 05:34:00",
    stock: "AAPL",
    status: "approved",
  },
  {
    id: "16",
    amount: 110.24,
    timestamp: "2024-12-02 04:07:00",
    stock: "NFLX",
    status: "declined",
  },
  {
    id: "17",
    amount: 487.08,
    timestamp: "2024-12-03 12:39:00",
    stock: "NVDA",
    status: "approved",
  },
  {
    id: "18",
    amount: 530.12,
    timestamp: "2024-12-02 15:59:00",
    stock: "GOOG",
    status: "declined",
  },
  {
    id: "19",
    amount: 627.53,
    timestamp: "2024-12-01 22:35:00",
    stock: "NFLX",
    status: "declined",
  },
  {
    id: "20",
    amount: 166.58,
    timestamp: "2024-12-01 19:56:00",
    stock: "NFLX",
    status: "pending",
  },
];

const TransactionsHome = () => {
  return (
    <div className="py-10 sm:py-12">
      <div className="max-w-7xl relative mx-auto">
        <h1 className="my-10 text-2xl sm:text-4xl">
          All TradingExpert Transactions
        </h1>

        <AllTransactionsDataTable
          columns={AllTransactionsColumns}
          data={transactions}
        />
      </div>
    </div>
  );
};

export default TransactionsHome;
