/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;
  role?: string;
}

const PrivateRoute = (WrappedComponent: React.FC, tokenKey: string) => {
  const HOC = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem(tokenKey);

      if (!token) {
        if (tokenKey === "adminToken") {
          router.replace("/admin/sign-in");
        } else {
          router.replace("/accounts/sign-in");
        }
        return;
      }

      try {
        const decoded: DecodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
          localStorage.removeItem(tokenKey);
          router.replace("../");
        }

      } catch (error) {
        console.log("Invalid token:", error);
        localStorage.removeItem(tokenKey);
        router.replace("../");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default PrivateRoute;
