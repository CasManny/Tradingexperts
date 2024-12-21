/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = (WrappedComponent: React.FC) => {
  const HOC = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.replace("/accounts/sign-in");
        return;
      }

      try {
        const decoded: { exp: number } = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Current time in seconds

        if (decoded.exp < currentTime) {
          localStorage.removeItem("token"); // Remove expired token
          router.replace("/accounts/sign-in");
        }
      } catch (error) {
        console.log("Invalid token:", error);
        localStorage.removeItem("token"); // Cleanup if the token is corrupt
        router.replace("/accounts/sign-in");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default PrivateRoute;
