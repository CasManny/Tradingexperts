import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import api from "@/lib/api";
import { StoreContextType } from "@/lib/store";

const Form = ({data, isError, isLoading}: StoreContextType) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    dob: "",
    email: "",
    username: "",
    phone: "",
    country: "",
  });

  // Update formData when user data is available
  useEffect(() => {
    if (data?.user) {
      setFormData({
        fullName: data.user.fullName || "",
        address: data.user.address || "",
        dob: data.user.dob
          ? new Date(data.user.dob).toISOString().split("T")[0] // Format date
          : "",
        email: data.user.email || "",
        username: data.user.username || "",
        phone: data.user.phone || "",
        country: data.user.country || "",
      });
    }
  }, [data]);

  const SwalWithReact = withReactContent(Swal);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      await api.post("/client/update", formData);
      SwalWithReact.fire({
        title: "Update Successful",
        text: `User updated successfully.`,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      }).then(() => {
        setLoading(false);
      });
    } catch (error: any) {
      setLoading(false);
      console.error("Error updating user:", error);
      SwalWithReact.fire({
        title: "Edit Failed",
        text: error.response.data.error || "Something went wrong.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
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
          readOnly
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-100 shadow-sm p-2 sm:text-sm"
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
          readOnly
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-100 shadow-sm p-2 sm:text-sm"
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

      {/* Submit Button */}
      <div className="flex">
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
            Save
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
