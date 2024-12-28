import React from "react";
import { SignUpCard } from "../_components/sign-up-card";

const SignUppage = () => {
  return (
    <div className="p-5">
      <h1 className="text-center text-white py-5 text-2xl text-pretty tracking-wide sm:text-4xl font-bold">
        Welcome to Welcome to Wesley Shirley Christian
      </h1>
      <div className="relative">
        <div className="absolute" />
        <div className="relative">
          <div className="flex justify-center items-center">
            <SignUpCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUppage;
