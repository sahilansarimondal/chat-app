"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import Nightmode from "./icons/Nightmode";
import Daymode from "./icons/Daymode";
import CreateChat from "./icons/CreateChat";
import { ModeToggle } from "./ModeToggle";
import SearchBar from "./SearchBar";
import HeaderSection from "./HeaderSection";

function Sidebar() {
  return (
    <div>
      <HeaderSection />
      <SearchBar />
    </div>
  );
}

export default Sidebar;
