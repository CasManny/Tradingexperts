import React from "react";
import SignInCard from "../_components/sign-in-card";

const SignInPage = () => {
  return (
    <div className="p-5">
      <h1 className="text-center py-5 text-2xl text-pretty tracking-wide sm:text-4xl font-bold">Welcome to TradingExperts</h1>
      <div className="relative">
        <div className="absolute" />
        <div className="relative">
          <div className="flex justify-center items-center">
            <SignInCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
