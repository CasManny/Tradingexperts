"use client";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

interface WalletFormProps {
  closeModal: (value: boolean) => void; // Accept the closeModal function as a prop
}

const WalletForm = ({ closeModal }: WalletFormProps) => {
  const [walletData, setWalletData] = useState({
    Bitcoin: "",
    Ethereum: "",
    Tether: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const SwalWithReact = withReactContent(Swal);

  // Fetch the existing wallet data
  const {
    data: walletDataFromServer,
    isLoading: isWalletLoading,
    isError: isWalletError,
  } = useQuery({
    queryKey: ["wallets"],
    queryFn: async () => {
      const response = await api.get("/wallets/get-all");
      return response.data.wallets;
    },
  });

  useEffect(() => {
    if (walletDataFromServer && walletDataFromServer.length > 0) {
      const existingWallet = walletDataFromServer[0];
      setWalletData({
        Bitcoin: existingWallet.Bitcoin,
        Ethereum: existingWallet.Ethereum,
        Tether: existingWallet.Tether,
      });
    }
  }, [walletDataFromServer]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWalletData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { ...walletData };

    try {
      setIsSubmitting(true);
      await api.put("/wallets/add-update", payload);

      SwalWithReact.fire({
        title: "Success!",
        text: "Wallet data updated successfully!",
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      });

      // Close the modal after successful submission
      closeModal(false);
      setWalletData({ Bitcoin: "", Ethereum: "", Tether: "" });
    } catch (error) {
      console.error("Error submitting wallet data:", error);
      SwalWithReact.fire({
        title: "Error!",
        text: "Failed to update wallet data. Please try again.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isWalletLoading) return <p>Loading...</p>;
  if (isWalletError) return <p>Error loading wallet data.</p>;

  return (
    <div className="p-5">
      <h1 className="text-center text-2xl font-bold mb-4">Update Wallet</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="bitcoin"
            className="block text-sm font-medium text-gray-700"
          >
            Bitcoin Address
          </label>
          <Input
            type="text"
            id="bitcoin"
            name="Bitcoin"
            value={walletData.Bitcoin}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="ethereum"
            className="block text-sm font-medium text-gray-700"
          >
            Ethereum Address
          </label>
          <Input
            type="text"
            id="ethereum"
            name="Ethereum"
            value={walletData.Ethereum}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="tether"
            className="block text-sm font-medium text-gray-700"
          >
            Tether Address
          </label>
          <Input
            type="text"
            id="tether"
            name="Tether"
            value={walletData.Tether}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default WalletForm;
