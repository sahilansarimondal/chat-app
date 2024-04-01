"use client";

import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col dark:text-white justify-center items-center h-screen">
      this is home page
      <button className="border p-2" onClick={() => signIn()}>
        signIN
      </button>
    </div>
  );
};

export default page;
