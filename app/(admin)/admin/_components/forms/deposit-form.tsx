import { useState } from "react";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

interface FormProps {
  closeModal: (value: boolean) => void;
  userId: string;
}

type depositFund = {
  formData: any;
  userId: string;
};

const depositFunds = async (data: depositFund) => {
  await api.post(`/admin/add-fund/${data.userId}`, data.formData);
};

const Form = ({ closeModal, userId }: FormProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    realBal: 0,
  });

  const queryClient = useQueryClient();
  const depositMutation = useMutation({
    mutationFn: depositFunds,
    onSuccess: () => {
      queryClient.invalidateQueries();
      Swal.fire("Success!", "Fund Deposit Successful", "success");
    },
    onError: () => {
      Swal.fire("Error!", "Something went wrong", "error");
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    const data = { formData, userId };
    depositMutation.mutate(data);
    setLoading(false);
    closeModal(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="realBal"
          className="block text-sm font-medium text-gray-700"
        >
          Fund Account
        </label>
        <input
          type="text"
          id="realBal"
          name="realBal"
          value={formData.realBal}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
        />
      </div>

      <div>
      </div>

      {/* Submit Button */}
      <div className="flex">
        <button type="button" onClick={() => closeModal(false)}>
          Cancel
        </button>
        {loading ? (
          <button
            disabled
            type="button"
            className="ml-auto bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submitting...
          </button>
        ) : (
          <button
            type="submit"
            className="ml-auto bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Fund
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
