"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { useGetUserId } from "../../_components/hooks/use-get-userId";
import { useConfirm } from "../../_components/hooks/use-confirm-modal";

const UserPage = () => {
  const userId = useGetUserId();
  const [DeleteModal, handleDelete] = useConfirm({
    title: "Delete User",
    message: "Are you sure you want to Delete this user",
    variant: "destructive",
  });
  const [BlockModal, handleBlock] = useConfirm({
    title: "Block User",
    message: "Are you sure you want to block this User",
    variant: "destructive",
  });
  return (
    <div className="py-12 sm:py-24">
      <BlockModal />
      <DeleteModal />
      <div className="max-w-5xl bg-brand-1/20 mx-auto">
        <Card>
          <div className="p-5 flex flex-col gap-3">
            <p className="text-2xl font-bold">
              userId:{" "}
              <span className="font-extrabold">DMDJIYHNSsyidkndjh45jdh</span>
            </p>
            <p className="text-2xl font-bold">
              UserName: <span className="font-extrabold">John Doe</span>
            </p>
            <div className="flex items-center justify-between">
              <p className="font-bold text-2xl sm:text-3xl">
                Total Transactions: <span>67</span>
              </p>
              <Button asChild className="bg-green-500 text-white p-5">
                <Link href={`/admin/users/${userId}/transactions/`}>
                  <p className="text-2xl">View all Transaction</p>
                </Link>
              </Button>
            </div>
            <p className="text-2xl font-bold">
              Balance: <span className="font-extrabold">$50</span>
            </p>
          </div>
        </Card>
        <div className="mt-10 border p-5 shadow-lg rounded-lg bg-brand-1/10">
          <h1 className="font-extrabold text-5xl">Danger Zone</h1>
          <p className="text-lg font-semibold">
            Irreversible and destructive actions
          </p>
          <div className="border border-red-500 p-5 rounded-2xl mt-10">
            <p className="text-xl font-bold">Confirm before proceeding</p>
            <p className="my-8">Actions here cannot be reversed</p>
            <div className="flex gap-4">
              <Button
                className="p-5 text-xl"
                variant={"destructive"}
                onClick={() => handleDelete()}
              >
                Delete User
              </Button>
              <Button
                className="p-5 text-xl"
                variant={"destructive"}
                onClick={() => handleBlock()}
              >
                Block User
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
