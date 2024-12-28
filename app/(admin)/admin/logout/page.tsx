"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("adminToken");

    router.replace("/admin/sign-in");
  }, [router]);

  return null;
};

export default Logout;
