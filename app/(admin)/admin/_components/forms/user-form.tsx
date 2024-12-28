import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { type User } from "@/lib/store";

interface FormProps {
  closeModal: (value: boolean) => void;
  userId: string; // Accept userId as a prop
}

type addOrEditProps = {
  formData: any;
  isEdit: boolean;
  userId: string;
}

const addOrEditUser = async (data: addOrEditProps) => {
  const endpoint = data.isEdit ? `/admin/update-user/${data.userId}` : "/auth/signup";
  await api.post(endpoint, data.formData)
};

const Form = ({ closeModal, userId }: FormProps) => {
  const [loading, setLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    address: "",
    dob: "",
    email: "",
    username: "",
    phone: "",
    country: "",
    cur: "",
  });

  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useQuery<User>({
    queryKey: ["existing-user", userId],
    queryFn: async () => {
      if (userId) {
        // Fetch only if userId exists
        const response = await api.get(`/admin/user/${userId}`);
        return response.data;
      }
      return null;
    },
    enabled: Boolean(userId),
  });

  const addEditMutation = useMutation({
    mutationFn: addOrEditUser,
    onSuccess: () => {
      queryClient.invalidateQueries()
      Swal.fire("Success!", "User Edit successfully", "success");
    },
    onError: () => {
      Swal.fire("Error!", "Something went wrong", "error");
    },
  })

  // Update formData when user data is available
  useEffect(() => {
    if (userId && data?.user) {
      setIsEditMode(true);
      const user = data.user;
      setFormData({
        fullName: user.fullName || "",
        password: user.password || "",
        address: user.address || "",
        dob: user.dob
          ? new Date(user.dob).toISOString().split("T")[0] // Format date
          : "",
        email: user.email || "",
        username: user.username || "",
        phone: user.phone || "",
        country: user.country || "",
        cur: user.cur || "",
      });
    } else if (!userId) {
      // Reset form for sign-up mode
      setIsEditMode(false);
    }
  }, [data, userId]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      setLoading(true);
      const data = {formData, isEdit: isEditMode, userId}
      addEditMutation.mutate(data)      
      setLoading(false);
      closeModal(false);
  };

  if (isLoading) return <div>Loading user data...</div>;
  if (isError) return <div>Error fetching user data.</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
        />
      </div>

      {/* Address */}
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
        />
      </div>

      {/* Date of Birth */}
      <div>
        <label
          htmlFor="dob"
          className="block text-sm font-medium text-gray-700"
        >
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="pass"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="text"
          id="pass"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
        />
      </div>

      {/* Username */}
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
        />
      </div>

      {/* Country */}
      <div>
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
        />
      </div>

      {/* Currency */}
      <div>
        <label
          htmlFor="cur"
          className="block text-sm font-medium text-gray-700"
        >
          Currency
        </label>
        <input
          type="text"
          id="cur"
          name="cur"
          value={formData.cur}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 sm:text-sm"
        />
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
            {isEditMode ? "Update" : "Sign Up"}
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
