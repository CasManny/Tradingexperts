"use client";
import React, { useState } from "react";
import { UserDataTable } from "./_components/tables/users/users-data-table";
import { Usercolumns } from "./_components/tables/users/users-columns";
import { Button } from "@/components/ui/button";
import AddNewUserModal from "./_components/modals/add-new-user-modal";

const dummyData = [
  {
    id: "1",
    amount: 1200.5,
    username: "john_doe",
    accountNumber: "123456789",
    password: "password123",
    transactionsMade: 15,
    balance: 500.0,
    status: "active",
    email: "john.doe@example.com",
  },
  {
    id: "2",
    amount: 2500.75,
    username: "jane_smith",
    accountNumber: "987654321",
    password: "securePass456",
    transactionsMade: 8,
    balance: 1200.0,
    status: "inactive",
    email: "jane.smith@example.com",
  },
  {
    id: "3",
    amount: 800.0,
    username: "alice_wonder",
    accountNumber: "112233445",
    password: "wonderAlice789",
    transactionsMade: 20,
    balance: 300.0,
    status: "active",
    email: "alice.wonder@example.com",
  },
  {
    id: "4",
    amount: 4000.0,
    username: "bob_builder",
    accountNumber: "556677889",
    password: "buildIt456",
    transactionsMade: 50,
    balance: 1000.0,
    status: "suspended",
    email: "bob.builder@example.com",
  },
  {
    id: "5",
    amount: 1500.25,
    username: "charlie_brown",
    accountNumber: "998877665",
    password: "brownCharlie123",
    transactionsMade: 5,
    balance: 250.75,
    status: "active",
    email: "charlie.brown@example.com",
  },
];

const AdminHomepage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto relative">
        <h1 className="mb-3 text-3xl sm:text-5xl font-semibold">
          Welcome Admin
        </h1>
        <div className="flex items-center justify-between my-5">
          <p className="text-lg">Manage All Users</p>
          <Button
            className="bg-green-500 text-white font-bold text-xl"
            onClick={() => setOpenModal(true)}
          >
            Add new User
          </Button>
        </div>
        <UserDataTable data={dummyData} columns={Usercolumns} />
      </div>
      <AddNewUserModal open={openModal} close={setOpenModal} />
    </div>
  );
};

export default AdminHomepage;
