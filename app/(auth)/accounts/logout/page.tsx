// "use client" ensures this code runs on the client side in Next.js.
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear token from localStorage
    localStorage.removeItem("token");

    // Redirect to login page
    router.push("/accounts/sign-in");
  }, [router]);

  return null; // No UI is displayed, as it's just a redirect action
};

export default Logout;
