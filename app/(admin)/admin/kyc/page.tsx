"use client";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import api from "@/lib/api";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../_components/tables/users/data-table";
import { CircleCheckBig } from "lucide-react";

type KYC = {
  _id: string;
  fullName: string;
  idType: string;
  image: string;
};

type KycResponse = {
  users: KYC[];
};

const approveKycMutation = async (userId: string) => {
  await api.post(`/admin/activate/${userId}`);
};

const IDVerification = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, isLoading, isError, refetch } = useQuery<KycResponse>({
    queryKey: ["kyc-details"],
    queryFn: async () => {
      const response = await api.get(`/admin/users-for-approval`);
      return response.data;
    },
  });

  const approveKyc = useMutation({
    mutationFn: approveKycMutation,
    onSuccess: () => {
      queryClient.invalidateQueries();
      Swal.fire("Success!", "Document approved successfully", "success");
    },
    onError: () => {
      Swal.fire("Error!", "Failed to approve user", "error");
    },
  });

  if (isLoading) return <p>Loading transactions...</p>;
  if (isError) return <p>No Pending Verifications Found</p>;

  const kcys = data?.users || [];

  const columns: ColumnDef<KYC>[] = [
    {
      accessorKey: "fullName",
      header: "Name",
    },
    {
      accessorKey: "idType",
      header: "Document Type",
    },
    {
      accessorKey: "image",
      header: "ID Photo",
      cell: ({ row }) => {
        const image = row.original.image;
        return (
          <img
            src={`https://api.wesleyshirley.com/users/assets/images/${image}`}
            width={160}
            height={80}
            alt="doc"
          />
        );
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const user = row.original;

        const handleApproval = async () => {
          approveKyc.mutate(user._id);
        };
        return (
          <>
            <Button onClick={handleApproval} variant="success">
              <CircleCheckBig />
              Approve Kyc
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div className="py-10 sm:py-12 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6">
        Pending KYCs Documents
      </h1>
      <div className="bg-white shadow-md rounded p-6">
        <DataTable data={kcys} columns={columns} refetch={refetch} />
      </div>
      <Button variant="outline" onClick={() => router.back()} className="mt-4">
        Back to Users
      </Button>
    </div>
  );
};

export default IDVerification;
