"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "@/lib/store";
import api from "@/lib/api";
import Form from "./user-form";

const Verification = ["Intl Passport", "Personal ID", "Others"];

const AccountDataForm = () => {
  const { data, isLoading, isError } = useStore();
  const [loading, setLoading] = useState(false);
  const [idType, setIdType] = useState<string>("");

  const SwalWithReact = withReactContent(Swal);

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("idType", idType); // Append selected idType here

    try {
      setLoading(true);
      await api.post("/client/upload", formData);
      SwalWithReact.fire({
        title: "Upload Successful",
        text: `ID upload complete.`,
        icon: "success",
        timer: 3000,
        showConfirmButton: false,
      }).then(() => {
        setLoading(false);
      });
    } catch (error: any) {
      setLoading(false);
      console.error("Error uploading file:", error);
      SwalWithReact.fire({
        title: "Upload Failed",
        text: error.response.data.error || "Something went wrong.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  const handleSelectChange = (value: string) => {
    setIdType(value); // Update the idType when a selection is made
  };

  return (
    <section className="w-[500px] mx-auto">
      <h2 className="text-lg font-bold mb-4">Account Information</h2>
      <Form data={data} isError={isError} isLoading={isLoading} />

      <div className="flex items-center justify-center flex-col mt-8">
        <h1 className="text-xl font-bold mb-4">Account Verification</h1>
        {data?.user.status !== "Active" ? (
          <>
            {data?.user.status === "Pending" && (
              <>
                <div className="bg-blue-600 text-white font-bold text-lg py-2 px-4 rounded-lg mb-4">
                  Pending Approval
                </div>
                <p className="mb-2 text-gray-600">
                  Verification is being processed. Please check back later
                </p>
              </>
            )}
            {data?.user.status === "Inactive" && (
              <>
                <div className="bg-red-600 text-white font-bold text-lg py-2 px-4 rounded-lg mb-4">
                  Not Verified
                </div>
                <p className="mb-2 text-gray-600">
                  Account verification usually takes about 30 minutes
                </p>
                <div className="w-full">
                  <p className="mb-2">Choose your ID type</p>
                  <Select value={idType} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Intl Passport" />
                    </SelectTrigger>
                    <SelectContent>
                      {Verification.map((item, index) => (
                        <SelectItem value={item} key={index}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {loading ? (
                  <p className="my-5">File uploading wait...</p>
                ) : (
                  <p className="my-5">Upload file [png, jpg, jpeg] max 10MB</p>
                )}

                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer inline-flex items-center bg-red-600 text-white font-bold text-lg py-2 px-4 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  <ImageIcon className="mr-2" />
                  Browse file to upload
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  accept="image/png, image/jpeg, image/jpg"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleImageUpload(file);
                    }
                  }}
                />
              </>
            )}
          </>
        ) : (
          <div className="bg-green-600 text-white font-bold text-lg py-2 px-4 rounded-lg mb-4">
            Verified
          </div>
        )}
      </div>
    </section>
  );
};

export default AccountDataForm;
