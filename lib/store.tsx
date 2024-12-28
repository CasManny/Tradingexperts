// context/store.tsx
"use client";

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

type UserInfo = {
  _id: string;
  username: string;
  password: string;
  email: string;
  fullName: string;
  dob: any;
  gender: string;
  accLevel: string;
  reff: string;
  phone: string;
  address: string;
  country: string;
  cur: string;
  realBal: number;
  practiceBal: number;
  status: string;
};
export type User = {
  message: string;
  user: UserInfo;
};

export type StoreContextType = {
  data: User | null;
  isLoading: boolean;
  isError: boolean;
};

// Create the context
const StoreContext = createContext<StoreContextType | undefined>(undefined);

// Fetch user data
const fetchUser = async (): Promise<User> => {
  const { data } = await api.get("/client/user");
  return data;
};

// StoreProvider component
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError } = useQuery<User>({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  return (
    <StoreContext.Provider value={{ data: data || null, isLoading, isError }}>
      {children}
    </StoreContext.Provider>
  );
};

// Hook to use the store
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
