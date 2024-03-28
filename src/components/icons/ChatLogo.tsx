"use client";
import React from "react";
import { useTheme } from "next-themes";

const ChatLogo = () => {
  const { theme } = useTheme();
  return (
    <div className=" flex flex-col items-center">
      <svg
        fill={theme === "dark" ? "white" : "black"}
        xmlns="http://www.w3.org/2000/svg"
        height="50"
        viewBox="0 -960 960 960"
        width="50"
      >
        <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
      </svg>
      <h2 className=" font-semibold text-2xl">ChitChat</h2>
    </div>
  );
};

export default ChatLogo;
