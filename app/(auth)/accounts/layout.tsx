import { PropsWithChildren } from "react";
import { AuthNavbar } from "./_components/auth-navbar";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <section>
      <AuthNavbar />
      <main className="">{children}</main>
    </section>
  );
};

export default AuthLayout;
